
const TeacherSchema = require('./Docente');
const SubjectSchema = require('./Materia');
const PermisionSchema = require('./Permiso');
const ProjectSchema = require('./Proyecto');
const RoleSchema = require('./Rol');
const TypeUserSchema = require('./Tipo_usuario');
const UserSchema = require('./Usuario');
const InscriptionSchema = require('./Inscripcion');
const SeasonSchema = require('./Temporada');
const StageSchema = require('./Etapa');
const RequirementSchema = require('./Requisito');
const TypeProjectSchema = require('./Tipo_proyecto');
const CategorySchema = require('./Categoria');
const RelationProjectSchema = require('./Relacion_proyecto');
const ProductSchema = require('./Product');
const parallelSchema = require('./Paralelo');

module.exports = {
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
    TypeProjectSchema,
    CategorySchema,
    RelationProjectSchema,
    ProductSchema,
    parallelSchema,
}