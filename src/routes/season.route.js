const { Router } = require('express');
const { check } = require('express-validator');
const { getSeasons, createSeason } = require('../controllers/season.controller');
const { validarJWT, validarCampos } = require('../middlewares');
const router = Router();

// Todas tienes que pasar por la validación del JWT
router.use(validarJWT);


// Obtener roles
router.get('/', getSeasons);

//Crear nuevo rol
router.post(
    '/',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        validarCampos
    ],
    createSeason
);

module.exports = router;