import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Col, Row, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { cloudConnect, workflowOrganization, patternOfPeople, kanbanWorkflow, programConfiguring, smallBoard, timeline, kanbanTeamwork } from '../assets/images'



const Headline = () => {
    const [email, setEmail] = useState('')

    const updateEmail = function (e) {
        setEmail(e.target.value)
    }

    return (
        <Jumbotron className="d-flex justify-content-center py" style={{ backgroundColor: "#f5f9fc" }}>
            <Container className="flex-column py-5">
                <Row>

                    <Col className="my-auto">

                        <h2>Kanban Comet helps teams soar through deadlines</h2>
                        <p className="w-50">Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at
                            vix
                            ad
                            putent delectus
                            delicata</p>
                        <Container>
                            <Row className="align-items-center justify-content-center">
                                <Col xs={9} sm={6} className="px-0">
                                    <input className="align-middle d-block mx-auto mx-sm-0 w-100"
                                        type="email" placeholder="Your Email" onChange={updateEmail} />
                                </Col>

                                <Col xs={7} sm={6} className="pt-3 pt-sm-0">
                                    <Link
                                        to={{ pathname: '/signup', state: { email: email } }}
                                        className='btn btn-info text-nowrap d-block'
                                        style={{ minWidth: 'fit-content' }}>Get Started</Link>

                                </Col>

                            </Row>
                        </Container>

                    </Col>

                    <Col className="d-none d-md-block my-auto">
                        <div className="mx-auto">
                            {/* Image by Visual Generation https://stock.adobe.com/279725645 */}
                            <img className="img-fluid" src={workflowOrganization} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

const SectionComponent = ({ style, children }) => {
    return (
        <section style={style}>
            <Container>
                {children}
            </Container>
        </section>
    )
}

const ImageCaptionSection = () => {

    // Component takes child elements and uses the first two children as content for the two columns in the row
    // Fragments count as one child so I use this later to get multiple elements passed as content without a wrapper div
    const LocalSectionComponent = ({ children, imageFirst = false, style = {} }) => {
        return (
            <SectionComponent style={style}>
                <Row className="row-content py-5 d-flex align-items-center">
                    {/* additional styles added to Col below if the imageFirst bool is true */}
                    {/* The additional styles make sure the col appears first in larger screens, but last in smaller screens */}
                    <Col xs={12} md={6} className={imageFirst ? "order-last order-md-first" : ''}>
                        {children[0]}
                    </Col>

                    <Col>
                        {children[1]}
                    </Col >
                </Row>
            </SectionComponent>
        )
    }


    return (
        <>
            <LocalSectionComponent>
                {/* Fragment used to pass h2 and span elements grouped as one child*/}
                <>
                    <h2>Built for teams of all sizes</h2>
                    <span>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad
                        putent
                        delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae</span>
                </>

                <div className="mx-auto mr-md-0" width="300px">
                    {/* Image by Betta https://stock.adobe.com/422425563 */}
                    <img className="img-fluid" src={patternOfPeople} alt="" />
                </div>

            </LocalSectionComponent>

            <LocalSectionComponent style={{ backgroundColor: "#F5F9FC" }} imageFirst>
                <div className="mx-auto mr-md-0">
                    {/* Image by Visual Generation https://stock.adobe.com/282362261 */}
                    <img className="img-fluid" src={kanbanWorkflow} alt="" />
                </div>

                <>
                    <h2>Kaban Workflow</h2>
                    <span>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad
                        putent
                        delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae</span>
                </>
            </LocalSectionComponent>

            <LocalSectionComponent>
                <>
                    <h2>Customizable Experience</h2>
                    <span>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad
                        putent
                        delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae
                    </span>
                </>

                <div className="mx-auto ml-md-0" width="300px">
                    {/* Image by Visual Generation https://stock.adobe.com/283440342 */}
                    <img className="img-fluid" src={programConfiguring} alt="" />
                </div>
            </LocalSectionComponent>

            <LocalSectionComponent style={{ backgroundColor: "#bfe2fe" }} imageFirst>
                <div className="mx-auto ml-md-0" width="300px">
                    {/* Image by Apinan https://stock.adobe.com/343144021 */}
                    <img className="img-fluid" src={cloudConnect} alt="" />
                </div>

                <>
                    <h2>All data stored on the cloud</h2>
                    <span>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad
                        putent
                        delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae
                    </span>
                </>
            </LocalSectionComponent>
        </>
    )
}

const CardTabsSection = () => {
    // state to handle tabs selection
    const [activeTab, setActiveTab] = useState('1');
    function toggle(tabId) {
        if (activeTab !== tabId) {
            setActiveTab(tabId)
        }
    }

    const LocalSectionComponent = ({ children }) => {
        return (
            <SectionComponent>
                <div className="pl-auto row-content py-5">
                    <Card>
                        <CardBody className="px-0">
                            {children}
                        </CardBody>
                    </Card>
                </div>
            </SectionComponent>
        )
    }


    return (
        <LocalSectionComponent>
            <Nav tabs className="nav-justified px-1 px-sm-5 text-nowrap">
                <NavItem>
                    <NavLink
                        active={activeTab === '1'}
                        onClick={() => toggle('1')}
                    >
                        Boards
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink

                        active={activeTab === "2"}
                        onClick={() => { toggle("2") }}
                    >
                        Timeline
                    </NavLink>
                </NavItem>




                <NavItem>
                    <NavLink
                        active={activeTab === "3"}
                        onClick={() => { toggle("3") }}
                    >
                        Assign Tasks
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab} className="px-5 pt-4">
                <TabPane tabId="1">
                    <Row>
                        <Col className="mb-4">
                            <h2>Organize tasks with boards</h2>
                            <span>Lorem ipsum dolor sit amet et delectus accommodare his consul
                                copiosae
                                legendos at vix ad
                                putent
                                delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae
                            </span>
                        </Col>

                        <Col xs={12} md={6} className="d-flex">
                            {/* Image by Visual Generation https://stock.adobe.com/303977266 */}
                            <img className="mx-auto my-auto mr-md-0 ml-md-auto d-block img-fluid"
                                src={smallBoard} alt="" />
                        </Col>
                    </Row>
                </TabPane>

                <TabPane tabId="2">
                    <Row>


                        <Col className="mb-4">
                            <h2>Track goals on the Timeline</h2>
                            <span>Lorem ipsum dolor sit amet et delectus accommodare his consul
                                copiosae
                                legendos at vix ad
                                putent
                                delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae
                            </span>
                        </Col>

                        <Col xs={12} md={6} className="d-flex">
                            {/* <!-- Image by ceramaama https://stock.adobe.com/335968818 --> */}
                            <img className="mx-auto my-auto mr-md-0 ml-md-auto d-block img-fluid"
                                src={timeline} alt="" />
                        </Col>


                    </Row>
                </TabPane>

                <TabPane tabId="3">
                    <Row>
                        <Col className="mb-4">
                            <h2>Manage teams with assigned tasks</h2>
                            <span>Lorem ipsum dolor sit amet et delectus accommodare his consul
                                copiosae
                                legendos at vix ad
                                putent
                                delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae
                            </span>
                        </Col>

                        <Col xs={12} md={6} className="d-flex">
                            {/* <!-- Image by Visual Generation https://stock.adobe.com/211127810 --> */}
                            <img className="mx-auto my-auto mr-md-0 ml-md-auto d-block img-fluid"
                                src={kanbanTeamwork} alt="" />
                        </Col>
                    </Row>
                </TabPane>

            </TabContent>
        </LocalSectionComponent>
    )
}




const LandingPageBody = () => {
    return (
        <>
            <Headline />

            <ImageCaptionSection />

            <CardTabsSection />
        </>
    )
}






export default LandingPageBody
