import React from 'react';
import Cookie from '../Cookie';
import { Nav } from 'react-bootstrap';
import '../../../css/general/Navigation.css';
import 'bootstrap/dist/css/bootstrap.css';


function DashBoardButton() {
    let cookie = Cookie.getCookie("login");
    // Sort of like @SupressWarnings in Java.
    // eslint-disable-next-line
    if (cookie != null && cookie == "true") {
        return (
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        );
    }
    return (<></>);
};

export default DashBoardButton;