const { Router } = require('express');
const { check } = require('express-validator');

const { validarJWT, validarCampos } = require('../middlewares');
const { getTypeUsers, createTypeUser, updateTypeUser, deleteTypeUser } = require('../controllers/type_user.controller');

const { typeUserExists } = require("../helpers/db-validators");

const router = Router();

// Todas tienes que pasar por la validación del JWT
router.use(validarJWT);


// Obtener tipos de usuarios 
router.get('/', getTypeUsers);

// Crear tipo de usuario
router.post('/',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check("name").custom(typeUserExists),
        validarCampos
    ], createTypeUser);

// editar tipo de usuario
router.put('/:id', updateTypeUser)

module.exports = router;