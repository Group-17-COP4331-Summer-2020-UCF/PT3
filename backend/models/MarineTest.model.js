//Model for logging a users test taken for Marine Branch.
//Will have which user took test and parameters for the test and whether the test was passed or not. 
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MarineTestSchema = new Schema({
    username:   {
        type: String,
        required: true,
        unique: true,
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
    passed: {  
        type: Boolean,
        required: true, 
    },
}, {
    timestamps: true,
});

const MarineTest = mongoose.model('MarineTest', MarineTestSchema);

module.exports = MarineTest;