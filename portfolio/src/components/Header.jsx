import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css' 

const Header = () => {
  return (
    <div className='header-container'>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container className="nav-container">
                <Nav>
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header