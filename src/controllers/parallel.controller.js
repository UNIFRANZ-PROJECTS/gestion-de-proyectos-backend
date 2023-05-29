const { response } = require('express');
const { parallelSchema } = require('../models');
const getParallel = async (req, res = response) => {

    const paralelos = await parallelSchema.find()
        .populate({
            path: 'teacherId'
        })
        .populate({
            path: 'subjectId'
        });
    res.json({
        ok: true,
        paralelos
    });
}
const createParallel = async (req, res = response) => {

    const paralelo = new parallelSchema(req.body);

    try {
        console.log(paralelo)
        const paraleloGuardado = await paralelo.save();
        const paraleloConReferencias = await parallelSchema.findById(paraleloGuardado.id)
            .populate({
                path: 'teacherId'
            })
            .populate({
                path: 'subjectId'
            });
        res.json({
            ok: true,
            paralelo: paraleloConReferencias
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            errors: [{ msg: "Por favor hable con el administrador" }]
        });
    }
}

const updateParallel = async (req, res = response) => {

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
    getParallel,
    createParallel,
    updateParallel,
}