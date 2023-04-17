const { Schema, model } = require('mongoose');

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
TypeProjectSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});


module.exports = model('TypeProject', TypeProjectSchema);