const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArmyStandardSchema = new Schema({
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

const ArmyStandard = mongoose.model('ArmyStandard', ArmyStandardSchema);

module.exports = ArmyStandard;