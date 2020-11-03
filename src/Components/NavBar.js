import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Bio">Bio Page</NavLink>
                <NavLink to="/Projects"> Project Portfolio</NavLink>
                <NavLink to="/Blogs">Blogs</NavLink>
                <NavLink to="/Contact">Contact Info</NavLink>
            </ul>
        </nav>
    )
}

export default NavBar
