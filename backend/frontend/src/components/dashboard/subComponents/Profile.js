import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/dashboard/subComponents/Profile.css';
import React from 'react';
import { Row, Image } from 'react-bootstrap'
import Cookie from '../../general/Cookie'

// const BASE_URL = 'https://large-project-2020.herokuapp.com/';

function Profile() {
    return (
        <Row id="profile-wrapper">
            <Image id="user-image" src="https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" />
            <div id="information-wrapper">
                <h3 id="name-field" className="information-field">
                    Welcome {Cookie.getCookie("name")}!
                </h3>
                <h5 id="user-field" className="information-field">
                    Username: {Cookie.getCookie("username")}
                </h5>
                <h5 id="email-field" className="information-field">
                    Email: {Cookie.getCookie("email")}
                </h5>
            </div>
        </Row>
    );
};

export default Profile;