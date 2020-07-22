import React from 'react';
import Tour from '../components/login/Tour'
import Login from '../components/login/Login';
import Footer from '../components/general/Footer';
import Navigation from '../components/general/Navigation';
import { Container, Row, Col, Button } from 'react-bootstrap'

import '../css/general/help.css'
function VerifyPage() {
    const doVerify = async event => {
        event.preventDefault();
    }
    return(
        <div id="dashboard">
            <Navigation />
            <Container>
            <Col id="help-wrapper">
                <br />
                <h3> Enter your token </h3>
                <input type="text" className="form-control" id="registerUser" placeholder="Token (sent to your email)" /><br />
                    <Button id="submit-button" variant="info" onClick={doVerify}> Submit </Button>
                
                <br />
            </Col>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </Container>
        <Footer />
        </div>
    );
}

export default VerifyPage;