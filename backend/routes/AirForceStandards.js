const router = require('express').Router();
let AirForceStandard = require('../models/AirForceStandard.model');

router.route('/searchAirForceStandard').get((req, res) => {
    var query = { sex: req.body.sex, age: req.body.age};
    AirForceStandard.find(query)
    .then(AirForcestandards => res.json(AirForcestandards))
    .catch(err => res.status(400).json('Error: ' + err));
});


//Only needed to add the standards one time. If needed to add to the database again use this code.
/*router.route('/addAirForceStandard').post((req, res) => {
    const sex = req.body.sex;
    const age = req.body.age;
    const pushups = req.body.pushups;
    const situps = req.body.situps;
    const run = req.body.run;

    const newAirForceStandard = new AirForceStandard({
        sex,
        age,
        pushups,
        situps,
        run,
    });

    newAirForceStandard.save()
    .then(() => res.json('AirForce Standard added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});*/

module.exports = router;