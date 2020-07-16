import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/dashboard/subComponents/Customizer.css';
import React from 'react';
import { Row } from 'react-bootstrap'

// const BASE_URL = 'https://large-project-2020.herokuapp.com/';

function Customizer() {
	const doChange = async event =>
	{ //insert change gender/age here
	};
    // this is currently a prototype page of the layout of the data.
    return (
        <Col id="customizer-wrapper" fluid>
            <h1>
                Select Sex/Age groups!
            </h1>
	    <Row id="dropDown">
                <div class="dropdown">
			<button onclick="ageDrop()" class="dropbtn">Dropdown</button>
			<div id="ageDropdown" class="dropdown-content">
				<a href="#17-21">17-21</a>
				<a href="#22-26">22-26</a>
				<a href="#27-31">27-31</a>
				<a href="#32-36">32-36</a>
				<a href="#37-41">37-41</a>
			</div>
		</div>
                <div class="dropdown">
			<button onclick="sexDrop()" class="dropbtn">Dropdown</button>
			<div id="sexDropdown" class="dropdown-content">
				<a href="#male">Male</a>
				<a href="#female">Female</a>
			</div>
		</div>
            </Row>
            <div className="button-gradient">
                <input type="button" id="groupButton" className="btn btn-light" value="Submit" onClick={doChange} />
            </div>
        </Col>
    );
};

function ageDrop() {
  document.getElementById("ageDropdown").classList.toggle("show");
}
function sexDrop() {
  document.getElementById("sexDropdown").classList.toggle("show");
}

//hide dropdown
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

export default Customizer;
