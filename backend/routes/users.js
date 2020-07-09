const router = require('express').Router();
let User = require('../models/user.model');

router.route('/loginUser').get((req, res) => {
    var query = { username: req.body.username, password: req.body.password};
    User.find(query)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/searchUser').get((req, res) => {
    var query = { username: req.body.username };
    User.find(query)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/addUser').post((req, res) => {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const newUser = new User({
        name,
        username,
        password,
        email,
    });

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; 