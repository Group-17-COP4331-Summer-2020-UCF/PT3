const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AirForceStandardSchema = new Schema({
    sex:   {
        type: String,
        required: true,
    },
    age:   {
        type: String,
        required: true,
        trim: true,
    },
    pushups:  {
        type: Number,
        required: true,
        trim: true,
    },
    situps:   {
        type: Number,
        required: true,
        trim: true,
    },
    run: {
        type: String,
        required: true,
        trim: true,
    },
});

const AirForceStandard = mongoose.model('AirForceStandard', AirForceStandardSchema);

module.exports = AirForceStandard;