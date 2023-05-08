const { response } = require('express');
const { TeacherSchema } = require('../models');
const ExcelJS = require('exceljs');
const workbook = new ExcelJS.Workbook();
const getTeacher = async (req, res = response) => {

    const teacher = await TeacherSchema.find();

    res.json({
        ok: true,
        teacher
    });
}
const createTeacher = async (req, res = response) => {

    const teacher = new TeacherSchema(req.body);

    try {
        teacher.user = req.uid;
        const docenteGuardado = await teacher.save();
        res.json({
            ok: true,
            teacher: docenteGuardado
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            errors: [{ msg: "Por favor hable con el administrador" }]
        });
    }
}
const createTeachers = async (req, res = response) => {
    // const user = new UsuarioSchema(req.body);
    try {
        console.log('SUBIENDO DOCENTES')
        console.log(req.files.archivo)

        const { tempFilePath } = req.files.archivo
        await TeacherSchema.deleteMany({})
        workbook.xlsx.readFile(tempFilePath)
            .then((value) => {
                const worksheet = value.worksheets[0];
                const rows = worksheet.getRows(2, worksheet.rowCount);
                const docentes = [];

                rows.forEach((row) => {
                    if (row.values.some(value => value !== null)) {
                        const teacher = new TeacherSchema();
                        teacher.name = row.getCell(1).value;
                        teacher.lastName = row.getCell(2).value;
                        teacher.description = 'N.E.';
                        teacher.specialty = 'N.E.';
                        teacher.user = req.uid;
                        docentes.push(teacher);
                    }
                });

                TeacherSchema.insertMany(docentes)
                    .then(() => {
                        return res.json({
                            ok: true,
                        });
                    })
                    .catch((error) => {
                        console.log('error')
                        console.log(error)
                        res.status(500).json({
                            ok: false,
                            msg: 'Por favor hable con el administrador'
                        });
                    });
            })
            .catch((error) => {
                console.log('error')
                console.log(error)
                res.status(500).json({
                    ok: false,
                    msg: 'Por favor hable con el administrador'
                });
            });

    } catch (error) {
        console.log('error')
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}
const donwloadTeachers = async (req, res = response) => {

    const teachers = await TeacherSchema.find();
    // Crear un nuevo libro de Excel
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Mi hoja de cálculo');

    // Agregar datos a la hoja de cálculo
    worksheet.columns = [
        { header: 'Id', key: 'id', width: 10 },
        { header: 'Nombre', key: 'name', width: 20 },
        { header: 'Apellido', key: 'lastName', width: 20 },
        { header: 'Descripcion', key: 'description', width: 20 },
        { header: 'Especialidad', key: 'specialty', width: 20 },

    ];
    for await (const teacher of teachers) {
        worksheet.addRow({
            id: teacher.id,
            name: teacher.name,
            lastName: teacher.lastName,
            description: teacher.description,
            specialty: teacher.specialty,
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
}
const updateTeacher = async (req, res = response) => {

    const teacherId = req.params.id;

    try {

        const nuevoDocente = {
            ...req.body
        }

        const docenteActualizado = await TeacherSchema.findByIdAndUpdate(teacherId, nuevoDocente, { new: true },);

        res.json({
            ok: true,
            teacher: docenteActualizado
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            errors: [{ msg: "Por favor hable con el administrador" }]
        });
    }
}
module.exports = {
    getTeacher,
    createTeacher,
    createTeachers,
    donwloadTeachers,
    updateTeacher
}