import React from 'react'
import {NavLink} from 'react-router-dom'
import 'fontsource-roboto';
// ------------------------------


const NavBar = () => {
   
    return (
        <nav>
            <ul>
                <NavLink to="/">Home</NavLink> |
                <NavLink to="/Bio">Bio Page</NavLink> |
                <NavLink to="/Projects"> Project Portfolio</NavLink> |
            </ul>
        </nav>
    )
}

export default NavBar
