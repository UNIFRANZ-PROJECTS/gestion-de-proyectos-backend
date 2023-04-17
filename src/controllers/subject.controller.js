const { response } = require('express');
const { SubjectSchema } = require('../models');

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
    updateSubject,
}