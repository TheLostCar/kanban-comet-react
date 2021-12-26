import React from 'react'
import { Container } from 'reactstrap'
import logo from '../assets/logo/logo.svg'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light sticky-top">
            <Container fluid>
                <a href="" className="navbar-brand"><img src={logo} height="35px" /></a>

                <span className="navbar-text ml-auto">
                    <a href="signup.html">
                        <button className="btn btn-info text-white">
                            Sign Up
                        </button></a>
                    {' '}
                    <a href="login.html">
                        <button className="btn btn-outline-dark">
                            Login
                        </button>
                    </a>
                </span>
            </Container>
        </nav>
    )
}

export default Header
