const router = require('express').Router();
let ArmyTest = require('../models/ArmyTest.model');

router.route('/searchArmyTest').post((req, res) => {
    var query = { username: req.body.username};
    ArmyTest.find(query)
    .then(ArmyTests => res.json(ArmyTests))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addArmyTest').post((req, res) => {
    const username = req.body.username;
    const sex = req.body.sex;
    const age = req.body.age;
    const pushups = req.body.pushups;
    const situps = req.body.situps;
    const run = req.body.run;
    const passed = req.body.passed;

    const newArmyTest = new ArmyTest({
        username,
        sex,
        age,
        pushups,
        situps,
        run,
        passed,
    });

    newArmyTest.save()
    .then(() => res.json('Army Test added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;