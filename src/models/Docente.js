const { Schema, model } = require('mongoose');

const TeacherSchema = Schema({

    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    lastName: {
        type: String,
        required: [true, 'El apellido es obligatorio']
    },
    description: {
        type: String,
        required: [true, 'La descripción es obligatoria']
    },
    specialty: {
        type: String,
        required: [true, 'La especialidad es obligatoria']
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

TeacherSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model('Teacher', TeacherSchema);
