const { Schema, model } = require('mongoose');
const timestamp = require('mongoose-timestamp');
const moment = require('moment-timezone');
moment.tz.setDefault('America/La_Paz');


const PermisionSchema = Schema({
    name: {
        type: String,
        required: [true, 'El rol es obligatorio']
    },
    category: {
        type: String,
        required: [true, 'La categoria es obligatoria']
    },
    state: {
        type: Boolean,
        default: true
    },
});

PermisionSchema.plugin(timestamp);

PermisionSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});


module.exports = model('Permision', PermisionSchema);
