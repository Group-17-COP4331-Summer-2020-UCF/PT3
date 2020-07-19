const router = require('express').Router();
let MarineStandard = require('../models/MarineStandard.model');

router.route('/searchMarineStandard').post((req, res) => {
    var ageGroup = null;
    if(req.body.age <= 20)
    {
        ageGroup = "17-20";
    }
    else if (req.body.age >= 21 && req.body.age <= 25)
    {
        ageGroup = "21-25";
    }
    else if (req.body.age >= 26 && req.body.age <= 30)
    {
        ageGroup = "26-30";
    }
    else if (req.body.age >= 31 && req.body.age <= 35)
    {
        ageGroup = "31-35";
    }
    else if (req.body.age >= 36 && req.body.age <= 40)
    {
        ageGroup = "36-40";
    }
    else if (req.body.age >= 41 && req.body.age <= 45)
    {
        ageGroup = "41-45";
    }
    else if (req.body.age >= 46 && req.body.age <= 50)
    {
        ageGroup = "46-50";
    }
    else if(req.body.age >= 51)
    {
        ageGroup = "51+";
    }
    else
    {   
        ageGroup = "null";
    }
    var query = { sex: req.body.sex, age: ageGroup};
    MarineStandard.findOne(query)
    .then(Marinestandards => res.json(Marinestandards))
    .catch(err => res.status(400).json('Error: ' + err));
});


// Only needed to add the standards one time. If they need to be added again use this code.
/*router.route('/addMarineStandard').post((req, res) => {
    const sex = req.body.sex;
    const age = req.body.age;
    const pullups = req.body.pullups;
    const crunches = req.body.crunches;
    const run = req.body.run;

    const newMarineStandard = new MarineStandard({
        sex,
        age,
        pullups,
        crunches,
        run,
    });

    newMarineStandard.save()
    .then(() => res.json('Marine Standard added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});*/

module.exports = router;