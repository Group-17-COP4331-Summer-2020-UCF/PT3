const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MarineStandardSchema = new Schema({
    sex:   {
        type: String,
        required: true,
    },
    age:   {
        type: String,
        required: true,
        trim: true,
    },
    pullups:  {
        type: Number,
        required: true,
        trim: true,
    },
    crunches:   {
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

const MarineStandard = mongoose.model('MarineStandard', MarineStandardSchema);

module.exports = MarineStandard;