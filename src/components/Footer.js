import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import logo from '../assets/logo/logo.svg'


const Footer = () => {
    return (
        <footer className="page-footer font-small mt-auto py-4 border-top mt-auto">

            <Container fluid>
                <Row>

                    <Col className="order-1" >
                        <Row>
                            <Col xs={6} className="order-1 text-center">
                                <h5>Get Started</h5>
                                <ul className="list-unstyled">
                                    <li><a href="/">Kanban</a></li>
                                    <li><a href="/">Templates</a></li>
                                    <li><a href="login.html">Log In</a></li>
                                    <li><a href="signup.html">Sign Up</a></li>
                                </ul>
                            </Col>
                            <Col xs={6} className="order-2 text-center">
                                <h5>About Us</h5>
                                <ul className="list-unstyled">
                                    <li><a href="/">Company</a></li>
                                    <li><a href="/">Terms Of Service</a></li>
                                    <li><a href="/">Privacy Policy</a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12} md className="order-12 order-md-2 text-center">
                        <Row>
                            <Col xs={6} md={12} className="px-0 pb-0 pb-md-5">
                                <a href="https://www.twitter.com/" className="btn btn-social-icon"><i
                                    className="fa fa-twitter"></i></a>
                                {" "}
                                <a href="https://www.instagram.com" className="btn btn-social-icon"><i
                                    className="fa fa-instagram"></i></a>
                                {" "}
                                <a href="https://www.youtube.com" className="btn btn-social-icon"><i
                                    className="fa fa-youtube-play"></i></a>
                                {" "}
                                <a href="https://www.facebook.com" className="btn btn-social-icon"><i
                                    className="fa fa-facebook"></i></a>
                            </Col>
                            <Col xs={6} md={12}>
                                <img src={logo} className="pt-auto img-fluid" alt="logo" />
                            </Col>
                        </Row>

                    </Col>

                    <Col className="order-3">
                        <Row>
                            <Col xs={6} className="order-4 text-center">
                                <h5>Features</h5>
                                <ul className="list-unstyled">
                                    <li><a href="/">Board</a></li>
                                    <li><a href="/">Timeline</a></li>
                                    <li><a href="/">Task Properties</a></li>


                                </ul>
                            </Col>

                            <Col xs={6} className="order-5 text-center">
                                <h5>Resources</h5>
                                <ul className="list-unstyled">
                                    <li><a href="/">Contact Us</a></li>
                                    <li><a href="/">Guides</a></li>
                                    <li><a href="/">Take a Tour</a></li>
                                    <li><a href="/">FAQ</a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>


                </Row>

            </Container>

        </footer>
    )
}

export default Footer
