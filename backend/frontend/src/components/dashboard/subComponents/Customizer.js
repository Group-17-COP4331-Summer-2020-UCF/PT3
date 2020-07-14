import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/dashboard/subComponents/Customizer.css';
import React from 'react';
import { Row } from 'react-bootstrap'

// const BASE_URL = 'https://large-project-2020.herokuapp.com/';

function Customizer() {
    // this is currently a prototype page of the layout of the data.
    return (
        <Row id="customizer-wrapper" fluid>
            <h1>
                Here we change some things!
            </h1>
            <p1>
                We set the sex and age range in this container.
            </p1>
        </Row>
    );
};

export default Customizer;