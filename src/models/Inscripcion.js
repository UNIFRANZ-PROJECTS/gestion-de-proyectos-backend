const { Schema, model } = require('mongoose');
const timestamp = require('mongoose-timestamp');
const moment = require('moment-timezone');
moment.tz.setDefault('America/La_Paz');

const InscriptionSchema = Schema({
    season: {
        type: Schema.Types.ObjectId,
        ref: 'Season'
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    responsible: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    state: {
        type: Boolean,
        default: true
    },
});

InscriptionSchema.plugin(timestamp);

InscriptionSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});



module.exports = model('Inscription', InscriptionSchema);
