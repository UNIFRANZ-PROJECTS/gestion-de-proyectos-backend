const { Schema, model } = require('mongoose');
const moment = require('moment-timezone');
moment.tz.setDefault('America/La_Paz');


const StageSchema = Schema({

    name: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    requirementIds: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Requirement',
            required: true
        }
    ],
    weighing: {
        type: Number,
        required: true,
    },
    state: {
        type: Boolean,
        default: true
    },

});

StageSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    object.start = moment(object.start).format('YYYY-MM-DD HH:mm:ss')
    object.end = moment(object.end).format('YYYY-MM-DD HH:mm:ss')
    return object;
});



module.exports = model('Stage', StageSchema);
