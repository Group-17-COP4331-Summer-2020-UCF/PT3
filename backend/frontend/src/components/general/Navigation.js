import React from 'react';
import {Navbar, Nav, Button, Form, FormControl} from 'react-bootstrap';
import '../../css/general/Navigation.css';
import 'bootstrap/dist/css/bootstrap.css';

function Navigation()
{
    return(
        <Navbar fixed="top" bg="" variant="dark">
            <Navbar.Brand id="branding" href="/">Physical Test Training Tracker</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="/dashboard">Logout</Nav.Link>
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