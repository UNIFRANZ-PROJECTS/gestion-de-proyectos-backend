const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares');
const { getAllSuscribe, getStudentsDebt, getDocumentById, createSuscribe, filter, downloadReport } = require('../controllers/suscribe.controller');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();
// Todas tienes que pasar por la validación del JWT
router.use(validarJWT);

router.get('/', getAllSuscribe)

router.get('/studentsdebt', getStudentsDebt)

router.get('/print/:id', getDocumentById);

router.post(
    '/',
    [
        check('season', 'La temoirada es obligatorio').not().isEmpty(),
        check('student', 'El estudiante es obligatorio').not().isEmpty(),
        check('total', 'El estudiante es obligatorio').not().isEmpty(),
        validarCampos
    ],
    createSuscribe
);
router.post(
    '/filter',
    [
        check('start', 'La fecha inicio es obligatorio').not().isEmpty(),
        check('end', 'La fecha fin es obligatorio').not().isEmpty(),
        validarCampos
    ],
    filter
)
router.post(
    '/report',
    [
        check('start', 'La fecha inicio es obligatorio').not().isEmpty(),
        check('end', 'La fecha fin es obligatorio').not().isEmpty(),
        validarCampos
    ],
    downloadReport
)

module.exports = router;