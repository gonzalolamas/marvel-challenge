import React from 'react';
import logo from './images/Marvel_Logo.svg'
import star from './images/estrella.svg'
import './Navbar.css'
import Cards from './Cards'

const Navbar = () =>{

    return(
        <div>
            <img className="logo__marvel" src={logo} alt={"logo"} />

            <input className="input__box"/>

            <img className="star__style" src={star} alt={"star"} />

            <Cards/>
        </div>
    )
}

export default Navbar;
