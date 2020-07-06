const router = require('express').Router();
let AirForceTest = require('../models/AirForceTest.model');

router.route('/searchAirForceTest').get((req, res) => {
    var query = { username: req.body.username};
    AirForceTest.find(query)
    .then(AirForceTests => res.json(AirForceTests))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addAirForceTest').post((req, res) => {
    const username = req.body.username;
    const sex = req.body.sex;
    const age = req.body.age;
    const pushups = req.body.pushups;
    const situps = req.body.situps;
    const run = req.body.run;
    const passed = req.body.passed;

    const newAirForceTest = new AirForceTest({
        username,
        sex,
        age,
        pushups,
        situps,
        run,
        passed,
    });

    newAirForceTest.save()
    .then(() => res.json('AirForce Test added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;