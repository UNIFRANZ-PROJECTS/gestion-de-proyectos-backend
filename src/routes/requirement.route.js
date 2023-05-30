const { Router } = require('express');
const { check } = require('express-validator');
const { getRequirements, createRequirement, updateRequirement } = require('../controllers/requirement.controller');
const { validarJWT, validarCampos } = require('../middlewares');
const router = Router();

// Todas tienes que pasar por la validación del JWT
router.use(validarJWT);


// Obtener roles
router.get('/', getRequirements);

//Crear nuevo rol
router.post(
    '/',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('description', 'El nombre es obligatorio').not().isEmpty(),
        validarCampos
    ],
    createRequirement
);
//Editar requerimiento
router.put('/:id', updateRequirement)

module.exports = router;