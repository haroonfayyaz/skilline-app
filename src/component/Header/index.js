import React, { useState, useEffect } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Container from '../Container'
import Button from '../Button'
import Logo from '../Logo'
import HeadWrapper from './style'

function BasicExample() {
  const [top, setTop] = useState(true)
  useEffect(() => {
    const scrollHandler = () => {
      if(window.innerWidth > 1199){
          window.scrollY > 50 ? setTop(false) : setTop(true)
      }
     
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])
  return (
    <HeadWrapper>
      <Navbar
        header
        expand="xl"
        className={`fixed-top ${!top && `fixed-bg shadow-lg`}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav align-items-end">
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Careers</Nav.Link>
              <Nav.Link href="#link">Blog</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
              <Button variant="secondary" text="login" />
              <Button variant="primary" text="Sign Up" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeadWrapper>
  )
}

export default BasicExample
