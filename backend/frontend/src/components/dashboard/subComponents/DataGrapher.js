import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/dashboard/subComponents/DataGrapher.css';
import React from 'react';
import { Row } from 'react-bootstrap'

// const BASE_URL = 'https://large-project-2020.herokuapp.com/';

function DataGrapher() {
    // this is currently a prototype page of the layout of the data.
    return (
        <Row id="data-grapher-wrapper" fluid>
            <h1>
                Data Grapher!
            </h1>

        </Row>
    );
};

export default DataGrapher;
