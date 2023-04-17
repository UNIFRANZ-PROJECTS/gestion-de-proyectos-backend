const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    rol: {
        type: Schema.Types.ObjectId,
        ref: 'Role',
        required: [true, 'El rol es obligatorio']
    },
    typeUser: {
        type: Schema.Types.ObjectId,
        ref: 'TypeUser',
        required: [true, 'El tipo de usuario es obligatorio']
    },
    responsible: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    lastName: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    code: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    valid: {
        type: Boolean,
        default: false
    },
    state: {
        type: Boolean,
        default: true
    },
    isSuperUser: {
        type: Boolean,
        default: false
    },
});

UserSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model('User', UserSchema);
