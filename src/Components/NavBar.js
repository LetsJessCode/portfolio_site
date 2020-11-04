import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink> </li>
                <li><NavLink to="/Bio">Bio Page</NavLink> </li>
                <li><NavLink to="/Projects"> Project Portfolio</NavLink> </li>
               
            </ul>
        </nav>
    )
}

export default NavBar
