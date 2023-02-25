import React from 'react'
import './Skilldata.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Skilldata(prop) {
    return (
        <div className="skilldata">
            <h2>{prop.h2}</h2>
            <p >{prop.para}</p>
            <div className="main d-lg-flex  justify-content-between align-item-center">

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
            <div className="main d-lg-flex  justify-content-between align-item-center">

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

            <div className=" main d-lg-flex  justify-content-between align-item-start  ">

                <div > <a href="#">
                    <p className='before'>
                        {prop.h4}
                    </p>

                </a></div>


                <div > <a href="#">
                    <p className='before'>
                        {prop.h5}
                    </p>
                </a></div>








            </div >
            <div className="main  d-flex justify-content-between align-item-start ">  <div className="data2">
                <div > <a href="#">
                    <p className='before'>
                        {prop.h6}
                    </p>
                </a></div>


            </div></div>

            <div className='text-end mt-4 '>
                <a id="btn " href="">LEARN MORE <span ><ArrowForwardIcon className="iconss " style={{ color: "blue" }} /></span> </a>

            </div>
        </div >
    )
}
export default Skilldata