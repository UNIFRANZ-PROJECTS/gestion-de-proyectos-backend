/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { loginUsuario, revalidarToken, validCode, changePassword } = require('../controllers/auth.controller');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();

router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuario
);


router.get('/renew', validarJWT, revalidarToken);

router.post(
    '/validcode',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        check('code', 'El nombre es obligatorio').not().isEmpty(),
        validarCampos
    ],
    validCode
)
router.post(
    '/change',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        check('code', 'El nombre es obligatorio').not().isEmpty(),
        validarCampos
    ],
    changePassword
)


module.exports = router;