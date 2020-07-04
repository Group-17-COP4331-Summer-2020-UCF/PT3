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


app.use('/users', usersRouters);
app.use('/ArmyStandards', ArmyStandardsRouters);
app.use('/MarineStandards', MarineStandardsRouters);

app.listen(port, () => {
  console.log(`Server is running bitches!!!! On Port: ${port}`);
});
