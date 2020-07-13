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
        <div id="dashboard-container">
            <Row id="trainer-row">
                <Col id="user-cluster" className="column-hover-custom" lg={3}>
                    <Profile/>
                    <Customizer/>
                </Col>
                <Col id="history-cluster" className="column-hover-custom" lg={4}>
                    <DataGrapher/>
                </Col>
                <div id="test-cluster" className="column-hover-custom">
                    <Test/>
                </div>
            </Row>
        </div>
    );
};

export default Dashboard;