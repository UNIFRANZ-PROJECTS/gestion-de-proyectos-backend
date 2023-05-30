const { Schema, model } = require('mongoose');
const timestamp = require('mongoose-timestamp');
const moment = require('moment-timezone');
moment.tz.setDefault('America/La_Paz');



const CategorySchema = Schema({
    name: {
        type: String,
        required: [true, 'La categoria es obligatoria']
    },
    state: {
        type: Boolean,
        default: true
    },
});

CategorySchema.plugin(timestamp);

CategorySchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});


module.exports = model('Category', CategorySchema);
