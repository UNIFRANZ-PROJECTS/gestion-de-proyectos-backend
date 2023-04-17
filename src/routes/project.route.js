const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { getProjects, createProject, updateProject } = require('../controllers/project.controller');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();
// Todas tienes que pasar por la validación del JWT
router.use(validarJWT);

router.get('/', getProjects)

router.post(
    '/',
    [
        check('name', 'El nomnre es obligatorio').not().isEmpty(),
        check('description', 'La descripcion es obligatorio').not().isEmpty(),
        check('typeProyect', 'La descripcion es obligatorio').not().isEmpty(),
        check('category', 'La descripcion es obligatorio').not().isEmpty(),
        validarCampos
    ],
    createProject
);
//Editar proyecto
router.put('/:id', updateProject)

module.exports = router;