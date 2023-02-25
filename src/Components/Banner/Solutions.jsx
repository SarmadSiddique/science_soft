import { Container } from '@mui/system'
import React from 'react'
import Solutionsdata from '../ReusableComp/Solutionsdata'
import "./Solutions.css"
const Solutions = () => {
    return (
        <>
            <div className="Solutions">
                <Container>
                    <div className="solution_content">
                        <h2>
                            Solutions We Deliver
                        </h2>
                        <span >We IT-enable all kinds of B2B, B2C interactions and internal operations.</span>
                        <Solutionsdata heading="Enterprice Applications" h2="ERP" h3="CRM" h4="HR software" />
                        <Solutionsdata heading="eLearning software " h2="eCommerce" h3="Mobile Apps" h4="Collaboratrion and productivity solutions" />

                        <Solutionsdata className="blue" heading="Fleet Management Software" h2="Data Analytics" h3="Web Portal" h4="ITSM" />
                    </div>




                </Container>
            </div>
        </>
    )
}

export default Solutions