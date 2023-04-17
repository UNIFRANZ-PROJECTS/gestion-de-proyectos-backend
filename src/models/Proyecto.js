const { Schema, model } = require('mongoose');

const ProjectSchema = Schema({
    subjectIDs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Subject',
            required: true
        }
    ],
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
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
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
    state: {
        type: Boolean,
        default: true
    },
});

ProjectSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    object.subjectIDs.forEach(e => {
        e.teacherIds.forEach(e => {
            e.id = e._id;
            delete e._id;
            delete e.__v;
        });
        e.id = e._id;
        delete e._id;
        delete e.__v;
    });
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
    return object;
});



module.exports = model('Project', ProjectSchema);

