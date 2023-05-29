const { Schema, model } = require('mongoose');

const ProjectSchema = Schema({
    code: {
        type: String,
        required: true
    },
    responsible: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    studentIds: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    ],
    title: {
        type: String,
        required: true
    },
    generalObjective: {
        type: String,
        default: ''
    },
    researchProblem: {
        type: String,
        default: ''
    },
    typeProyect: {
        type: Schema.Types.ObjectId,
        ref: 'TypeProject',
        required: [true, 'El tipo de proyecto es obligatorio']
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'La categoria es obligatorio']
    },
    urlDocument: {
        type: String,
    },
    season: {
        type: Schema.Types.ObjectId,
        ref: 'Season',
        required: true
    },
    state: {
        type: Boolean,
        default: true
    },
});

ProjectSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    object.studentIds.forEach(e => {
        e.id = e._id;
        delete e._id;
        delete e.__v;
    });
    object.typeProyect.id = object.typeProyect._id;
    delete object.typeProyect._id;
    delete object.typeProyect.__v;
    object.category.id = object.category._id;
    delete object.category._id;
    delete object.category.__v;
    object.season.id = object.season._id;
    delete object.season._id;
    delete object.season.__v;
    object.season.stagesIds.forEach(e => {
        e.id = e._id;
        delete e._id;
        delete e.__v;
        e.requirementIds.forEach(e => {
            e.id = e._id;
            delete e._id;
            delete e.__v;
        })
    });
    return object;
});



module.exports = model('Project', ProjectSchema);

