const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos, validarArchivoSubir } = require('../middlewares');
const { getSubject, createSubject, createSubjects, updateSubject } = require('../controllers/subject.controller');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();
// Todas tienes que pasar por la validación del JWT
router.use(validarJWT);

router.get('/', getSubject)

router.post(
    '/',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('semester', 'El semestre es obligatorio').not().isEmpty(),
        validarCampos
    ],
    createSubject
);
router.post(
    '/file',
    [
        validarArchivoSubir,
        validarCampos
    ],
    validarJWT,
    createSubjects,
);
//Editar tipo de proyecto
router.put('/:id', updateSubject)
module.exports = router;