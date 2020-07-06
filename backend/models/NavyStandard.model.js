const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NavyStandardSchema = new Schema({
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
    curlups:   {
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

const NavyStandard = mongoose.model('NavyStandard', NavyStandardSchema);

module.exports = NavyStandard;