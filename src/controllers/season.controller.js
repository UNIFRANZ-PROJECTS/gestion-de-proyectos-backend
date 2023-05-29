const { response } = require('express');
const { SeasonSchema } = require('../models');

const getSeasons = async (req, res = response) => {

    const temporadas = await SeasonSchema.find()
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
const updateSeason = async (req, res = response) => {


    const seasonID = req.params.id;

    try {

        const nuevaTemporada = {
            ...req.body
        }

        const temporadaActualizado = await SeasonSchema.findByIdAndUpdate(seasonID, nuevaTemporada, { new: true },);
        const temporadaConReferencias = await SeasonSchema.findById(temporadaActualizado.id)
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
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            errors: [{ msg: "Por favor hable con el administrador" }]
        });
    }
}
const enableSeason = async (req, res = response) => {


    const seasonID = req.params.id;

    try {
        // Desactivar todas las temporadas excepto la especificada
        await SeasonSchema.updateMany(
            { _id: { $ne: seasonID } },
            { $set: { state: false } }
        );
        const nuevaTemporada = {
            ...req.body
        }
        await SeasonSchema.findByIdAndUpdate(seasonID, nuevaTemporada, { new: true },);

        const temporadas = await SeasonSchema.find()
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
            temporadas: temporadas
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            errors: [{ msg: "Por favor hable con el administrador" }]
        });
    }
}
module.exports = {
    getSeasons,
    createSeason,
    updateSeason,
    enableSeason,
}