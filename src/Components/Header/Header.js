import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../../Styles/CommonStyle.css"
import logo from '../../Images/logo.png'

const Header = () => {
    return (

        <Navbar className='bg-custom1 !text-white' variant="dark">
            <Container>
                <Navbar.Brand href="#home" className='navBrand'>
                    <div className='h-full px-4 py-3 bg-white logoClass'><img src={logo} alt="" /></div>

                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    );
};

export default Header;