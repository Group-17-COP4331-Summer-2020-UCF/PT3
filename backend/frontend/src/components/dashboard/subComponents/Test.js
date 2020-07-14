import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/dashboard/subComponents/Test.css';
import React, { Profiler } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

// const BASE_URL = 'https://large-project-2020.herokuapp.com/';

function Test() {
    // this is currently a prototype page of the layout of the data.
    return (
        <Row id="test-wrapper" fluid>
            <h1>
                Do a new test!
            </h1>
            <p1>
                No app? No worries! you can do most if not all of the testing in this part!
            </p1>
        </Row>
    );
};

export default Test;