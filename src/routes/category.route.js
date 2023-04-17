const { Router } = require('express');
const { check } = require('express-validator');

const { validarJWT, validarCampos } = require('../middlewares');
const { getCategory, createCategory, updateCategory } = require('../controllers/category.controller');
const { get } = require('mongoose');


const router = Router();

// Todas tienes que pasar por la validación del JWT
router.use(validarJWT);


// Obtener categorias
router.get('/', getCategory);
//Crear categoria
router.post('/',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        validarCampos
    ], createCategory);
//Editar categoria
router.put('/:id', updateCategory)
module.exports = router;

