const { response } = require('express');
const { SubjectSchema, TeacherSchema, parallelSchema } = require('../models');

const ExcelJS = require('exceljs');

const workbook = new ExcelJS.Workbook();
const getSubject = async (req, res = response) => {

    const materias = await SubjectSchema.find()

    res.json({
        ok: true,
        subject: materias
    });
}
const createSubject = async (req, res = response) => {

    const subject = new SubjectSchema(req.body);

    try {
        subject.user = req.uid;
        const materiaGuardada = await subject.save();

        const materiaConReferencias = await SubjectSchema.findById(materiaGuardada.id);

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
async function getTeacher(id, name, lastName, ci, email) {
    console.log(name, lastName);
    const newTeacher = new TeacherSchema();
    const teacher = await TeacherSchema.findOne({ ci: ci });
    if (!teacher) {
        newTeacher.name = name;
        newTeacher.lastName = lastName;
        newTeacher.ci = ci;
        newTeacher.email = email;
        newTeacher.user = id;
        const docenteGuardado = await newTeacher.save();
        return docenteGuardado.id;
    } else {
        return teacher.id;
    }

}
async function createSubjects(req, res = response) {
    try {
        const fs = require('fs');
        const file = Buffer.from(req.body.archivo, 'base64');
        fs.writeFileSync('/tmp/temp.xlsx', file); // o /tmp/temp.png, dependiendo del formato
        workbook.xlsx.readFile('/tmp/temp.xlsx')
            .then(async (value) => {
                const worksheet = value.worksheets[0];
                const rows = worksheet.getRows(2, worksheet.rowCount);

                for (let i = 0; i < rows.length; i++) {
                    const row = rows[i];

                    if (row.values.some(value => value !== null)) {
                        const teacherId = await getTeacher(req.uid, row.getCell(5).value, row.getCell(6).value, row.getCell(7).value, row.getCell(8).value);
                        const newSubject = new SubjectSchema();
                        const subject = await SubjectSchema.findOne({ code: row.getCell(1).value });
                        console.log('codigo', row.getCell(2).value)
                        if (!subject) {
                            console.log('no existe');
                            newSubject.code = row.getCell(1).value;
                            newSubject.name = row.getCell(2).value;
                            newSubject.semester = row.getCell(3).value;
                            newSubject.user = req.uid;
                            // newSubject.teacherIds = [teacherId];
                            await newSubject.save();
                        }
                        //creamos el paralelo
                        const newParallel = new parallelSchema();
                        newParallel.name = row.getCell(4).value;
                        newParallel.teacherId = teacherId;
                        newParallel.subjectId = !subject ? newSubject.id : subject.id;
                        await newParallel.save();
                    }
                }

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
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        });
    }
}
const updateSubject = async (req, res = response) => {


    const subjectId = req.params.id;

    try {

        const nuevaMateria = {
            ...req.body
        }

        const materiaActualizado = await SubjectSchema.findByIdAndUpdate(subjectId, nuevaMateria, { new: true },);
        res.json({
            ok: true,
            subject: materiaActualizado
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