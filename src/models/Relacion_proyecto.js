const { Schema, model } = require('mongoose');
const timestamp = require('mongoose-timestamp');
const moment = require('moment-timezone');
moment.tz.setDefault('America/La_Paz');

const RelationProjectSchema = Schema({
    parallelId: {
        type: Schema.Types.ObjectId,
        ref: 'Parallel',
    },
    projectId: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
    },
    subjectId: {
        type: Schema.Types.ObjectId,
        ref: 'Subject',
    },
    teacherId: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher',
    },
});

RelationProjectSchema.plugin(timestamp);

RelationProjectSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    object.teacherId.id = object.parallelId._id;
    delete object.parallelId._id;
    delete object.parallelId.__v;
    object.subjectId.id = object.subjectId._id;
    delete object.subjectId._id;
    delete object.subjectId.__v;
    object.teacherId.id = object.teacherId._id;
    delete object.teacherId._id;
    delete object.teacherId.__v;

    return object;
});



module.exports = model('RelationProject', RelationProjectSchema);
