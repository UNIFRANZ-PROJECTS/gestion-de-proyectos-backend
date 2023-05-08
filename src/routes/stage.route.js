const { Router } = require('express');
const { check } = require('express-validator');
const { getStages, createStage } = require('../controllers/stage.controller');
const { validarJWT, validarCampos } = require('../middlewares');
const router = Router();

// Todas tienes que pasar por la validación del JWT
router.use(validarJWT);


// Obtener roles
router.get('/', getStages);

//Crear nuevo rol
router.post(
    '/',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('start', 'El nombre es obligatorio').not().isEmpty(),
        check('end', 'El nombre es obligatorio').not().isEmpty(),
        check('weighing', 'El nombre es obligatorio').not().isEmpty(),
        validarCampos
    ],
    createStage
);

module.exports = router;