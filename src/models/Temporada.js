const { Schema, model } = require('mongoose');
const moment = require('moment-timezone');
moment.tz.setDefault('America/La_Paz');

const SeasonSchema = Schema({
    name: {
        type: String,
        required: [true, 'El rol es obligatorio']
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    stagesIds: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Stage',
            required: true
        }
    ],
    responsible: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    state: {
        type: Boolean,
        default: true
    },
});
SeasonSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    object.start = moment(object.start).format('YYYY-MM-DD HH:mm:ss')
    object.end = moment(object.end).format('YYYY-MM-DD HH:mm:ss')
    return object;
});


module.exports = model('Season', SeasonSchema);
