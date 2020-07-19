const router = require('express').Router();
let AirForceStandard = require('../models/AirForceStandard.model');

router.route('/searchAirForceStandard').post((req, res) => {
    var ageGroup = null;
    if(req.body.age >= 17 && req.body.age <= 29)
    {
        ageGroup = "17-29";
    }
    else if (req.body.age >= 30 && req.body.age <= 39)
    {
        ageGroup = "30-39";
    }
    else
    {   
        ageGroup = "null";
    }
    var query = { sex: req.body.sex, age: ageGroup};
    AirForceStandard.findOne(query)
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