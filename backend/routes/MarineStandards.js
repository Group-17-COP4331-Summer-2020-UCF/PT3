const router = require('express').Router();
let MarineStandard = require('../models/MarineStandard.model');

router.route('/searchMarineStandard').post((req, res) => {
    var query = { sex: req.body.sex, age: req.body.age};
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