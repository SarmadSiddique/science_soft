import React from 'react'
// import './Skilldata.css'
import './Skilldata3.css'


import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Skilldata3(prop) {
    return (
        <div className="skilldata ">
            <h2>{prop.h2}</h2>
            <p >{prop.para}</p>
            <div className="col-md-7">
                <div className="main3 d-lg-flex justify-content-between p-2 align-item-center">

                    <div  > <a href="#">
                        <p className='before '>
                            {prop.h0}
                        </p>
                    </a></div>

                    <div > <a href="#">
                        <p className='before'>
                            {prop.h1}
                        </p>
                    </a></div>

                </div>
                <div className="main3 d-lg-flex  justify-content-between p-2 align-item-center">

                    <div > <a href="#">
                        <p className='before '>
                            {prop.h}
                        </p>
                    </a></div>

                    <div > <a href="#">
                        <p className='before'>
                            {prop.h3}
                        </p>
                    </a></div>

                </div>
                <div className="main3 d-lg-flex  justify-content-between p-2 align-item-center">

                    <div > <a href="#">
                        <p className='before '>
                            {prop.h4}
                        </p>
                    </a></div>

                    <div > <a href="#">
                        <p className='before'>
                            {prop.h5}
                        </p>
                    </a></div>

                </div>

            </div>

            <div id="btn" className='text-start mt-3  '>
                <a href="">FInd Out More <span ><ArrowForwardIcon className="iconss" style={{ color: "blue" }} /></span> </a>

            </div>





        </div >
    )
}
export default Skilldata3