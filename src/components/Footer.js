import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/logo/logo.svg'


const FooterLink = ({ link: { text, to } }) => {
    return (
        <li>
            <Link to={to}>
                {text}
            </Link>
        </li>
    )
}

const Footer = () => {

    const linkGroups = {
        getStarted: [
            { text: "Kanban", to: "/" },
            { text: "Templates", to: "/" },
            { text: "Log In", to: "/login" },
            { text: "Sign Up", to: "/signup" },
        ],
        aboutUs: [
            { text: "About Us", to: "/" },
            { text: "Terms of Service", to: "/" },
            { text: "Privacy Policy", to: "/" },
        ],
        features: [
            { text: "Board", to: "/" },
            { text: "Timeline", to: "/" },
            { text: "Task Properties", to: "/" },
        ],
        resources: [
            { text: "Contact Us", to: "/" },
            { text: "Guides", to: "/" },
            { text: "Take a Tour", to: "/" },
            { text: "FAQ", to: "/" },
        ]
    }

    return (
        <footer className="page-footer font-small mt-auto py-4 border-top mt-auto" style={{ backgroundColor: "#f5f9fc" }}>

            <Container fluid>
                <Row>

                    <Col sm xs={12} className="order-1" >
                        <Row>
                            <Col xs={6} className="text-center">
                                <h5>Get Started</h5>
                                <ul className="list-unstyled">
                                    {linkGroups.getStarted.map(link => <FooterLink key={link.text} link={link} />)}
                                </ul>
                            </Col>
                            <Col xs={6} className="text-center">
                                <h5>About Us</h5>
                                <ul className="list-unstyled">
                                    {linkGroups.aboutUs.map(link => <FooterLink key={link.text} link={link} />)}
                                </ul>
                            </Col>
                        </Row>
                    </Col>

                    {/* This Column is positioned 2nd on screens md and higher, otherwise it is last */}
                    <Col xs={12} md className="order-last order-md-2 text-center">
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
                            <Col xs={6} className="text-center">
                                <h5>Features</h5>
                                <ul className="list-unstyled">
                                    {linkGroups.features.map(link => <FooterLink key={link.text} link={link} />)}
                                </ul>
                            </Col>

                            <Col xs={6} className="text-center">
                                <h5>Resources</h5>
                                <ul className="list-unstyled">
                                    {linkGroups.resources.map(link => <FooterLink key={link.text} link={link} />)}
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
