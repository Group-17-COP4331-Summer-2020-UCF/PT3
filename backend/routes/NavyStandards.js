const router = require('express').Router();
let NavyStandard = require('../models/NavyStandard.model');

router.route('/searchNavyStandard').post((req, res) => {
    var ageGroup = null;
    if(req.body.age <= 19)
    {
        ageGroup = "17-19";
    }
    else if (req.body.age >= 20 && req.body.age <= 24)
    {
        ageGroup = "20-24";
    }
    else if (req.body.age >= 25 && req.body.age <= 29)
    {
        ageGroup = "25-29";
    }
    else if (req.body.age >= 30 && req.body.age <= 34)
    {
        ageGroup = "30-34";
    }
    else if (req.body.age >= 35)
    {
        ageGroup = "35-39";
    }
    else
    {   
        ageGroup = "null";
    }
    var query = { sex: req.body.sex, age: ageGroup};
    NavyStandard.findOne(query)
    .then(NavyStandards => res.json(NavyStandards))
    .catch(err => res.status(400).json('Error: ' + err));
});


// Only needed to add the standards one time. If needed to add to the database again use this code.
/*router.route('/addNavyStandard').post((req, res) => {
    const sex = req.body.sex;
    const age = req.body.age;
    const pushups = req.body.pushups;
    const curlups = req.body.curlups;
    const run = req.body.run;

    const newNavyStandard = new NavyStandard({
        sex,
        age,
        pushups,
        curlups,
        run,
    });

    newNavyStandard.save()
    .then(() => res.json('Navy Standard added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});*/

module.exports = router;