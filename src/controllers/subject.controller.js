const { response } = require('express');
const { SubjectSchema } = require('../models');

const ExcelJS = require('exceljs');
const workbook = new ExcelJS.Workbook();
const getSubject = async (req, res = response) => {

    const subject = await SubjectSchema.find()
        .populate('teacherIds');

    res.json({
        ok: true,
        subject
    });
}
const createSubject = async (req, res = response) => {

    const subject = new SubjectSchema(req.body);

    try {

        const materiaGuardada = await subject.save();

        const materiaConReferencias = await SubjectSchema.findById(materiaGuardada.id)
            .populate('teacherIds');

        res.json({
            ok: true,
            subject: materiaConReferencias
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            errors: [{ msg: "Por favor hable con el administrador" }]
        });
    }
}
const createSubjects = async (req, res = response) => {
    // const user = new UsuarioSchema(req.body);
    try {
        const { tempFilePath } = req.files.archivo
        await SubjectSchema.deleteMany({})
        workbook.xlsx.readFile(tempFilePath)
            .then((value) => {
                const worksheet = value.worksheets[0];
                const rows = worksheet.getRows(2, worksheet.rowCount);
                let materias = [];

                rows.forEach((row) => {
                    if (row.values.some(value => value !== null)) {
                        const subject = new SubjectSchema();
                        let existingSubject = null;
                        for (const key in materias) {
                            if (materias[key].code == row.getCell(2).value) {
                                existingSubject = materias[key];
                                existingSubject.teacherIds.push(row.getCell(4).value);
                                break; // Salimos del bucle para evitar crear un nuevo objeto
                            }
                        }
                        if (existingSubject === null) {
                            subject.name = row.getCell(1).value;
                            subject.code = row.getCell(2).value;
                            subject.semester = row.getCell(3).value;
                            subject.teacherIds.push(row.getCell(4).value);
                            materias.push(subject);
                        }
                    }
                })

                SubjectSchema.insertMany(materias)
                    .then(() => {
                        return res.json({
                            ok: true,
                        });
                    })
                    .catch((error) => {
                        console.log(error)
                        res.status(500).json({
                            ok: false,
                            msg: 'Por favor hable con el administrador'
                        });
                    });
            })
            .catch((error) => {
                console.log(error)
                res.status(500).json({
                    ok: false,
                    msg: 'Por favor hable con el administrador'
                });
            });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}
const updateSubject = async (req, res = response) => {


    const subjectId = req.params.id;

    try {

        const nuevaMateria = {
            ...req.body
        }

        const materiaActualizado = await TypeProjectSchema.findByIdAndUpdate(subjectId, nuevaMateria, { new: true },);
        const materiaConReferencias = await SubjectSchema.findById(materiaActualizado.id)
            .populate('teacherIds');
        res.json({
            ok: true,
            subject: materiaConReferencias
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            errors: [{ msg: "Por favor hable con el administrador" }]
        });
    }
}
module.exports = {
    getSubject,
    createSubject,
    createSubjects,
    updateSubject,
}