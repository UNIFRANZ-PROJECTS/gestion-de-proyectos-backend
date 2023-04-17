const { response } = require('express');
const { TypeProjectSchema } = require('../models');

const getTypeProject = async (req, res = response) => {

    const tiposProyectos = await TypeProjectSchema.find();

    res.json({
        ok: true,
        tiposProyectos
    });
}


const createTypeProject = async (req, res = response) => {

    const tipoProyecto = new TypeProjectSchema(req.body);

    try {

        const tipoProyectoGuardado = await tipoProyecto.save();

        res.json({
            ok: true,
            tipoProyecto: tipoProyectoGuardado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}
const updateTypeProject = async (req, res = response) => {


    const tipoProyectoId = req.params.id;

    try {

        const nuevoProyecto = {
            ...req.body
        }

        const tipoProyectoActualizado = await TypeProjectSchema.findByIdAndUpdate(tipoProyectoId, nuevoProyecto, { new: true },);

        res.json({
            ok: true,
            tipoProyecto: tipoProyectoActualizado
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            errors: [{ msg: "Por favor hable con el administrador" }]
        });
    }
}
module.exports = {
    getTypeProject,
    createTypeProject,
    updateTypeProject
}