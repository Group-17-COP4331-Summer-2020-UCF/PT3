const router = require('express').Router();
let MarineTest = require('../models/MarineTest.model');

router.route('/searchMarineTest').get((req, res) => {
    var query = { username: req.body.username};
    MarineTest.find(query)
    .then(MarineTests => res.json(MarineTests))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addMarineTest').post((req, res) => {
    const username = req.body.username;
    const sex = req.body.sex;
    const age = req.body.age;
    const pullups = req.body.pullups;
    const crunches = req.body.crunches;
    const run = req.body.run;
    const passed = req.body.passed;

    const newMarineTest = new MarineTest({
        username,
        sex,
        age,
        pullups,
        crunches,
        run,
        passed,
    });

    newMarineTest.save()
    .then(() => res.json('Army Test added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;