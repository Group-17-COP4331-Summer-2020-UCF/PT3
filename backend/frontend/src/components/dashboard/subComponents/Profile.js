import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/dashboard/subComponents/Profile.css';
import React from 'react';
import { Row } from 'react-bootstrap'

// const BASE_URL = 'https://large-project-2020.herokuapp.com/';

function Profile() {
    // this is currently a prototype page of the layout of the data.
    return (
        <Row id="profile-wrapper" fluid>
            <h1>
                Your profile data!
            </h1>
            <p1>
                everything about the user! maybe if we have some time, maybe even a user picture!
            </p1>
        </Row>
    );
};

export default Profile;