const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { getTeacher, createTeacher, updateTeacher } = require('../controllers/teacher.controller');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();
// Todas tienes que pasar por la validación del JWT
router.use(validarJWT);

router.get('/', getTeacher)

router.post(
    '/',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('lastName', 'El apellido es obligatorio').not().isEmpty(),
        check('description', 'La descripcion es obligatorio').not().isEmpty(),
        check('specialty', 'La especialidad es obligatorio').not().isEmpty(),
        validarCampos
    ],
    createTeacher
);
// editar docente
router.put('/:id', updateTeacher)

module.exports = router;