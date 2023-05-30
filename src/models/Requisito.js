const { Schema, model } = require('mongoose');
const timestamp = require('mongoose-timestamp');
const moment = require('moment-timezone');
moment.tz.setDefault('America/La_Paz');

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

RequirementSchema.plugin(timestamp);

RequirementSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});



module.exports = model('Requirement', RequirementSchema);
