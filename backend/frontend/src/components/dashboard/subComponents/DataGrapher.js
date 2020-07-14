import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/dashboard/subComponents/DataGrapher.css';
import React, { Profiler } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

// const BASE_URL = 'https://large-project-2020.herokuapp.com/';

function DataGrapher() {
    // this is currently a prototype page of the layout of the data.
    return (
        <Row id="data-grapher-wrapper" fluid>
            <h1>
                Data Grapher!
            </h1>
            <p1>
                here we graph data! past tests of the user with pass and fail rates.
            </p1>

        </Row>
    );
};

export default DataGrapher;