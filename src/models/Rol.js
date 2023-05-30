const { Schema, model } = require('mongoose');
const timestamp = require('mongoose-timestamp');
const moment = require('moment-timezone');
moment.tz.setDefault('America/La_Paz');


const RoleSchema = Schema({
    name: {
        type: String,
        required: [true, 'El rol es obligatorio']
    },
    permisionIds: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Permision',
            required: true
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    state: {
        type: Boolean,
        default: true
    },
});

RoleSchema.plugin(timestamp);

RoleSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    object.permisionIds.forEach(e => {
        e.id = e._id;
        delete e._id;
        delete e.__v;
    });
    return object;
});

module.exports = model('Role', RoleSchema);
