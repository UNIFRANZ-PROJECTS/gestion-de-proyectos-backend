const { response } = require('express');
const { InscriptionSchema, UserSchema, SeasonSchema } = require('../models');
const generateDocument = require('./document.pdf');

const createSuscribe = async (req, res = response) => {
    const inscrpcion = new InscriptionSchema(req.body);

    try {
        const temporada = await SeasonSchema.findById(inscrpcion.season)
        inscrpcion.responsible = req.uid;
        const inscripcionGuardado = await inscrpcion.save();
        const usuario = await UserSchema.findById(inscrpcion.student)
            .select('name lastName code email state')
            .populate('rol', 'name')
            .populate('typeUser', 'name')
            .populate('responsible', 'name');

        const estudiante = await Promise.all(
            [usuario].map(async (element) => {
                let inscripcion = await InscriptionSchema.findOne({ season: inscrpcion.season, student: element.id });
                const { __v, _id, ...object } = element.toObject();
                object.id = _id;
                return {
                    ...object,
                    inscripcion: inscripcion ? true : false,
                };
            })
        );
        console.log('inscrito ;3')
        const detail = [
            {
                cant: 1,
                description: `Inscripcion ${temporada.name}`,
                price: temporada.price,
            },
        ];
        const pdfBase64 = await generateDocument(estudiante[0], inscripcionGuardado.id, req.uid, detail, 500, '01/02/2023 07:02 PM');

        res.json({
            ok: true,
            student: estudiante[0],
            document: pdfBase64
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            errors: [{ msg: "Por favor hable con el administrador" }]
        });
    }
};

module.exports = {
    createSuscribe
};
