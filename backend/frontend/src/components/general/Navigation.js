import React from 'react';
import Logout from '../dashboard/Logout'
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
                <Nav.Link href="/">About</Nav.Link>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form> */}
        </Navbar>
    );
};

export default Navigation;