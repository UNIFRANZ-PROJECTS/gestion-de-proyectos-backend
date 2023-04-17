const { Router } = require('express');
const { check } = require('express-validator');

const { validarJWT, validarCampos } = require('../middlewares');
const { getTypeProject, createTypeProject, updateTypeProject } = require('../controllers/type_project.controller');


const router = Router();

// Todas tienes que pasar por la validación del JWT
router.use(validarJWT);


// Obtener tipo de proyecto
router.get('/', getTypeProject);
//Crear tipo de proyecto
router.post('/',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        validarCampos
    ], createTypeProject);
//Editar tipo de proyecto
router.put('/:id', updateTypeProject)

module.exports = router;

