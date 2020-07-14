import 'bootstrap/dist/css/bootstrap.css';
import '../../css/dashboard/Dashboard.css';
import React, { Profiler } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Profile from './subComponents/Profile'
import Customizer from './subComponents/Customizer'
import DataGrapher from './subComponents/DataGrapher'
import Test from './subComponents/Test'

// const BASE_URL = 'https://large-project-2020.herokuapp.com/';

function Dashboard()
{
    // this is currently a prototype page of the layout of the data.
    return(   
        <Container fluid>
            <Row>
                <Col className="column-hover-custom" lg={4}>
                    <Profile />
                    <Customizer />
                </Col>
                <Col className="column-hover-custom" lg={4}>
                    <DataGrapher />
                </Col>
                <Col className="column-hover-custom" lg={4}>
                    <Test />
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;