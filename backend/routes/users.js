const router = require('express').Router();
let User = require('../models/user.model');

router.route('/searchUser').get((req, res) => {
    var query = { username: req.body.username};
    User.find(query)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addUser').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const newUser = new User({
        username,
        password,
        email,
    });

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;