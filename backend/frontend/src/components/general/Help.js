import React from 'react';
import '../../css/general/help.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
function Help()
{
    return(
        // <p1> placeholder for image slideshow</p1>
        <Container>
            <Col id="help-wrapper">
                <br />
                <h3> Forgot username/password? </h3>
                <Row id="submission-wrapper">
                    <Col lg={8} >
                    <input type="email" className="form-control" id="submission-input" placeholder="Enter Username or Email" />
                    </Col>
                    <Col lg={3} id="submission-button-wrapper">
                    <Button id="submit-button" variant="info"> Submit </Button>
                    </Col>
                    {/* <input type="button" id="submitButton" className="btn btn-light" value="Set age" /> */}
                </Row>
                <input type="text" className="form-control" id="registerUser" placeholder="Email code (sent to your email)" /><br />
                <input type="text" className="form-control" id="registerUser" placeholder="New Password" /><br />
                <input type="text" className="form-control" id="registerUser" placeholder="Confirm new password" /><br />
                <h4> Enter your email / check your email / sucess! </h4>
                
                <br />
            </Col>
            <br /><br /><br /><br /><br /><br /><br />
        </Container>
    );
};

export default Help;