const { response } = require('express');
const { SeasonSchema } = require('../models');

const getSeasons = async (req, res = response) => {

    const temporadas = await SeasonSchema.find({ state: true })
        .populate({
            path: 'stagesIds',
            populate: [
                {
                    path: 'requirementIds',
                },
            ]
        });

    res.json({
        ok: true,
        temporadas
    });
}
const createSeason = async (req, res = response) => {

    const temporada = new SeasonSchema(req.body);

    try {
        temporada.responsible = req.uid;
        const tempradaGuardado = await temporada.save();
        const temporadaConReferencias = await SeasonSchema.findById(tempradaGuardado.id)
            .populate({
                path: 'stagesIds',
                populate: [
                    {
                        path: 'requirementIds',
                    },
                ]
            });

        res.json({
            ok: true,
            temporada: temporadaConReferencias
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}
module.exports = {
    getSeasons,
    createSeason,
}