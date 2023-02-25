import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Skilldata from '../ReusableComp/Skilldata'
import bigdata from "../assests/bigdataR.png"
import blockchain from "../assests/blockchainR.png"
import computer from "../assests/computer_visionR.png"
import Skilldata2 from '../ReusableComp/Skilldata2'
import Skilldata3 from '../ReusableComp/Skilldata3'

import Skilldata4 from '../ReusableComp/Skilldata4'


import mixedR from "../assests/mixed_realityR.png"
import AI from "../assests/AIR.png"



import "./Tabs.css"
import { Container } from '@mui/system';
export default function Tabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    m: 1,
                    p: 1
                }}>


                    <div className="parent3">
                        <TabList onChange={handleChange} aria-label="lab API tabs example">

                            <Tab style={{ color: "black", fontSize: "larger", fontWeight: "bolder" }} label="Big DAta" value="1" />
                        </TabList>
                        <div className="child3">
                            <img className="img-fluid" width="70px" src={bigdata} alt="" />

                        </div>
                    </div>
                    <div className="parent5">
                        <TabList onChange={handleChange} aria-label="lab API tabs example">

                            <Tab style={{ color: "black", fontSize: "larger", fontWeight: "bolder" }} label="Computer Vision" value="2" />
                        </TabList>
                        <div className="child5">
                            <img className="img-fluid" width="70px" src={computer} alt="" />
                        </div>
                    </div>
                    <div className="parent4">


                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab style={{ color: "black", fontSize: "larger", fontWeight: "bolder" }} label="BlockChain" value="3" />

                        </TabList>
                        <div className="child4">
                            <img className="" width="130px" src={blockchain} alt="" />

                        </div>
                    </div>

                    <div className="parent7">

                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab style={{ color: "black", fontSize: "larger", fontWeight: "bolder" }} label="AI" value="4" />

                        </TabList>
                        <div className="child7">
                            <img className="img-fluid" width="70px" src={AI} alt="" />

                        </div>
                    </div>
                    <div className="parent6">

                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab style={{ color: "black", fontSize: "larger", fontWeight: "bolder" }} label="Mixed Reality" value="6" />

                        </TabList>
                        <div className="child6">
                            <img className="img-fluid" width="70px" src={mixedR} alt="" />

                        </div>
                    </div>



                </Box>

                <TabPanel value="1">
                    {/* <Container className="mx-2">
                        <span>

                         

                        </span>

                    </Container> */}

                    <Skilldata2 h2='SERVICES WE OFFER:'
                        para="   Tame your big data through robust solutions that empower data collection, storage, processing and analysis."
                        h0="Consulting"
                        h1="Security"
                        h="Implementation"
                        h3="Help desk services  "
                        h4="Usability testing"
                        h5="Management and support"
                        h6="Migration" />
                </TabPanel>
                <TabPanel value="2">

                    <Skilldata2 h2='SELECTED AI TECHNOLOGIES WE MASTER:'
                        para="  
Improve decision-making, planning and forecasting and revamp business processes with AI and ML technologies simulating human intelligence."

                        h0="Machine learning (including deep learning)"
                        h1="Natural language processing"
                        h="Robotics"
                        h3="Image recognition  "
                    /></TabPanel>
                <TabPanel value="3">

                    <Skilldata2 h2='SELECTED SOLUTIONS:'
                        para="Derive actionable insights from images and videos."
                        h0="Detection of visual defects and anomalies"
                        h1="Barcode verification and validation"
                        h="Recognition of item location and positioning"
                        h3="3D modelling and mapping  "
                    /></TabPanel>
                <TabPanel value="4">

                    <Skilldata4 h2='SERVICE WE OFFER:.'
                        para="Collect, store, analyze sensor data and build ‘smart’ operations.

"
                        h0="Blockchain-based product development for product companies"
                        h1="Blockchain consulting and implementation for non-IT enterprises"
                    /></TabPanel>

                <TabPanel value="6">

                    <Skilldata4 h2='SERVICES WE OFFER::'
                        para="Get solutions for enhanced traceability, security and faster processing of data and transactions.

"
                        h0="Virtual Reality development"
                        h1="Augmented Reality development"

                    /></TabPanel>

            </TabContext>
        </Box>
    );
}