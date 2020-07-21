import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/dashboard/subComponents/Customizer.css';
import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap'
import Cookie from '../../general/Cookie'
const BASE_URL = 'https://large-project-2020.herokuapp.com/';

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
  };
  const setNavy = async event => {
    Cookie.saveCookie("test", "navy");
  };
  const setMarine = async event => {
    Cookie.saveCookie("test", "marine");
  };
  const setAirforce = async event => {
    Cookie.saveCookie("test", "airforce");
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
