import React from 'react'
import Header from '../components/Header.jsx'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './styles.css'

export const Home = () => {
  return (
    <>
        <Header />
        <div className='home-container'>
            <h1 className='name'>Ethan Patterson</h1>
            <Container className='home-buttons'>
                <Button variant="secondary" href="https://github.com/ritual-17"  target="_blank" rel="noopener">GitHub</Button>
                <Button variant="secondary" href="https://www.linkedin.com/in/ethan-patterson8/"  target="_blank" rel="noopener">LinkedIn</Button>
            </Container>
        </div>
        
    </>
    
  )
}
