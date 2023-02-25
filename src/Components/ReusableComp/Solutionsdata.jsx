import React from 'react'
import "./Solutionsdata.css"
import SouthEastIcon from '@mui/icons-material/SouthEast';
const Solutionsdata = (prop) => {
    return (
        <div className="data d-flex align-items-center justify-content-between ">
            <div className='data_box '>
                <h5>{prop.heading}</h5>
                <div className="sol_icon">
                    <SouthEastIcon fontSize='' className='i' />
                </div>
            </div>
            <div className='data_box ' >
                <h5>{prop.h2}</h5>

                <div className="sol_icon s">
                    <SouthEastIcon fontSize='' className=' i' />
                </div>

            </div>
            <div className='data_box'>
                <h5>{prop.h3}</h5>
                <div className="sol_icon">
                    <SouthEastIcon fontSize='' className='i' />
                </div>

            </div>
            <div className='data_box '>
                <h5>{prop.h4}</h5>
                <div className="sol_icon">
                    <SouthEastIcon fontSize='' className='i' />
                </div>

            </div>

        </div>
    )
}

export default Solutionsdata