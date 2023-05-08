const { response } = require('express');
const bcrypt = require('bcryptjs');
const { UserSchema } = require('../models');
const ExcelJS = require('exceljs');
const workbook = new ExcelJS.Workbook();
const getUsers = async (req, res = response) => {

    const usuarios = await UserSchema.find()
        .select('name')
        .select('lastName')
        .select('code')
        .select('email')
        .select('state')
        .populate('rol', 'name')
        .populate('typeUser', 'name')
        .populate('responsible', 'name');

    res.json({
        ok: true,
        usuarios
    });
}

const createUser = async (req, res = response) => {

    const user = new UserSchema(req.body);
    try {
        user.responsible = req.uid;

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.email, salt);


        const usuarioGuardado = await user.save();
        const usuarioConReferencias = await UserSchema.findById(usuarioGuardado.id)
            .select('name')
            .select('lastName')
            .select('code')
            .select('email')
            .select('state')
            .populate('rol', 'name')
            .populate('typeUser', 'name')
            .populate('responsible', 'name');

        res.json({
            ok: true,
            usuario: usuarioConReferencias
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}
const createUsers = async (req, res = response) => {
    // const user = new UsuarioSchema(req.body);
    try {
        const { typeUser, rol } = req.body;
        const { tempFilePath } = req.files.archivo
        console.log(typeUser)
        console.log(rol)
        // await TeacherSchema.deleteMany({})
        workbook.xlsx.readFile(tempFilePath)
            .then((value) => {
                const worksheet = value.worksheets[0];
                const rows = worksheet.getRows(2, worksheet.rowCount);
                const usuarios = [];
                rows.forEach((row) => {
                    if (row.values.some(value => value !== null)) {
                        const usuario = new UserSchema();
                        usuario.name = row.getCell(1).value;
                        usuario.lastName = row.getCell(2).value;
                        usuario.email = `${row.getCell(4).value}@undefinid.com`;
                        usuario.code = row.getCell(4).value;
                        usuario.rol = rol;
                        usuario.typeUser = typeUser;
                        usuario.password = row.getCell(4).value;
                        usuario.responsible = req.uid;
                        usuarios.push(usuario);
                    }
                });

                UserSchema.insertMany(usuarios)
                    .then(() => {
                        return res.json({
                            ok: true,
                        });
                    })
                    .catch((error) => {
                        console.log(error)
                        res.status(500).json({
                            ok: false,
                            msg: 'Por favor hable con el administrador'
                        });
                    });
            })
            .catch((error) => {
                console.log(error)
                res.status(500).json({
                    ok: false,
                    msg: 'Por favor hable con el administrador'
                });
            });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}
const updateUser = async (req, res = response) => {

    const userId = req.params.id;

    try {

        const nuevoUsuario = {
            ...req.body
        }

        const usuarioActualizado = await UserSchema.findByIdAndUpdate(userId, nuevoUsuario, { new: true },);

        const usuarioConReferencias = await UserSchema.findById(usuarioActualizado.id)
            .select('name')
            .select('lastName')
            .select('code')
            .select('email')
            .select('state')
            .populate('rol', 'name')
            .populate('typeUser', 'name')
            .populate('responsible', 'name');
        res.json({
            ok: true,
            usuario: usuarioConReferencias
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}
module.exports = {
    getUsers,
    createUser,
    createUsers,
    updateUser
}