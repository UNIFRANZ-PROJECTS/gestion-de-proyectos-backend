const { Schema, model } = require('mongoose');

const SubjectSchema = Schema({

    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    teacherIds: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Teacher',
            required: true
        }
    ],
    state: {
        type: Boolean,
        default: true
    },

});

SubjectSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    object.teacherIds.forEach(e => {
        e.id = e._id;
        delete e._id;
        delete e.__v;
    });
    return object;
});



module.exports = model('Subject', SubjectSchema);
