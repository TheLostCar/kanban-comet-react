import React, { useState, useEffect } from 'react'
import { Row, Col, Container, Button } from 'reactstrap'


const CollapsingPill = ({ headerIcon, children, style = {} }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    // transition animation is triggered once the component is mounted
    // this occurs during the componentDidMount. 
    useEffect(() => {
        setIsOpen(true);
    }, []);


    const buttonStyle = isOpen ? { minHeight: "10%" } : { minHeight: "100%" };
    const iconClass = isOpen ? "fa-2x" : "fa-5x";

    const defaultContainerStyle = {
        backgroundColor: 'white',
        overflow: 'hidden',
        borderRadius: '50% 50% 1000px 1000px',
        boxShadow: "#00000070 10px 15px 10px",
    }

    const transition = {
        transition: "1s ease-in-out",
    }

    const defaultButtonStyle = {
        backgroundColor: '#0066ff',
        borderRadius: "unset",
        minHeight: "10%",
        ...transition
    }

    return (
        <div className="d-flex flex-column px-0 h-100" style={{ ...defaultContainerStyle, ...style }}>

            <Button onClick={toggle} className="border-0" style={{ ...defaultButtonStyle, ...buttonStyle }}>
                {/* headerIcon class is applied here to give content to the button */}
                <i className={`fa ${headerIcon} ${iconClass}`} style={transition}></i>
            </Button>

            {/* current implementation requires a container with a set height or the container expands a bit when closed*/}
            <div className="text-center h-100" >
                <div className="w-100">
                    {children}
                </div>
            </div>

        </div >
    )
}


const ContactUs = () => {
    return (
        <div>
            {/* Header section */}
            <section className="text-center py-5 mb-5" style={{ backgroundColor: "#bfe2fe" }}>
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6}>
                            <h1 className="py-5">Contact Us</h1>
                        </Col>

                        <Col xs={4} className="mx-auto d-none d-md-block">
                            <div>
                                Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Email and phone number section */}
            <section className="pb-5" style={{}}>
                <Container>
                    <Row className="justify-content-around">

                        {/* set height to keep CollapsingPill at constant height */}
                        <Col xs={7} md={5} lg={4} className="my-4 my-md-0" style={{ height: "350px" }}>
                            <CollapsingPill headerIcon="fa-phone">
                                <div className="text-center">

                                    <p className="my-auto  mt-5 pt-5">
                                        Lorem ipsum dolor sit amet et<br />
                                        delectus accommodare his consul<br />
                                        copiosae legendos at vix<br />
                                        <br />
                                        <a type="tel" href="tel:+11234567980">(123) - 456 7890</a>
                                    </p>

                                </div>
                            </CollapsingPill>
                        </Col>

                        <Col xs={7} md={5} lg={4} style={{ height: "350px" }}>
                            <CollapsingPill headerIcon="fa-envelope">

                                <p className="my-auto  mt-5 pt-5">
                                    Lorem ipsum dolor sit amet et<br />
                                    delectus accommodare his consul<br />
                                    copiosae legendos at vix<br />
                                    <br />
                                    <a type="email" href="mailto:support@example.com">support@example.com</a>
                                </p>

                            </CollapsingPill>
                        </Col>

                    </Row>
                </Container>
            </section>

            {/* Office locations section */}
            <section className="py-5">
                <Container>
                    <Row style={{ height: "350px" }} className="justify-content-center">
                        <Col xs={12} md={8}>

                            {/* CollapsingPill with different borderRadius */}
                            <CollapsingPill headerIcon="fa-building" style={{ borderRadius: "10px 10px 100px 100px" }}>
                                <Row className="pt-1 pt-sm-5 mt-3 mx-auto text-nowrap">

                                    <Col xs={12} sm>
                                        <Button outline color="primary" className="border-0">
                                            2507 Hillary Tunnel<br />
                                            Onatown<br />
                                            New York<br />
                                            88697<br />
                                            U.S.A.<br />
                                        </Button>
                                    </Col>

                                    <Col>
                                        <Button outline color="primary" className="border-0">
                                            74690 Beahan Village<br />
                                            Anaisside<br />
                                            Texas<br />
                                            39042<br />
                                            U.S.A.<br />
                                        </Button>
                                    </Col>

                                </Row>
                            </CollapsingPill>

                        </Col>
                    </Row>
                </Container>
            </section>
        </div >
    )
}

export default ContactUs
