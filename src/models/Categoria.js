const { Schema, model } = require('mongoose');

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
CategorySchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});


module.exports = model('Category', CategorySchema);
