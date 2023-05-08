const { response } = require('express');
const { RequirementSchema } = require('../models');

const getRequirements = async (req, res = response) => {

    const requisitos = await RequirementSchema.find({ state: true });

    res.json({
        ok: true,
        requisitos
    });
}
const createRequirement = async (req, res = response) => {

    const requirement = new RequirementSchema(req.body);

    try {
        requirement.responsible = req.uid;
        const requerimientoGuardado = await requirement.save();

        res.json({
            ok: true,
            requisito: requerimientoGuardado
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
    getRequirements,
    createRequirement,
}