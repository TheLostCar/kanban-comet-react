import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import logo from '../assets/logo/logo.svg'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light sticky-top">
            <Container fluid>
                <Link to=""><img src={logo} alt="logo" height="35px" /></Link>

                <span className="ml-auto">
                    <Link to="/signup" className="btn btn-info text-white">Sign Up</Link>
                    {' '}
                    <Link to="/login" className="btn btn-outline-dark">Login</Link>
                </span>
            </Container>
        </nav>
    )
}

export default Header
