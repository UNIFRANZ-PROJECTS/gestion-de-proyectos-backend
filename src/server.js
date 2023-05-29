const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');

const { dbConnection } = require('./database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth: '/api/auth',
            permision: '/api/permision',
            role: '/api/role',
            typeUser: '/api/typeuser',
            user: '/api/user',
            project: '/api/project',
            teacher: '/api/teacher',
            subject: '/api/subject',
            category: '/api/category',
            typeProject: '/api/typeproject',
            season: '/api/season',
            stage: '/api/stage',
            requirement: '/api/requirement',
            suscribe: '/api/suscribe',
            parallel: '/api/parallel',
        }


        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {

        this.app.use(express.json({ limit: '50mb' }));
        this.app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Headers', 'x-token');
            next();
        });
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio Público
        const publicPath = path.resolve(__dirname, './../public');
        this.app.use(express.static(publicPath));
        // this.app.use(express.static('./../public'));
        this.app.use('/image', express.static(__dirname + './../assets'));
        // Fileupload - Carga de archivos
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true
        }));

    }

    routes() {
        this.app.use(this.paths.auth, require('./routes/auth.route'));
        this.app.use(this.paths.permision, require('./routes/permision.route'));
        this.app.use(this.paths.role, require('./routes/role.route'));
        this.app.use(this.paths.typeUser, require('./routes/type_user.route'));
        this.app.use(this.paths.user, require('./routes/user.route'));
        this.app.use(this.paths.project, require('./routes/project.route'));
        this.app.use(this.paths.teacher, require('./routes/teacher.route'));
        this.app.use(this.paths.subject, require('./routes/subject.route'));
        this.app.use(this.paths.category, require('./routes/category.route'));
        this.app.use(this.paths.typeProject, require('./routes/type_project.route'));
        this.app.use(this.paths.season, require('./routes/season.route'));
        this.app.use(this.paths.stage, require('./routes/stage.route'));
        this.app.use(this.paths.requirement, require('./routes/requirement.route'));
        this.app.use(this.paths.suscribe, require('./routes/suscribe.route'));
        this.app.use(this.paths.parallel, require('./routes/parallel.route'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}




module.exports = Server;
