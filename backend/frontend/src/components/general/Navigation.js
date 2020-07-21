import React from 'react';
import Logout from './NavigationSubComponents/LogoutButton'
import DashBoardButton from './NavigationSubComponents/DashboardButton'
import {Navbar, Nav} from 'react-bootstrap';
import '../../css/general/Navigation.css';
import 'bootstrap/dist/css/bootstrap.css';

function Navigation()
{
    return(
        <Navbar>
            <Navbar.Brand id="branding" href="/">Physical Test Training Tracker</Navbar.Brand>
            <Nav className="ml-auto" id="navbar-button-custom">
                <Logout />
                <DashBoardButton />
                <Nav.Link href="/help">Help</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Navigation;