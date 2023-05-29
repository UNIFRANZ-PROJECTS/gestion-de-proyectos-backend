const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares');
const { createSuscribe } = require('../controllers/suscribe.controller');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();
// Todas tienes que pasar por la validación del JWT
router.use(validarJWT);

router.post(
    '/',
    [
        check('season', 'La temoirada es obligatorio').not().isEmpty(),
        check('student', 'El estudiante es obligatorio').not().isEmpty(),
        validarCampos
    ],
    createSuscribe
);

module.exports = router;