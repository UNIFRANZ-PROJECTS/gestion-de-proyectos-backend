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
    price: {
        type: Number,
        default: 0,
        required: true,
    },
    state: {
        type: Boolean,
        default: false
    },
});
SeasonSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    object.start = moment(object.start).format('YYYY-MM-DD HH:mm:ss')
    object.end = moment(object.end).format('YYYY-MM-DD HH:mm:ss')
    object.stagesIds.forEach(e => {
        e.id = e._id;
        delete e._id;
        delete e.__v;
        e.requirementIds.forEach(ei => {
            ei.id = ei._id;
            delete ei._id;
            delete ei.__v;
        });
    });
    return object;
});


module.exports = model('Season', SeasonSchema);
