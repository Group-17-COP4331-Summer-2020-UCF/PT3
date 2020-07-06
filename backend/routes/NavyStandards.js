const router = require('express').Router();
let NavyStandard = require('../models/NavyStandard.model');

router.route('/searchNavyStandard').get((req, res) => {
    var query = { sex: req.body.sex, age: req.body.age};
    NavyStandard.find(query)
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