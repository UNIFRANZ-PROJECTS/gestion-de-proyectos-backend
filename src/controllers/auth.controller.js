const { response } = require('express');
const bcrypt = require('bcryptjs');
const UserSchema = require('./../models/Usuario');
const { generarJWT } = require('../helpers/jwt');


const loginUsuario = async (req, res = response) => {
    console.log('login', req.body)
    const { email, password } = req.body;

    try {

        const usuario = await UserSchema.findOne({ email })
            .populate({
                path: 'rol',
                populate: [
                    {
                        path: 'permisionIds',
                    },
                    {
                        path: 'user',
                        select: 'name'
                    },
                ],
            })
            .populate('typeUser', 'name')
            .populate('responsible', 'name');

        if (!usuario) {
            return res.status(400).json({
                errors: [{ msg: "El usuario no existe con ese correo" }]
            });
        }

        // Confirmar los passwords
        const validPassword = bcrypt.compareSync(password, usuario.password);

        if (!validPassword) {
            return res.status(400).json({
                errors: [{ msg: "Password incorrecto" }]
            });
        }

        // Generar JWT
        const token = await generarJWT(usuario.id, usuario.name);

        res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            lastName: usuario.lastName,
            email: usuario.email,
            code: usuario.code,
            rol: usuario.rol,
            type_user: usuario.typeUser.name,
            valid: usuario.valid,
            isSuperUser: usuario.isSuperUser,
            token,
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            errors: [{ msg: "Por favor hable con el administrador" }]
        });
    }

}


const revalidarToken = async (req, res = response) => {

    const { uid, name } = req;

    // Generar JWT
    const token = await generarJWT(uid, name);

    res.json({
        ok: true,
        token
    })
}




module.exports = {
    loginUsuario,
    revalidarToken
}