import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/dashboard/subComponents/Customizer.css';
import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap'
import Cookie from '../../general/Cookie'
const BASE_URL = 'https://large-project-2020.herokuapp.com/';

async function setTests() {
  var endpoint = null;
  var standard = null;
  var passCount = 0;
  var failCount = 0;
  var situpGoal=0, situpAvg=0, pushupGoal=0, pushupAvg=0, runGoal=0, runAvg=0;
  switch (Cookie.getCookie("test")) {
    case "army":
      endpoint = "ArmyTests/searchArmyTest";
      standard = "ArmyStandards/searchArmyStandard";
      break;
    case "navy":
      endpoint = "NavyTests/searchNavyTest";
      standard = "NavyStandards/searchNavyStandard";
      break;
    case "marine":
      endpoint = "MarineTests/searchMarineTest";
      standard = "MarineStandards/searchMarineStandard";
      break;
    case "airforce":
      endpoint = "AirForceTests/searchAirForceTest";
      standard = "AirForceStandards/searchAirForceStandard";
      break;
    default:
      console.log("invalid submission: wrong username");
      return;
  }
  var search = '{"username": "' + Cookie.getCookie("username") + '"}';
  const response = await fetch(BASE_URL + endpoint,
    { method: 'POST', body: search, headers: { 'Content-Type': 'application/json' } });
  var res = JSON.parse(await response.text());
  var temp;
  for (temp = 0; temp < res.length; temp++) {
    //console.log(res[temp].passed + ' pass: ' + temp);
    if (res[temp].passed) {
      passCount++;
    } else {
      failCount++;
    }
  }
  //get your previous averages
  switch (Cookie.getCookie("test")) {
    case "army":
      for (temp = 0; temp < res.length; temp++){
        situpAvg += res[temp].situps;
      }
      situpAvg /= res.length;
      for (temp = 0; temp < res.length; temp++){
        pushupAvg += res[temp].pushups;
      }
      pushupAvg /= res.length;
      break;
    case "navy":
      for (temp = 0; temp < res.length; temp++){
        situpAvg += res[temp].curlups;
      }
      situpAvg /= res.length;
      for (temp = 0; temp < res.length; temp++){
        pushupAvg += res[temp].pushups;
      }
      pushupAvg /= res.length;
      break;
    case "marine":
      for (temp = 0; temp < res.length; temp++){
        situpAvg += res[temp].crunches;
      }
      situpAvg /= res.length;
      for (temp = 0; temp < res.length; temp++){
        pushupAvg += res[temp].pullups;
      }
      pushupAvg /= res.length;
      break;
    case "airforce":
      for (temp = 0; temp < res.length; temp++){
        situpAvg += res[temp].situps;
      }
      situpAvg /= res.length;
      for (temp = 0; temp < res.length; temp++){
        pushupAvg += res[temp].pushups;
      }
      pushupAvg /= res.length;
      break;
    default:
      console.log("invalid submission: wrong username");
      return;
  }
  for (temp = 0; temp < res.length; temp++){
    runAvg += timeStringToFloat(res[temp].run);
  }
  runAvg /= res.length;
  var search2 = '{"sex": "' + Cookie.getCookie("sex") + '", "age": ' + Cookie.getCookie("age") + '}';
  const response2 = await fetch(BASE_URL + standard,
    { method: 'POST', body: search2, headers: { 'Content-Type': 'application/json' } });
  var res2 = JSON.parse(await response2.text());
  switch (Cookie.getCookie("test")) {
    case "army":
      situpGoal = res2.situps;
      pushupGoal = res2.pushups;
      break;
    case "navy":
      situpGoal = res2.curlups;
      pushupGoal = res2.pushups;
      break;
    case "marine":
      situpGoal = res2.crunches;
      pushupGoal = res2.pullups;
      break;
    case "airforce":
      situpGoal = res2.situps;
      pushupGoal = res2.pushups;
      break;
    default:
      console.log("invalid submission: wrong username");
      return;
  }
  runGoal = timeStringToFloat(res2.run);
  //console.log("passCount: " + passCount + " failCount: " + failCount);
  Cookie.saveCookie("passCount", passCount);
  Cookie.saveCookie("failCount", failCount);
  Cookie.saveCookie("situpGoal", situpGoal);
  Cookie.saveCookie("situpAvg", situpAvg);
  Cookie.saveCookie("pushupGoal", pushupGoal);
  Cookie.saveCookie("pushupAvg", pushupAvg);
  Cookie.saveCookie("runGoal", runGoal);
  Cookie.saveCookie("runAvg", runAvg);
  return;
};

function timeStringToFloat(time) {
  var hoursMinutes = time.split(/[.:]/);
  var hours = parseInt(hoursMinutes[0], 10);
  var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
  return hours + minutes / 60;
}

function Customizer() {
  var age;
  const setMale = async event => {
    Cookie.saveCookie("sex", "male")
    setTests();
  };
  const setFemale = async event => {
    Cookie.saveCookie("sex", "female")
    setTests();
  };
  const setAge = async event => {
    age = document.getElementById("ageInput").value;
    Cookie.saveCookie("age", age);
    setTests();
  };
  const setArmy = async event => {
    Cookie.saveCookie("test", "army");
    setTests();
  };
  const setNavy = async event => {
    Cookie.saveCookie("test", "navy");
    setTests();
  };
  const setMarine = async event => {
    Cookie.saveCookie("test", "marine");
    setTests();
  };
  const setAirforce = async event => {
    Cookie.saveCookie("test", "airforce");
    setTests();
  };

  // this is currently a prototype page of the layout of the data.
  return (
    <Row id="customizer-wrapper">
      <div id="customizer-div">
        <h1 id="customizer-header"> Settings </h1>
        <Container>
          <Row>
            <Col lg={4}>
              <h4> Gender </h4>
            </Col>
            <Col>
              <Button className="groupButton" id="maleButton" variant="info" onClick={setMale} > Male </Button>
              <Button className="groupButton" id="femaleButton" variant="info" onClick={setFemale} > Female </Button>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <h4> Standard </h4>
            </Col>
            <Col>
              <Button className="groupButton" variant="info" onClick={setArmy} > Army </Button>
              <Button className="groupButton" variant="info" onClick={setNavy} > Navy </Button>
              {/* <br /> */}
              <Button className="groupButton" variant="info" onClick={setMarine} > Marine </Button>
              <Button className="groupButton" variant="info" onClick={setAirforce} > Airforce </Button>
            </Col>
          </Row>
          <Row id="age-wrapper">
            <Col lg={8}>
              <input type="email" className="form-control" id="ageInput" placeholder="Enter age" />
            </Col>
            <Col id="button-wrapper">
              <input type="button" id="ageButton" className="btn btn-light" value="Set age" onClick={setAge} />
            </Col>
          </Row>
        </Container>
        <br />
      </div>
    </Row>
  );
};

export default Customizer;
