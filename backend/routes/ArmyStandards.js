const router = require('express').Router();
let ArmyStandard = require('../models/ArmyStandard.model');

router.route('/searchArmyStandard').post((req, res) => {
    var ageGroup = null;
    if(req.body.age <= 21)
    {
        ageGroup = "17-21";
    }
    else if (req.body.age >= 22 && req.body.age <= 26)
    {
        ageGroup = "22-26";
    }
    else if (req.body.age >= 27 && req.body.age <= 31)
    {
        ageGroup = "27-31";
    }
    else if (req.body.age >= 32 && req.body.age <= 36)
    {
        ageGroup = "32-36";
    }
    else if (req.body.age >= 37)
    {
        ageGroup = "37-41";
    }
    else
    {   
        ageGroup = "null";
    }
    var query = { sex: req.body.sex, age: ageGroup};
    ArmyStandard.findOne(query)
    .then(Armystandards => res.json(Armystandards))
    .catch(err => res.status(400).json('Error: ' + err));
});


// Only needed to add the standards one time. If needed to add to the database again use this code.
/*router.route('/addArmyStandard').post((req, res) => {
    const sex = req.body.sex;
    const age = req.body.age;
    const pushups = req.body.pushups;
    const situps = req.body.situps;
    const run = req.body.run;

    const newArmyStandard = new ArmyStandard({
        sex,
        age,
        pushups,
        situps,
        run,
    });

    newArmyStandard.save()
    .then(() => res.json('Army Standard added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});*/ 

module.exports = router;