import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/logo/logo.svg'


const Footer = () => {
    return (
        <footer className="page-footer font-small mt-auto py-4 border-top mt-auto">

            <Container fluid>
                <Row>

                    <Col sm xs={12} className="order-1" >
                        <Row>
                            <Col xs={6} className="order-1 text-center">
                                <h5>Get Started</h5>
                                <ul className="list-unstyled">
                                    <li><Link to="/">Kanban</Link></li>
                                    <li><Link to="/">Templates</Link></li>
                                    <li><Link to="/login">Log In</Link></li>
                                    <li><Link to="/signup">Sign Up</Link></li>
                                </ul>
                            </Col>
                            <Col xs={6} className="order-2 text-center">
                                <h5>About Us</h5>
                                <ul className="list-unstyled">
                                    <li><Link to="/">Company</Link></li>
                                    <li><Link to="/">Terms Of Service</Link></li>
                                    <li><Link to="/">Privacy Policy</Link></li>
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
                                    <li><Link to="/">Board</Link></li>
                                    <li><Link to="/">Timeline</Link></li>
                                    <li><Link to="/">Task Properties</Link></li>


                                </ul>
                            </Col>

                            <Col xs={6} className="order-5 text-center">
                                <h5>Resources</h5>
                                <ul className="list-unstyled">
                                    <li><Link to="/">Contact Us</Link></li>
                                    <li><Link to="/">Guides</Link></li>
                                    <li><Link to="/">Take a Tour</Link></li>
                                    <li><Link to="/">FAQ</Link></li>
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
