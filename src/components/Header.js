import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function Header() {


    return (
        <div className="bg-dark" style= {NavbarStyle}>
            <Navbar bg="dark" expand="lg" variant="dark" className="container">
                <Navbar.Brand href="/">MY_PORTFOLIO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link to="/" className="link" >HOME</Link>
                            <Link to="/portfolio" className="link">PORTFOLIO</Link>
                            <Link to="/services" className="link">SERVICES</Link>
                            <Link to="/testimonial" className="link">TESTIMONIAL</Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

const NavbarStyle = {
    position: 'sticky',
    top: '0',
    zIndex: '1000'
}
export default Header;
