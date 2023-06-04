const { response } = require('express');
const bcrypt = require('bcryptjs');
const UserSchema = require('./../models/Usuario');
const { generarJWT } = require('../helpers/jwt');
const { customAlphabet } = require("nanoid");
const { transporter } = require("../helpers/mailer");

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
                errors: [{ msg: "Contraseña incorrecto" }]
            });
        }
        if (!usuario.valid) {
            //obtener codigo
            const nanoid = customAlphabet("1234567890", 4);
            const codeg = nanoid();

            let verificationLink = `código: ${codeg}`;

            const nuevoUsuario = {
                ...usuario
            }
            //encriptar codigo
            const salt = bcrypt.genSaltSync();
            const encript = bcrypt.hashSync(codeg, salt);

            const usuarioActualizado = await UserSchema.findByIdAndUpdate(
                usuario.id,
                { $set: { codeValid: encript } },
                { new: true }
            );
            console.log('Usuario actualizado:', usuarioActualizado);
            /* SEND EMAIL */
            // send mail with defined transport object
            await transporter.sendMail({
                from: `"CENTRO DE ESTUDIANTES" < ${process.env.USERGMAIL} > `, // sender address
                // to: 'moisic.mo@gmail.com',
                to: usuario.email,
                subject: "Codigo de verificacion", // Subject line
                html: `
            < b > Inserte el siguiente código para completar el proceso</ >
            <br>
                <h1>${verificationLink}<h1 />
                    `, // html body
            });
            //        
            return res.status(403).json({
                name: usuario.name,
                errors: [{ msg: `Necesitamos validar la cuenta, para completar el procedimiento acabamos de enviar un codigo al correo: ${usuario.email}` }]
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
const validCode = async (req, res = response) => {
    const { code, email, password } = req.body;
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
                errors: [{ msg: "Contraseña incorrecto" }]
            });
        }
        if (!bcrypt.compareSync(code, usuario.codeValid)) {
            return res.status(400).json({
                errors: [{ msg: "El codigo es incorrecto" }]
            });
        }
        return res.json({
            ok: true,
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}
const changePassword = async (req, res = response) => {
    const { code, email, password } = req.body;
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
        if (!bcrypt.compareSync(code, usuario.codeValid)) {
            return res.status(400).json({
                errors: [{ msg: "El codigo es incorrecto" }]
            });
        }
        // Confirmar los passwords

        const nuevoUsuario = {
            ...usuario
        }
        //encriptar codigo
        const salt = bcrypt.genSaltSync();
        const encript = bcrypt.hashSync(password, salt);

        const usuarioActualizado = await UserSchema.findByIdAndUpdate(
            usuario.id,
            { $set: { password: encript, valid: true } },
            { new: true }
        );
        console.log('Usuario actualizado:', usuarioActualizado);
        /* SEND EMAIL */
        // send mail with defined transport object
        await transporter.sendMail({
            from: `"CENTRO DE ESTUDIANTES" < ${process.env.USERGMAIL} > `, // sender address
            // to: 'moisic.mo@gmail.com',
            to: usuario.email,
            subject: "Activacion de cuenta", // Subject line
            html: `
                < b > Felicidades tu cuenta ya esta activa </ >
                <br>
                        `, // html body
        });
        return res.json({
            ok: true,
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}


module.exports = {
    loginUsuario,
    revalidarToken,
    validCode,
    changePassword
}