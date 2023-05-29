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
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    state: {
        type: Boolean,
        default: true
    },

});

SubjectSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});



module.exports = model('Subject', SubjectSchema);
