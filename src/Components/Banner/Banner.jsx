import React from 'react'
import "./Banner.css"
import Line from '../ReusableComp/Line'
import Carousel from './Carousel'
// import Carousel from 'react-material-ui-carousel'

const Banner = () => {

    return (
        <>

            <div className="banner d-flex flex-column align-items-center text-center p-5  " >
                <h1 className='text-center  mb-3' >
                    SOFTWARE CONSULTING AND DEVELOPMENT <br />
                    FOR YOUR DIGITAL SUCCESS
                </h1>

            </div>
            <div className='paragraph'>

                <span >
                    Since 1989. For millions of users. We transform businesses with powerful and adaptable <br /> digital solutions that satisfy the needs of  today and unlock the opportunities of <br /> tomorrow.
                </span>
            </div>

            <Carousel />
        </>

    )
}

export default Banner