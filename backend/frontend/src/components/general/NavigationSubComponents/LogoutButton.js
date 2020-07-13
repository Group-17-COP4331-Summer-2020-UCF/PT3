import React from 'react';
import Cookie from '../Cookie';
import {  Nav } from 'react-bootstrap';
import '../../../css/general/Navigation.css';
import 'bootstrap/dist/css/bootstrap.css';

function doLogout() {
    console.log("doing logout");
    Cookie.saveCookie("login", "false");
    window.location.href = '/';
}

function Logout() {
    let cookie = Cookie.getCookie("login");
    // Sort of like @SupressWarnings in Java.
    // eslint-disable-next-line
    if (cookie != null && cookie == "true") {
        return (
            <Nav.Link onClick={() => doLogout()}>Logout</Nav.Link>
        );
    }
    return (<></>);
};

export default Logout;