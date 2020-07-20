import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/dashboard/subComponents/Customizer.css';
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap'
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
    <Col id="customizer-wrapper" fluid>
      <h1>
        Select Sex/Age groups!
            </h1>
      <Row>
        <div>
          <input type="button" id="groupButton" className="btn btn-light" value="Male" onClick={setMale} />
        </div>
        <div>
          <input type="button" id="groupButton" className="btn btn-light" value="Female" onClick={setFemale} />
        </div>
      </Row>
      <Row>
        <div>
          <input type="button" id="groupButton" className="btn btn-light" value="Army" onClick={setArmy} />
        </div>
        <div>
          <input type="button" id="groupButton" className="btn btn-light" value="Navy" onClick={setNavy} />
        </div>
        <div>
          <input type="button" id="groupButton" className="btn btn-light" value="Marine" onClick={setMarine} />
        </div>
        <div>
          <input type="button" id="groupButton" className="btn btn-light" value="Air Force" onClick={setAirforce} />
        </div>
      </Row>
      <Row>
        <div>
        <input type="email" className="form-control" id="ageInput" placeholder="Enter age" /><br />
        </div>
        <div>
          <input type="button" id="ageButton" className="btn btn-light" value="Set age" onClick={setAge} />
        </div>
      </Row>
    </Col>
  );
};

export default Customizer;
