const { Router } = require('express');
const { check } = require('express-validator');
const { getSeasons, createSeason, updateSeason, enableSeason } = require('../controllers/season.controller');
const { validarJWT, validarCampos } = require('../middlewares');
const router = Router();

// Todas tienes que pasar por la validación del JWT
router.use(validarJWT);


// Obtener temporadas
router.get('/', getSeasons);

//Crear nueva temporada
router.post(
    '/',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        validarCampos
    ],
    createSeason
);
//Editar temporada
router.put('/:id', updateSeason)
//Habilitar temporada
router.put('/enable/:id', enableSeason)
module.exports = router;