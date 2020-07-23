import React from 'react';
import Footer from '../components/general/Footer';
import Navigation from '../components/general/Navigation';
import '../css/general/aboutPage.css'
import { Container, Row, Col } from 'react-bootstrap';

function AboutPage() {
    return (
        <div id="dashboard">
            <Navigation/>
            <div id="about-wrapper">
                <Row>
                    <Col>
                        <h4> Mobile </h4>
                    </Col>
                    <Col>
                        <Col> Sebastian Fabara </Col>
                        <Col> Michael Dews </Col>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h4>  Web Application </h4>
                    </Col>
                    <Col>
                        <Col> Jaime Bohorquez </Col>
                        <Col> Tyler Sanders </Col>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4> API </h4>
                    </Col>
                    <Col>
                        <Col> Brandon Broomell </Col>
                    </Col>
                </Row>
            </div>
            <Footer/>
        </div>
    );
}

export default AboutPage;
