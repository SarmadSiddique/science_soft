import React from 'react'
import './Skilldata.css'
import './Skilldata2.css'


import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Skilldata4(prop) {
    return (
        <div className="skilldata2 row">
            <span>{prop.para}</span>
            <h2 className="h2">{prop.h2}</h2>
            <div className="col-md-9">
                <div className="main d-lg-flex   justify-content-between align-item-center">

                    <div  > <a href="#">
                        <p className='before P_sk2'>
                            {prop.h0}
                        </p>
                    </a></div>

                    <div > <a href="#">
                        <p className='before'>
                            {prop.h1}
                        </p>
                    </a></div>

                </div>

            </div>
            <div className="col-md-3">
                <div id='btn' className='text-end  '>
                    <a href="">FInd Out More <span ><ArrowForwardIcon className="iconss" style={{ color: "blue" }} /></span> </a>

                </div>
            </div>



        </div >
    )
}
export default Skilldata4