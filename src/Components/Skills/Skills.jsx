import { Container } from '@mui/system'
import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Tab from 'react-bootstrap/Tab';
// import Sonnet from '../../components/Sonnet';
import Skilldata from '../ReusableComp/Skilldata';

import "./Skills.css"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
function Skills() {
    const [link, setlink] = useState()

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#ffff' : '#ffff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <div className="main">
            <Container className="offers">
                <h2>
                    Explore Your Offering

                </h2>

                <div className="parent mt-5">
                    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" >
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                            <Box gridColumn="span 4" className='child1 d-lg-block d-sm-none' width="100%">
                                <div className='child '>
                                    <div className="skill_pointers">
                                        <Nav className="flex-column navcolor" >
                                            <Nav.Item className='tab1'>
                                                <Nav.Link onClick={() => {
                                                    setlink(1)
                                                }} className={link === 1 ? "active" : "navlinks1"} eventKey="first" >Software Development</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className='tab2'>
                                                <Nav.Link onClick={() => {
                                                    setlink(2)
                                                }} className={link === 2 ? "active" : "navlinks2"} eventKey="second" >Testing & QA</Nav.Link>
                                            </Nav.Item>




                                            <Nav.Item className="tab3">
                                                <Nav.Link onClick={() => {
                                                    setlink(3)
                                                }} className={link === 3 ? "active" : "navlinks3"} eventKey="third">Application Services</Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item className="tab4">  <Nav.Link onClick={() => {
                                                setlink(5)
                                            }} className={link === 5 ? "active" : "navlinks4"} eventKey="fourth">Ux/UI Design</Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item className="tab5"><Nav.Link onClick={() => {
                                                setlink(6)
                                            }} className={link === 6 ? "active" : "navlinks5"} eventKey="fifth">IT Consultant</Nav.Link></Nav.Item>









                                        </Nav>

                                    </div>
                                </div>
                            </Box>
                            <Box gridColumn="span 8">
                                <Tab.Content >
                                    <Tab.Pane style={
                                        {
                                            backgroundColor: "#ffff",
                                            color: "black"
                                        }
                                    } eventKey="first">
                                        <Skilldata h2='Software Development'
                                            para="A software development company with 33 years of business excellence, we can develop reliable, scalable and secure software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users."
                                            h0="Software consulting"
                                            h1="Custom software development"
                                            h="Software development  outsourcing"
                                            h3="Software product development"
                                            h4="Team augmentation "
                                            h5="Cloud application development"
                                            h6="Legacy software modernization"

                                        />
                                    </Tab.Pane>
                                    <Tab.Pane style={
                                        {
                                            backgroundColor: "#ffff"
                                        }
                                    } eventKey="second">
                                        <Skilldata h2='Testing & QA'
                                            para="We offer full-range QA and testing outsourcing services, can help to develop your QA or enhance the existing one, assist you in TCoE setup and evolution. We perform end-to-end testing of mobile, web and desktop application at each stage of the development lifecycle."
                                            h0="QA outsourcing"
                                            h1="QA consulting"
                                            h="Security testing"
                                            h3="Functional testing"
                                            h4="Usability testing"
                                            h5="Performance testing"
                                            h6="Test automation"

                                        />
                                    </Tab.Pane>
                                    <Tab.Pane style={
                                        {
                                            backgroundColor: "#ffff"
                                        }
                                    } eventKey="third">
                                        <Skilldata h2='Application Services'
                                            para="Our experts help mid-sized and large firms build, test, protect, manage, migrate and optimize digital solutions ensuring they’re always up and running and achieve the optimal TCO."
                                            h0="Application management"
                                            h1="Application modernization"
                                            h="Application integration"
                                            h3="Application security services"
                                            h4="Application development"
                                            h5="Application testing"
                                            h6="Application maintenance and support"

                                        />

                                    </Tab.Pane>
                                    <Tab.Pane style={
                                        {
                                            backgroundColor: "#ffff"
                                        }
                                    } eventKey="fourth">
                                        <Skilldata h2='UX/UI Design'
                                            para="User experience and user interface design for all types of websites, SaaS, and web/mobile apps. We combine the latest UI/UX trends with our customers’ individual goals and needs to deliver intuitive, vibrant, and impactful designs that power up businesses."
                                            h0="User Interface (UI) Design"
                                            h1="Responsive Web App Design"
                                            h="Software-as-as-Service (SaaS) UI Design"
                                            h3="Ecommerce Website Design"
                                            h4="User Experience (UX) Design "
                                            h5="Website Redesign"
                                            h6="Responsive Web Design"

                                        />

                                    </Tab.Pane>
                                    <Tab.Pane style={
                                        {
                                            backgroundColor: "#ffff"
                                        }
                                    } eventKey="fifth">
                                        <Skilldata h2='IT Consulting'
                                            para="Our experts can help to develop and implement an effective IT strategy, assist in smooth digital transformation and system integration as well as advise on improvements to your digital customer experience.."
                                            h0="Digital Transformation Consulting"
                                            h1="Project Management Consulting"
                                            h="Digital Crisis Management Consulting "
                                            h3="IT Service Management Consulting"
                                            h4="Solution consulting "
                                            h5="Platform consulting"
                                            h6="Enterprise IT consulting"

                                        />

                                    </Tab.Pane>
                                </Tab.Content>
                            </Box>
                        </Tab.Container>

                    </Box>

                </div >

            </Container >

        </div >
    )
}

export default Skills