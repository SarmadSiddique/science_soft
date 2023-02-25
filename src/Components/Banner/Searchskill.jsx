import { Container } from '@mui/system'
import React from 'react'
import "./Searchskill.css";
import SearchIcon from '@mui/icons-material/Search';

function Searchskill() {
    return (
        <>
            <div className="search_section">
                <Container>

                    <span>Haven't found a suitable service? Type your need below!</span>
                    <div className='input'>
                        <SearchIcon className='icon ' />

                        <input className='cursor' placeholder='E.g., VR development or help desk services.' type="text" />

                    </div>
                </Container>

            </div>
        </>


    )
}

export default Searchskill