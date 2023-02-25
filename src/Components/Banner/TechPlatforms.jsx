import { Container } from '@mui/system';
import React from 'react'
import "./TechPlatform.css";
import Tabs from './Tabs';
import Newtech from './Newtech';
import Skills from '../Skills/Skills';
function TechPlatforms() {
    return (
        <>
            <Container>
                <div className="platforms">
                    <h2>Technologies and Platforms We Work With</h2>
                </div>
                {/* <Skills /> */}
            </Container>
        </>
    )
}

export default TechPlatforms