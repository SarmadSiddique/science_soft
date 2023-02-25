import { Container } from '@mui/system'
import React from 'react'
import "./Newtech.css"
import { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Skilldata from '../ReusableComp/Skilldata';
import "../Skills/Skills.css"

import Tabs from "../Banner/Tabs.jsx"

function Newtech() {

    return (
        <>
            <div className="newtech">
                <Container>
                    <div className="newtech">
                        <h2>Improve and Innovate with the Tech Trends</h2>
                        <p >Our team can assist you in transforming your business with the latest tech capabilities to stay ahead of the curve.</p>
                    </div>
                </Container>
                <Container>
                    <div className="technology ">
                        <Tabs></Tabs>
                    </div>
                </Container>
            </div >
        </>
    )
}

export default Newtech