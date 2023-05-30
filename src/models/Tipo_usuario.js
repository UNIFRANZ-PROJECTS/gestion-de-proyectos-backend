const { Schema, model } = require('mongoose');
const timestamp = require('mongoose-timestamp');
const moment = require('moment-timezone');
moment.tz.setDefault('America/La_Paz');

const TypeUserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    state: {
        type: Boolean,
        default: true
    },
});

TypeUserSchema.plugin(timestamp);

TypeUserSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model('TypeUser', TypeUserSchema);
