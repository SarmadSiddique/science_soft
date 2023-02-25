import { Container } from '@mui/system'
import React from 'react'
import Skilldata3 from '../ReusableComp/Skilldata3';
import "./Ecosystem.css";
import "../ReusableComp/Skilldata.css"
import ecosystem from "../assests/ecosystem.webp"
import { Box } from '@mui/material';
import Tab from 'react-bootstrap/Tab';

function Ecosystem() {
    return (



        <>
            <Container >
                <div className="ecosystem row">
                    <div style={{ backgroundColor: "#FAFAFA" }} className="col-md-8">
                        <Skilldata3 h2='Every Part of Your IT Ecosystem. Taken Care Of.'
                            para="Comprehensive care of your cloud or on-premises infrastructure and applications:"
                            h0="Consulting "
                            h1="Security"
                            h="Implementation"
                            h3="Help desk services  "
                            h4="Management and support"
                            h5="Migration"
                            h6="Management and support" />
                    </div>
                    <div className=" parent2   col-md-4">
                        <div className='child2 '>
                            <img width="400px" className='img-fluid' src={ecosystem} alt="" />
                        </div>
                    </div>


                </div>
            </Container>
        </>
    )
}

export default Ecosystem