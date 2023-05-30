const { Schema, model } = require('mongoose');
const timestamp = require('mongoose-timestamp');
const moment = require('moment-timezone');
moment.tz.setDefault('America/La_Paz');


const ProductSchema = Schema({

    name: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    price: {
        type: Number,
        required: [true, 'El precio es requerido']
    },
    state: {
        type: Boolean,
        default: true
    },
});

ProductSchema.plugin(timestamp);

ProductSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;

    return object;
});



module.exports = model('Product', ProductSchema);
