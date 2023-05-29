const { Schema, model } = require('mongoose');

const parallelSchema = Schema({


    name: {
        type: Number,
        required: true,
        default: 1
    },
    teacherId: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    },
    subjectId: {
        type: Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
    state: {
        type: Boolean,
        default: true
    },

});

parallelSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    object.teacherId.id = object.teacherId._id;
    delete object.teacherId._id;
    delete object.teacherId.__v;
    object.subjectId.id = object.subjectId._id;
    delete object.subjectId._id;
    delete object.subjectId.__v;
    return object;
});



module.exports = model('Parallel', parallelSchema);
