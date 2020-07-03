const router = require('express').Router();
let reps = require('../models/reps.model');

router.route('/').get((req, res) => {
    reps.find()
    .then(reps => res.json(reps))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const branch = req.body.branch;
    const sex = req.body.sex;
    const ageGroup = req.body.ageGroup;
    const userName = req.body.username;
    const workout = req.body.workout;
    const repCount = req.body.repCount;

    const newReps = new reps({branch, sex, ageGroup, username, workout, repCount});

    newReps.save()
    .then(() => res.json('Reps added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
