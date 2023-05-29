const { Schema, model } = require('mongoose');

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

ProductSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;

    return object;
});



module.exports = model('Product', ProductSchema);
