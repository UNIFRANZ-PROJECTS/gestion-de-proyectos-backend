const { Schema, model } = require('mongoose');
const timestamp = require('mongoose-timestamp');
const moment = require('moment-timezone');
moment.tz.setDefault('America/La_Paz');

const TypeProjectSchema = Schema({
    name: {
        type: String,
        required: [true, 'El tipo de proyecto es obligatorio']
    },
    state: {
        type: Boolean,
        default: true
    },
});

TypeProjectSchema.plugin(timestamp);


TypeProjectSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});


module.exports = model('TypeProject', TypeProjectSchema);