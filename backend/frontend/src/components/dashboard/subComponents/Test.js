import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/dashboard/subComponents/Test.css';
import React, {Component} from 'react';
import { Row , Button, Col } from 'react-bootstrap'
import Cookie from '../../general/Cookie'

const BASE_URL = 'https://large-project-2020.herokuapp.com/';

/*
the 4 tests:
army
navy
marine
airforce

saved on a cookie called: test.
the age will be saved on cookie called: age.
*/

// NOTE setting cookies for testing purposes
console.log("cookies getting set automatically for testing")

Cookie.saveCookie("test", "airforce");
Cookie.saveCookie("age", "21");
Cookie.saveCookie("sex", "male")

var start = false;
var seconds = 0;
var validStart = true;

var selection = Cookie.getCookie("test");
var lastSelection = null;

class Test extends React.Component {
    constructor() {
        super();
        this.state = { curTime: 0 }
    }
    start() {
        // eslint-disable-next-line
        if (start == true) { return; }
        seconds = 0;
        if (validStart) {
            start = true;
        }
        document.getElementById("responce").innerText = ""
    }
    stop() {
        start = false;
        document.getElementById("responce").innerText = ""
    }
    async submit() {
        var selection = Cookie.getCookie("test");
        var js = '{"sex":"'
            + Cookie.getCookie("sex")
            + '","age":"'
            + Cookie.getCookie("age") + '"}';
        var endpoint = null;
        switch (selection) {
            case "army":
                endpoint = "ArmyStandards/searchArmyStandard"
                break;
            case "navy":
                endpoint = "NavyStandards/searchNavyStandard"                
                break;
            case "marine":
                endpoint = "MarineStandards/searchMarineStandard"                
                break;
            case "airforce":
                endpoint = "AirForceStandards/searchAirForceStandard"                
                break;
            default:
                console.log("invalid submission: wrong test");
                return;
        }
        try {
            var response = await fetch(BASE_URL + endpoint,
                { method: 'POST', body: js, headers: { 'Content-Type': 'application/json' } });

            var res = JSON.parse(await response.text());
            console.log("sending to: " + BASE_URL + endpoint);
            console.log("data sent: " + js)
            console.log(res);
            if (res != null && res.error != null && res.error !== "") {
                console.log(res.error);
                return;
            }

            var run = document.getElementById("minutes").value + ":" + document.getElementById("seconds").value;
            var passed = true;;
            var passed = true;
            switch (selection) {
                case "army":
                    // res.pushups;
                    // res.situps;
                    // res.run;
                    var pushups = document.getElementById("pushups").value;
                    var situps = document.getElementById("situps").value;
                    if (pushups < res.pushups || situps < res.situps || toSeconds(run) > toSeconds(res.run)) {
                        console.log("failed test");
                        passed = false;
                        document.getElementById("responce").innerText = "Failed"
                    } else {
                        document.getElementById("responce").innerText = "Passed"
                        console.log("sucess")
                    }
                    var submit = '{"username":"'
                        + Cookie.getCookie("username")
                        + '","sex":"'
                        + Cookie.getCookie("sex")
                        + '","age":"'
                        + Cookie.getCookie("age")
                        + '","pushups":"'
                        + pushups
                        + '","situps":"'
                        + situps
                        + '","run":"'
                        + run
                        + '","passed":"'
                        + passed + '"}';
                    console.log(submit)
                    console.log("sending submission")
                    // https://large-project-2020.herokuapp.com/AirForceTests/addAirForceTest
                    response = await fetch(BASE_URL + "ArmyTests/addArmyTest",
                        { method: 'POST', body: submit, headers: { 'Content-Type': 'application/json' } });
                    console.log("submission processed");
                    break;
                case "navy":
                    // res.pushups;
                    // res.curlups;
                    // res.run;
                    var pushups = document.getElementById("pushups").value;
                    var curlups = document.getElementById("curlups").value;
                    if (pushups < res.pushups || curlups < res.curlups || toSeconds(run) > toSeconds(res.run)) {
                        console.log("failed test");
                        passed = false;
                        document.getElementById("responce").innerText = "Failed"
                    } else {
                        document.getElementById("responce").innerText = "Passed"
                        console.log("sucess")
                    }
                    var submit = '{"username":"'
                        + Cookie.getCookie("username")
                        + '","sex":"'
                        + Cookie.getCookie("sex")
                        + '","age":"'
                        + Cookie.getCookie("age")
                        + '","pushups":"'
                        + pushups
                        + '","curlups":"'
                        + curlups
                        + '","run":"'
                        + run
                        + '","passed":"'
                        + passed + '"}';
                    console.log(submit)
                    console.log("sending submission")
                    // https://large-project-2020.herokuapp.com/AirForceTests/addAirForceTest
                    response = await fetch(BASE_URL + "AirForceTests/addAirForceTest",
                        { method: 'POST', body: submit, headers: { 'Content-Type': 'application/json' } });
                    console.log("submission processed");

                    break;
                case "marine":
                    var pullups = document.getElementById("pullups").value;
                    var crunches = document.getElementById("crunches").value;

                    if (pullups < res.pullups || crunches < res.crunches || toSeconds(run) > toSeconds(res.run)) {
                        console.log("failed test");
                        passed = false;
                        document.getElementById("responce").innerText = "Failed"
                    } else {
                        document.getElementById("responce").innerText = "Passed"
                        console.log("sucess")
                    }
                    var submit = '{"username":"'
                        + Cookie.getCookie("username")
                        + '","sex":"'
                        + Cookie.getCookie("sex")
                        + '","age":"'
                        + Cookie.getCookie("age")
                        + '","pullups":"'
                        + pullups
                        + '","crunches":"'
                        + crunches
                        + '","run":"'
                        + run
                        + '","passed":"'
                        + passed + '"}';
                    console.log(submit)
                    console.log("sending submission")
                    // https://large-project-2020.herokuapp.com/AirForceTests/addAirForceTest
                    response = await fetch(BASE_URL + "AirForceTests/addAirForceTest",
                        { method: 'POST', body: submit, headers: { 'Content-Type': 'application/json' } });
                    console.log("submission processed");
                    break;
                case "airforce":
                    // res.pushups;
                    // res.situps;
                    // res.run;
                    var pushups = document.getElementById("pushups").value;
                    var situps = document.getElementById("situps").value;
                    if (pushups < res.pushups || situps < res.situps || toSeconds(run) > toSeconds(res.run)) {
                        console.log("failed test");
                        passed = false;
                        document.getElementById("responce").innerText = "Failed"
                    } else {
                        document.getElementById("responce").innerText = "Passed"
                        console.log("sucess")
                    }
                    var submit = '{"username":"'
                        + Cookie.getCookie("username")
                        + '","sex":"'
                        + Cookie.getCookie("sex")
                        + '","age":"'
                        + Cookie.getCookie("age")
                        + '","pushups":"'
                        + pushups
                        + '","situps":"'
                        + situps
                        + '","run":"'
                        + run
                        + '","passed":"'
                        + passed + '"}';
                    console.log(submit)
                    console.log("sending submission")
                    // https://large-project-2020.herokuapp.com/AirForceTests/addAirForceTest
                    response = await fetch(BASE_URL +    "AirForceTests/addAirForceTest",
                        { method: 'POST', body: submit, headers: { 'Content-Type': 'application/json' } });
                    console.log("submission processed");
                    break;
                default:
                    console.log("error on retrieval");
                    return;
            }
        }
        catch (e) {
            alert(e.toString());
            return;
        }
    }
    componentDidMount() {
        setInterval(() => {
            if (start) {
                this.setState({ curTime: (seconds = seconds + 1) })                
            } else {
                this.setState({ curTime: (seconds) })  
                console.log("waiting")
            }
        }, 250);
    }
    render() {
        // /AirForceTests/addAirForceTest
        // check if we are logged in
        if (Cookie.getCookie("login") !== "true") {
            window.location.href = '/';
        }
        var result = "Start new ";
        var age = Cookie.getCookie("age");
        if (age == null || age === "0" || age === "") {
            age = "Select your age!";
        } else {
            age = "Age selected: " + age;
        }

        lastSelection = selection;
        selection = Cookie.getCookie("test");

        if (lastSelection !== selection) {
            // Reset the container.
            Cookie.saveCookie("test", "");
        }
        validStart = true;
        var CurrentComponent = ""
        switch (selection) {
            case "army":
                result += "Army test!"
                CurrentComponent = ArmyComponent();
                break;
            case "navy":
                result += "Navy test!"
                CurrentComponent = NavyComponent();
                break;
            case "marine":
                result += "Marine Test!"
                CurrentComponent = MarineComponent();
                break;
            case "airforce":
                result += "Airforce test!"
                CurrentComponent = AirforceComponent();
                break;
            default:
                result = "Select a test!"
                validStart = false;
                CurrentComponent = EmptyComponent();
        }
        return (
            <Row id="test-wrapper" fluid>
                <div id="test-div">
                    <br />
                    <h1 id="test-header"> {result} </h1>
                    <h4 id="age-header"> {age} </h4>
                    {CurrentComponent}
                    <br />
                    <div>
                        <h2>{"Start run: " + getTime(this.state.curTime / 4)}</h2>
                    </div>
                    {/* Control Buttons */}
                    <div>
                        <Button variant="outline-success" onClick={() => this.start()}>Start </Button>{' '}
                        <Button variant="outline-danger" onClick={() => this.stop()}>Stop</Button>{' '}
                        <Button variant="outline-info" onClick={() => this.submit()}>Submit</Button>{' '}
                    </div>
                    <br />
                    <h5 id="responce">

                    </h5>
                </div>
            </Row>
        );
    }
}

function RunField() {
    return (
        <>
            <Row id="time-wrapper">
                <Col>
                    <h6>
                        Minutes 
                    </h6>
                    <input type="email" className="form-control" id="minutes" placeholder="Minutes" />
                </Col>
                <Col>
                    <h6>
                        Seconds
                    </h6>
                    <input type="email" className="form-control" id="seconds" placeholder="Seconds" />
                </Col>
            </Row>
        </>
    )
}

function ArmyComponent() {
    return (
        <>
            <h6>
                Push-Ups
            </h6>
            <input type="email" className="form-control" id="pushups" placeholder="Push-ups" /><br />
            <h6>
                Sit-ups
            </h6>
            <input type="email" className="form-control" id="situps" placeholder="Sit-ups" /><br />
            {RunField()}
        </>
    );
} 

function NavyComponent() {
    return (
        <>
            <h6>
                Push-Ups
            </h6>            
            <input type="email" className="form-control" id="pushups" placeholder="Push-ups" /><br />
            <h6>
                Sit-ups
            </h6>            <input type="email" className="form-control" id="situps" placeholder="Curl-ups" /><br />
            {RunField()}
        </>    
    );
}

function MarineComponent() {
    return (
        <>
            <h6>
                Pull-ups
            </h6>
            <input type="email" className="form-control" id="pullups" placeholder="Pull-ups" /><br />
            <h6>
                Crunches
            </h6>
            <input type="email" className="form-control" id="crunches" placeholder="Crunches" /><br />
            {RunField()}
        </>
     );
}

function AirforceComponent() { return ArmyComponent(); }

function EmptyComponent() {
    return (
        <>
            <h6>No app? No Problem! With this Web Application you can do just as much!</h6>
        </>
    )
}

function toSeconds(str) {
    var arr = str.split(":");
    var result = 0;
    var multiplier = 1;
    for (var i = arr.length - 1; i >= 0; i--) {
        result += multiplier * Math.round(arr[i]);
        multiplier *= 60;
    }
    console.log(result);
    return result;
}

function getTime(seconds) {
    seconds = Math.round(seconds);
    var minutes = seconds / 60;
    var seconds = seconds % 60;
    return Math.floor(minutes) + " min " + Math.round(seconds) + " sec";
}

export default Test
