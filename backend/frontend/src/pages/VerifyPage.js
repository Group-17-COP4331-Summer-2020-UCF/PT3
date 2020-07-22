import React from 'react';
import '../css/general/help.css'
import Navigation from '../components/general/Navigation';
import Footer from '../components/general/Footer';
import { Container, Row, Col, Button } from 'react-bootstrap'

const BASE_URL = 'https://large-project-2020.herokuapp.com/';

function VerifyPage() {
    const doVerify = async event => {
        event.preventDefault();
        var token = document.getElementById("tokenInput").value;
        var js = '{"token":"'
            +  token + '"}';

        try
        {
            document.getElementById("tokenInput").innerHTML = "Logging in...";
            const response = await fetch(BASE_URL + 'users/verifyUser',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());

            console.log(res);
            if (res != null && res.error != null)
            {
                alert("Invalid or expired token")
                return;
            }
            else
            {
                // redirect
                window.location.href = '/dashboard';
            }
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }    
    }
    return(
        <div id="dashboard">
            <Navigation />
            <Container>
            <Col id="help-wrapper">
                <br />
                <h3> Enter your token </h3>
                <input type="text" className="form-control" id="tokenInput" placeholder="Token (sent to your email)" /><br />
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