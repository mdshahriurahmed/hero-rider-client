import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// logo import
import logo from '../../Images/logo.png'

// css files import
import "../../Styles/CommonStyle.css"
import "../../Styles/HeaderStyle.css"
// fontawesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <Navbar className='bg-custom1' variant="dark">
            <Container>
                <Link to="/" className='navBrand'>
                    <div className='h-full px-4 py-3 bg-white logoClass'><img src={logo} alt="" /></div>

                </Link>
                <Nav className="ms-auto">
                    <Link to='/' className='homeMenu'>Home </Link>
                    <Link to='/signup' className='SignupBtn px-3 fw-bold'><span className='signUpLogIn'>Sign Up</span> <FontAwesomeIcon icon={faUserPlus} /></Link>
                    <Link to="/login" className='loginBtn px-3 fw-bold'><span className='signUpLogIn'>Login</span> <FontAwesomeIcon icon={faRightToBracket} /></Link>

                </Nav>
            </Container>
        </Navbar>

    );
};

export default Header;