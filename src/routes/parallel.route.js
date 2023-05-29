const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares');
const { getParallel, createParallel, updateParallel } = require('../controllers/parallel.controller');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();
// Todas tienes que pasar por la validación del JWT
router.use(validarJWT);
//obtener todos los pararelos
router.get('/', getParallel)
//crear paralelo
router.post(
    '/',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('teacherId', 'El docente es obligatorio').not().isEmpty(),
        check('subjectId', 'La materia es obligatorio').not().isEmpty(),
        validarCampos
    ],
    createParallel
);
// editar paralelo
router.put('/:id', updateParallel)

module.exports = router;