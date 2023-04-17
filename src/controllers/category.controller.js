const { response } = require('express');
const { CategorySchema } = require('../models');

const getCategory = async (req, res = response) => {

    const categories = await CategorySchema.find();

    res.json({
        ok: true,
        categories
    });
}


const createCategory = async (req, res = response) => {

    const Categoria = new CategorySchema(req.body);

    try {

        const categoriaGuardado = await Categoria.save();

        res.json({
            ok: true,
            categoria: categoriaGuardado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}
const updateCategory = async (req, res = response) => {


    const categoryId = req.params.id;

    try {

        const nuevaCategoria = {
            ...req.body
        }

        const categoriaActualizado = await CategorySchema.findByIdAndUpdate(categoryId, nuevaCategoria, { new: true },);

        res.json({
            ok: true,
            categoria: categoriaActualizado
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            errors: [{ msg: "Por favor hable con el administrador" }]
        });
    }
}
module.exports = {
    getCategory,
    createCategory,
    updateCategory
}