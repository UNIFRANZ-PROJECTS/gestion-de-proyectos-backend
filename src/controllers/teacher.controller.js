const { response } = require('express');
const { TeacherSchema } = require('../models');

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
    updateTeacher
}