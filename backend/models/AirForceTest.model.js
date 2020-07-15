//Model for logging a users test taken for AirForce Branch.
//Will have which user took test and parameters for the test and whether the test was passed or not. 
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AirForceTestSchema = new Schema({
    username:   {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
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
    passed: {  
        type: Boolean,
        required: true, 
    },
}, {
    timestamps: true,
});

const AirForceTest = mongoose.model('AirForceTest', AirForceTestSchema);

module.exports = AirForceTest;