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
    CategorySchema,
    TypeProjectSchema,
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
            //creando ETAPAS
            await StageSchema.insertMany(stages);
            //creando CATEGORIAS PARA PROYECTOS
            await CategorySchema.insertMany(categories);
            //creando TIPOS DE PROYECTOS
            await TypeProjectSchema.insertMany(typeProjects);
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
                name: 'CARLOS FERNANDO',
                lastName: 'CAHUAYA MOLLE',
                code: 'SIS7055297',
                email: 'capocarls@gmail.com',
                password: 'capocarls@gmail.com',
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
//lista de CATEGORIAS PARA PROYECTOS
const categories = [
    {
        name: 'HARDWARE'
    },
    {
        name: 'SOFTWARE'
    },
    {
        name: 'REDES'
    },
    {
        name: 'VIDEOJUEGOS'
    }
];
//lista de TIPOS DE PROYECTO
const typeProjects = [
    {
        name: 'SEMESTRAL'
    },
    {
        name: 'INTEGRADOR'
    }
];
//lista de ETAPAS
const stages = [
    {
        name: 'HITO 1',
        start: new Date().toLocaleString(),
        end: new Date().toLocaleString(),
        requirementIds: [],
        weighing: 25
    },
    {
        name: 'HITO 2',
        start: new Date().toLocaleString(),
        end: new Date().toLocaleString(),
        requirementIds: [],
        weighing: 25
    },
    {
        name: 'HITO 3',
        start: new Date().toLocaleString(),
        end: new Date().toLocaleString(),
        requirementIds: [],
        weighing: 25
    },
    {
        name: 'HITO 4',
        start: new Date().toLocaleString(),
        end: new Date().toLocaleString(),
        requirementIds: [],
        weighing: 25
    },
    {
        name: 'HITO 5',
        start: new Date().toLocaleString(),
        end: new Date().toLocaleString(),
        requirementIds: [],
        weighing: 25
    }
];
//lista de PERMISOS
const permisions = [

    //Temporadas
    {
        name: 'Ver Temporadas',
        category: 'Temporadas',
        state: true,
    },
    {
        name: 'Crear Temporadas',
        category: 'Temporadas',
        state: true,
    },
    {
        name: 'Editar Temporadas',
        category: 'Temporadas',
        state: true,
    },
    {
        name: 'Eliminar Temporadas',
        category: 'Temporadas',
        state: true,
    },
    //Etapas
    {
        name: 'Ver Etapas',
        category: 'Etapas',
        state: true,
    },
    {
        name: 'Crear Etapas',
        category: 'Etapas',
        state: true,
    },
    {
        name: 'Editar Etapas',
        category: 'Etapas',
        state: true,
    },
    {
        name: 'Eliminar Etapas',
        category: 'Etapas',
        state: true,
    },
    //Requisitos
    {
        name: 'Ver Requisitos',
        category: 'Requisitos',
        state: true,
    },
    {
        name: 'Crear Requisitos',
        category: 'Requisitos',
        state: true,
    },
    {
        name: 'Editar Requisitos',
        category: 'Requisitos',
        state: true,
    },
    {
        name: 'Eliminar Requisitos',
        category: 'Requisitos',
        state: true,
    },
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
    //Docentes
    {
        name: 'Ver Docentes',
        category: 'Docentes',
        state: true,
    },
    {
        name: 'Crear Docentes',
        category: 'Docentes',
        state: true,
    },
    {
        name: 'Editar Docentes',
        category: 'Docentes',
        state: true,
    },
    {
        name: 'Eliminar Docentes',
        category: 'Docentes',
        state: true,
    },
    //Materias
    {
        name: 'Ver Materias',
        category: 'Materias',
        state: true,
    },
    {
        name: 'Crear Materias',
        category: 'Materias',
        state: true,
    },
    {
        name: 'Editar Materias',
        category: 'Materias',
        state: true,
    },
    {
        name: 'Eliminar Materias',
        category: 'Materias',
        state: true,
    },
    //Paralelos
    {
        name: 'Ver Paralelos',
        category: 'Paralelos',
        state: true,
    },
    {
        name: 'Crear Paralelos',
        category: 'Paralelos',
        state: true,
    },
    {
        name: 'Editar Paralelos',
        category: 'Paralelos',
        state: true,
    },
    {
        name: 'Eliminar Paralelos',
        category: 'Paralelos',
        state: true,
    },
    //Reportes
];