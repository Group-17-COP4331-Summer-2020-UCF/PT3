const router = require('express').Router();
let NavyTest = require('../models/NavyTest.model');

router.route('/searchNavyTest').post((req, res) => {
    var query = { username: req.body.username};
    NavyTest.find(query)
    .then(NavyTests => res.json(NavyTests))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/addNavyTest').post((req, res) => {
    const username = req.body.username;
    const sex = req.body.sex;
    const age = req.body.age;
    const pushups = req.body.pushups;
    const curlups = req.body.curlups;
    const run = req.body.run;
    const passed = req.body.passed;

    const newNavyTest = new NavyTest({
        username,
        sex,
        age,
        pushups,
        curlups,
        run,
        passed,
    });

    newNavyTest.save()
    .then(() => res.json('Navy Test added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;