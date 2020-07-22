import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/dashboard/subComponents/Customizer.css';
import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap'
import Cookie from '../../general/Cookie'
const BASE_URL = 'https://large-project-2020.herokuapp.com/';

async function setTests() {
  var endpoint = null;
  var passCount = 0;
  var failCount = 0;
  switch (Cookie.getCookie("test")) {
      case "army":
          endpoint = "ArmyTests/searchArmyTest"
          break;
      case "navy":
          endpoint = "NavyTests/searchNavyTest"
          break;
      case "marine":
          endpoint = "MarineTests/searchMarineTest"
          break;
      case "airforce":
          endpoint = "AirForceTests/searchAirForceTest"
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
      console.log(res[temp].passed + ' pass: ' + temp);
      if (res[temp].passed) {
          passCount++;
      } else {
          failCount++;
      }
  }
  console.log("passCount: " + passCount + " failCount: " + failCount);
  Cookie.saveCookie("passCount", passCount);
  Cookie.saveCookie("failCount", failCount);
  return;
};

function Customizer() {
  var age;
  const setMale = async event => {
    Cookie.saveCookie("sex", "male")
  };
  const setFemale = async event => {
    Cookie.saveCookie("sex", "female")
  };
  const setAge = async event => {
    age = document.getElementById("ageInput").value;
    Cookie.saveCookie("age", age);
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
