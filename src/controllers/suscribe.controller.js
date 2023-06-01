const { response } = require('express');
const { InscriptionSchema, UserSchema, SeasonSchema } = require('../models');
const generateDocument = require('./document.pdf');
const moment = require('moment');
const { GoogleDriveService } = require('./googleDriveService.js');
const fs = require('fs');
const ExcelJS = require('exceljs');

const https = require('https');
const axios = require('axios');
const { Readable } = require('stream');
const getAllSuscribe = async (req, res = response) => {

    const temporada = await SeasonSchema.findOne({ state: true })
        .populate({
            path: 'stagesIds',
            populate: [
                {
                    path: 'requirementIds',
                },
            ]
        });
    if (!temporada) {
        res.status(500).json({
            errors: [{ msg: "No hay ninguna temporada activa" }]
        });
    }
    const inscripciones = await InscriptionSchema.find({ season: temporada._id })
        .populate('student', 'name lastName code email state')
        .populate('responsible', 'name lastName code email state')

    res.json({
        ok: true,
        season: temporada,
        suscribes: inscripciones
    });
}

const getStudentsDebt = async (req, res = response) => {
    const temporada = await SeasonSchema.findOne({ state: true });
    if (!temporada) {
        return res.status(500).json({
            errors: [{ msg: "No hay ninguna temporada activa" }]
        });
    }

    try {
        const estudiantes = await UserSchema.find({
            state: true,
            _id: { $nin: await getInscribedStudentIds(temporada.id) }
        })
            .select('name lastName code email state')
            .populate('rol', 'name')
            .populate('typeUser', 'name')
            .populate('responsible', 'name');

        res.json({
            ok: true,
            students: estudiantes
        });
    } catch (error) {
        console.error('Error al obtener los estudiantes:', error);
        res.status(500).json({
            errors: [{ msg: "Error al obtener los estudiantes" }]
        });
    }
};




const getDocumentById = async (req, res = response) => {
    const suscribeId = req.params.id;
    const googleDriveService = new GoogleDriveService();
    try {
        //TODO: FALTA
        const suscribe = await InscriptionSchema.findById(suscribeId);
        const fileData = await googleDriveService.searchFile(suscribe.url);

        const filePath = '/tmp/document.pdf';
        console.log(fileData)
        const response = await axios({
            method: 'GET',
            url: fileData.config.url,
            responseType: 'stream',
        });

        const stream = response.data;
        const writeStream = fs.createWriteStream(filePath);

        stream.pipe(writeStream);

        await new Promise((resolve, reject) => {
            writeStream.on('finish', resolve);
            writeStream.on('error', reject);
        });

        console.log('Archivo guardado exitosamente:', filePath);
        const base64String = filePath.toString('base64');
        res.json({
            ok: true,
            document: base64String,
        });
    } catch (error) {
        console.error('Error al obtener los estudiantes:', error);
        res.status(500).json({
            errors: [{ msg: "Error al obtener los estudiantes" }]
        });
    }
};



const getInscribedStudentIds = async (seasonId) => {
    const inscripciones = await InscriptionSchema.find({ season: seasonId }).select('student');
    return inscripciones.map(inscripcion => inscripcion.student);
};


const createSuscribe = async (req, res = response) => {
    const nuevaInscrpcion = new InscriptionSchema(req.body);

    try {
        const validInscripcion = await InscriptionSchema.findOne({ season: req.body.season, student: req.body.student });
        if (validInscripcion) {
            return res.status(500).json({
                errors: [{ msg: "El estudiante ya se encuentra inscrito en la presente temporada" }]
            });
        }
        const temporada = await SeasonSchema.findById(nuevaInscrpcion.season)
        nuevaInscrpcion.responsible = req.uid;
        nuevaInscrpcion.total = temporada.price;
        nuevaInscrpcion.amountDelivered = req.body.total;
        nuevaInscrpcion.returnedAmount = req.body.total - temporada.price;
        const inscripcionGuardado = await nuevaInscrpcion.save();
        const inscripcion = await InscriptionSchema.findById(inscripcionGuardado);
        const usuario = await UserSchema.findById(nuevaInscrpcion.student)
            .select('name lastName code email state')
            .populate('rol', 'name')
            .populate('typeUser', 'name')
            .populate('responsible', 'name');

        const estudiante = await Promise.all(
            [usuario].map(async (element) => {
                let inscripcion = await InscriptionSchema.findOne({ season: nuevaInscrpcion.season, student: element.id });
                const { __v, _id, ...object } = element.toObject();
                object.id = _id;
                return {
                    ...object,
                    inscripcion: inscripcion ? true : false,
                };
            })
        );
        console.log('inscrito ;3')
        const detail = [
            {
                cant: 1,
                description: `Inscripcion ${temporada.name}`,
                price: temporada.price,
            },
        ];
        const { pdfBase64, response } = await generateDocument(
            estudiante[0],
            inscripcionGuardado.id,
            req.uid,
            detail,
            req.body.total,
            moment(inscripcion.createdAt).format('DD/MM/YYYY hh:mm A'),
            `Inscripciones ${temporada.name}`
        );
        console.log(response.data)
        //actualizar tabla
        const updateInscriptionObj = {
            url: response.data.id
        };
        await InscriptionSchema.findByIdAndUpdate(inscripcionGuardado.id, { $set: updateInscriptionObj }, { new: true });
        const studentSuscribe = await InscriptionSchema.findOne({ season: temporada._id, student: estudiante[0].id })
            .populate('student', 'name lastName code email state')
            .populate('responsible', 'name lastName code email state')
        res.json({
            ok: true,
            studentSuscribe: studentSuscribe,
            document: pdfBase64
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            errors: [{ msg: "Por favor hable con el administrador" }]
        });
    }
};
const filter = async (req, res = response) => {
    try {
        console.log(req.body)
        const { start, end } = req.body;
        const temporada = await SeasonSchema.findOne({ state: true })
            .populate({
                path: 'stagesIds',
                populate: [
                    {
                        path: 'requirementIds',
                    },
                ]
            });
        if (!temporada) {
            res.status(500).json({
                errors: [{ msg: "No hay ninguna temporada activa" }]
            });
        }
        const endDate = new Date(end);
        endDate.setHours(23, 59, 0, 0);
        const query = {
            season: temporada._id,
            createdAt: { $gte: new Date(start), $lte: endDate }
        };
        const inscripciones = await InscriptionSchema.find(query)
            .populate('student', 'name lastName code email state')
            .populate('responsible', 'name lastName code email state')

        res.json({
            ok: true,
            season: temporada,
            suscribes: inscripciones
        });
    } catch (error) {
        console.error('Error al obtener los estudiantes:', error);
        res.status(500).json({
            errors: [{ msg: "Error al obtener los estudiantes" }]
        });
    }
};
const downloadReport = async (req, res = response) => {
    try {

        console.log(req.body)
        const { start, end } = req.body;


        const temporada = await SeasonSchema.findOne({ state: true })
            .populate({
                path: 'stagesIds',
                populate: [
                    {
                        path: 'requirementIds',
                    },
                ]
            });
        if (!temporada) {
            res.status(500).json({
                errors: [{ msg: "No hay ninguna temporada activa" }]
            });
        }

        const query = {
            season: temporada._id,
        };
        if (start != 'null' && end != 'null') {
            const endDate = new Date(end);
            endDate.setHours(23, 59, 0, 0);
            query.createdAt = { $gte: new Date(start), $lte: endDate };
        }
        const inscripciones = await InscriptionSchema.find(query)
            .populate('student', 'name lastName code email state')
            .populate('responsible', 'name lastName code email state')

        // Crear un nuevo libro de Excel
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Mi hoja de cálculo');

        // Agregar datos a la hoja de cálculo
        worksheet.columns = [
            { header: 'Id', key: 'id', width: 10 },
            { header: 'Estudiante', key: 'student', width: 20 },
            { header: 'Código Estudiante', key: 'code', width: 20 },
            { header: 'Responsable', key: 'responsible', width: 20 },
            { header: 'Fecha', key: 'date', width: 20 },
            { header: 'Monto', key: 'amount', width: 20 },
        ];
        for await (const suscribe of inscripciones) {
            worksheet.addRow({
                id: suscribe.id,
                student: `${suscribe.student.name} ${suscribe.student.lastName}`,
                code: suscribe.student.code,
                responsible: `${suscribe.responsible.name} ${suscribe.responsible.lastName}`,
                date: suscribe.createdAt,
                amount: suscribe.total
            });
        }
        // Generar el archivo Excel en memoria
        workbook.xlsx.writeBuffer()
            .then(function (buffer) {
                const base64 = buffer.toString('base64');

                // Enviar la cadena de base64 en la respuesta
                res.setHeader('Content-Type', 'application/json');
                res.status(200).send({
                    fileName: 'example.xlsx',
                    base64: base64
                });
            })
            .catch(function (error) {
                console.log('Error al generar el archivo Excel: ' + error);
                res.status(500).send('Error al generar el archivo Excel');
            });
    } catch (error) {
        console.error('Error al obtener los estudiantes:', error);
        res.status(500).json({
            errors: [{ msg: "Error al obtener los estudiantes" }]
        });
    }
};
module.exports = {
    getAllSuscribe,
    getStudentsDebt,
    getDocumentById,
    createSuscribe,
    filter,
    downloadReport,
};
