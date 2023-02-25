import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assests/sciencesoft.png';
import SearchIcon from '@mui/icons-material/Search';
import './Appbar.css'
const Appbar = () => {

  return (
    <>

      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 navbar ">
          <Container >
            <Navbar.Brand href="#"><img src={logo} width="200px"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end navlinks flex-grow-1 pe-3 ">
                  <Nav.Link className='links'>About</Nav.Link>
                  <Nav.Link className='links'>Services</Nav.Link>
                  <Nav.Link className='links'>Solutions</Nav.Link>
                  <Nav.Link className='links'>Technologies</Nav.Link>
                  <Nav.Link className='links' >Case Studies</Nav.Link>
                  <Nav.Link className='links' >Blogs</Nav.Link>
                  <Nav.Link className='link mb-1 mx-3' ><SearchIcon /></Nav.Link>

                  <button className='talk_btn'>Let's Talk</button>

                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Appbar