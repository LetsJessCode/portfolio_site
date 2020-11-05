import React from 'react'
import {NavLink} from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
import { CgTwitter } from 'react-icons/cg'
import { GrLinkedin } from 'react-icons/gr'
import { GrGithub } from 'react-icons/gr'
import '../NavBar/Nav.css'
// ------------------------------
const NavBar = () => {
    return (
        <nav className="nav">
            <ul className="navlink">
                <NavLink to="/about">About</NavLink>
                <NavLink to="/projects"> Projects</NavLink>
                <a href="https://learn.co/jessica_shearwood/resume">Resume</a> 
            </ul>
        </nav>
    )
}
export default NavBar
