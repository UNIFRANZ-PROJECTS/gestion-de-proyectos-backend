
const { Schema, model } = require('mongoose');

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
    amount: {
        type: Number,
        required: true
    },
    state: {
        type: Boolean,
        default: true
    },

});

InscriptionSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});



module.exports = model('Inscription', InscriptionSchema);
