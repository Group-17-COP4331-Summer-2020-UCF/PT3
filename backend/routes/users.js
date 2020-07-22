const router = require("express").Router();
let User = require("../models/user.model");

const jwt = require('jsonwebtoken');
const mailgun = require("mailgun-js");
const DOMAIN = 'sandboxce531a1343534f8081145c57c308a34c.mailgun.org';
const mg = mailgun({apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN});

router.route('/loginUser').post((req, res) => {
    var query = { username: req.body.username, password: req.body.password};
    User.findOne(query)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/searchUser").post((req, res) => {
  var query = { username: req.body.username };
  User.findOne(query)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addUser").post((req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

    const token = jwt.sign({name, username, email, password}, process.env.JWT_ACC_ACTIVATE, {expiresIn: '30m'});

    const data = {
        from: 'PT3@test.com',
        to: email,
        subject: 'Account Activation Code',
        html:`
        <h2>Copy the activation token</h2>
        <p>${token}</p>
        `
    };

    mg.messages().send(data, function (error, body) {
        if(error){
            return res.json({
                error: 'Could not send email'
            })
        }
        return res.json({Message: 'Email has been sent, please activate your account'})
        console.log(body);
    }); 
});

router.route('/verifyUser').post((req, res) => {
    const {token} = req.body;
    if(token) {
        jwt.verify(token, process.env.JWT_ACC_ACTIVATE, function(err, decodedToken) {
            if(err) {
                return res.status(400).json({error: 'Incorrect or Expire link.'})
            }
            const {name, username, password, email} = decodedToken;
            const newUser = new User({
           name,
           username,
           password,
           email,
    });

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error activating account: ' + err));

        })
    }
    else {
        return res.json({error: "Could not verify!"})
    }
});

module.exports = router; 


