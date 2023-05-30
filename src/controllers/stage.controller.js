const { response } = require('express');
const { StageSchema } = require('../models');

const getStages = async (req, res = response) => {

    const etapas = await StageSchema.find()
        .populate('requirementIds');

    res.json({
        ok: true,
        etapas: etapas
    });
}
const createStage = async (req, res = response) => {

    const etapa = new StageSchema(req.body);

    try {

        const etapaGuardado = await etapa.save();
        const etapaConReferencias = await StageSchema.findById(etapaGuardado.id)
            .populate('requirementIds');
        res.json({
            ok: true,
            etapa: etapaConReferencias
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}
const updateStages = async (req, res = response) => {

    const stageId = req.params.id;

    try {
        const nuevoStage = {
            ...req.body
        }
        const stageActualizado = await StageSchema.findByIdAndUpdate(stageId, nuevoStage, { new: true },);
        const etapaConReferencias = await StageSchema.findById(stageActualizado.id)
            .populate('requirementIds');
        res.json({
            ok: true,
            etapa: etapaConReferencias
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}
module.exports = {
    getStages,
    createStage,
    updateStages,
}