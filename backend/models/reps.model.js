const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    branch:{
    },
    sex:{
    },
    ageGroup:{
    },
    username:{
    },
    workout:{
    },
    repCount:   {
        type: int,
        required: true,
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
