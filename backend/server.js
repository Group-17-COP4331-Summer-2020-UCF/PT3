const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connection to MongoDB bitches!!!!!!!");
});

//API for users database. Add user and find user so far.
const usersRouters = require('./routes/users');
//API for Army Standards
const ArmyStandardsRouters = require('./routes/ArmyStandards');
//API for Marine Standards
const MarineStandardsRouters = require('./routes/MarineStandards');
//API for Navy Standards
const NavyStandardsRouters = require('./routes/NavyStandards');
//API for AirForce Standards
const AirForceStandardsRouters = require('./routes/AirForceStandards');
//API for Army Tests 
const ArmyTestsRouters = require('./routes/ArmyTests');
//API for Marine Tests
const MarineTestsRouters = require('./routes/MarineTests');
//API for Navy Tests
const NavyTestsRouters = require('./routes/NavyTests');
//API for AirForce Tests
const AirForceTestsRouters = require('./routes/AirForceTests');


app.use('/users', usersRouters);
app.use('/ArmyStandards', ArmyStandardsRouters);
app.use('/MarineStandards', MarineStandardsRouters);
app.use('/NavyStandards', NavyStandardsRouters);
app.use('/AirForceStandards', AirForceStandardsRouters);
app.use('/ArmyTests', ArmyTestsRouters);
app.use('/MarineTests', MarineTestsRouters);
app.use('/NavyTests', NavyTestsRouters);
app.use('/AirForceTests', AirForceTestsRouters);

if (process.env.NODE_ENV === 'production') {
}
app.use(express.static('frontend/build'));
const path = require('path');
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running bitches!!!! On Port: ${port}`);
});
