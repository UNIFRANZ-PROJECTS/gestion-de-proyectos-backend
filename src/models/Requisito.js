const { Schema, model } = require('mongoose');

const RequirementSchema = Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    responsible: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    state: {
        type: Boolean,
        default: true
    },

});

RequirementSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});



module.exports = model('Requirement', RequirementSchema);
