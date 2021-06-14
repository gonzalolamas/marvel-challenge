import React from 'react'
import logo from '../../assets/images/Logo.svg';
import {HeaderMain} from './Header.style'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <HeaderMain>
            <NavLink to='/'>
                <img src={logo} alt="{logo}"/>
            </NavLink>
        </HeaderMain>
    )
}

export default Header