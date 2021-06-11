import React from 'react'
import logo from '../assets/images/Marvel_Logo.svg'

const Header = () => {
    return (
        <header className="center">
            <img src={logo} alt="{logo}"/>
            <i className="far fa-heart text-primary"></i>
        </header>
    )
}

export default Header