require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { response } = require('express');
const {
    TeacherSchema,
    SubjectSchema,
    PermisionSchema,
    ProjectSchema,
    RoleSchema,
    TypeUserSchema,
    UserSchema,
    InscriptionSchema,
    SeasonSchema,
    StageSchema,
    RequirementSchema,
} = require('./../models');


// Conecta a la base de datos
mongoose.connect(process.env.DB_CNN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false // Agrega esta opción
});

// Establece la conexión antes de borrar la base de datos y las colecciones
mongoose.connection.on('connected', () => {
    // Borra todas las colecciones
    mongoose.connection.db.dropDatabase()
        .then(async () => {
            console.log('Base de datos borrada correctamente.');

            //creando PERMISOS
            const listPermisions = await PermisionSchema.insertMany(permisions);
            const idPermisions = listPermisions.map(e => e._id);
            // creando ROL
            const rol = RoleSchema({
                name: 'Desarrollador',
                permisionIds: idPermisions,
                user: null,
                state: true,
            });
            const rolCreated = await rol.save();
            // creando TIPO DE USUARIO
            const TypeUser = new TypeUserSchema({
                name: 'Desarrollador',
                user: null,
                state: true
            });
            const typeUserCreated = await TypeUser.save();
            // creando USUARIO
            const user = new UserSchema({
                rol: rolCreated._id,
                typeUser: typeUserCreated._id,
                name: 'Carlos',
                lastName: 'Cahuaya',
                code: 'SIS1',
                email: 'carlos@gmail.com',
                password: 'carlos123',
                valid: true,
                state: true,
                isSuperUser: true,
            });
            const userCreated = await user.save();
            // editando ROL
            const updateRolObj = { user: userCreated._id };
            await RoleSchema.findByIdAndUpdate(rolCreated._id, updateRolObj, { new: true });
            //editando TIPO DE USUARIO
            const updateTypeUserObj = { user: userCreated._id };
            await TypeUserSchema.findByIdAndUpdate(typeUserCreated._id, updateTypeUserObj, { new: true });
            //editando USUARIO
            const salt = bcrypt.genSaltSync();
            const updateUserObj = { responsible: userCreated._id, password: bcrypt.hashSync(userCreated.password, salt) };

            await UserSchema.findByIdAndUpdate(userCreated._id, updateUserObj, { new: true });



        })
        .catch(err => console.error(err))
        .finally(() => {
            // Cierra la conexión a la base de datos al finalizar
            mongoose.connection.close();
        });
});
//lista de PERMISOS
const permisions = [
    //Proyectos
    {
        name: 'Ver Proyectos',
        category: 'Proyectos',
        state: true,
    },
    {
        name: 'Crear Proyectos',
        category: 'Proyectos',
        state: true,
    },
    {
        name: 'Editar Proyectos',
        category: 'Proyectos',
        state: true,
    },
    {
        name: 'Eliminar Proyectos',
        category: 'Proyectos',
        state: true,
    },
    {
        name: 'Registrar avances del proyecto',
        category: 'Proyectos',
        state: true,
    },
    {
        name: 'Registrar observacion del proyecto',
        category: 'Proyectos',
        state: true,
    },
    //Categorias
    {
        name: 'Ver Categorías',
        category: 'Categorías',
        state: true,
    },
    {
        name: 'Crear Categorías',
        category: 'Categorías',
        state: true,
    },
    {
        name: 'Editar Categorías',
        category: 'Categorías',
        state: true,
    },
    {
        name: 'Eliminar Categorías',
        category: 'Categorías',
        state: true,
    },
    //Tipo Proyectos
    {
        name: 'Ver Tipo Proyectos',
        category: 'Tipo Proyectos',
        state: true,
    },
    {
        name: 'Crear Tipo Proyectos',
        category: 'Tipo Proyectos',
        state: true,
    },
    {
        name: 'Editar Tipo Proyectos',
        category: 'Tipo Proyectos',
        state: true,
    },
    {
        name: 'Eliminar Tipo Proyectos',
        category: 'Tipo Proyectos',
        state: true,
    },
    //USUARIOS
    {
        name: 'Ver Usuarios',
        category: 'Usuarios',
        state: true,
    },
    {
        name: 'Crear Usuarios',
        category: 'Usuarios',
        state: true,
    },
    {
        name: 'Editar Usuarios',
        category: 'Usuarios',
        state: true,
    },
    {
        name: 'Eliminar Usuarios',
        category: 'Usuarios',
        state: true,
    },
    //Tipo Usuarios
    {
        name: 'Ver Tipo Usuarios',
        category: 'Tipo Usuarios',
        state: true,
    },
    {
        name: 'Crear Tipo Usuarios',
        category: 'Tipo Usuarios',
        state: true,
    },
    {
        name: 'Editar Tipo Usuarios',
        category: 'Tipo Usuarios',
        state: true,
    },
    {
        name: 'Eliminar Tipo Usuarios',
        category: 'Tipo Usuarios',
        state: true,
    },
    //Roles
    {
        name: 'Ver Roles',
        category: 'Roles',
        state: true,
    },
    {
        name: 'Crear Roles',
        category: 'Roles',
        state: true,
    },
    {
        name: 'Editar Roles',
        category: 'Roles',
        state: true,
    },
    {
        name: 'Eliminar Roles',
        category: 'Roles',
        state: true,
    },
    //Permisos
    {
        name: 'Ver Permisos',
        category: 'Permisos',
        state: true,
    },
    //Reportes
];