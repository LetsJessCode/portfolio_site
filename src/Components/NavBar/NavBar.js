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
            <ul>
                <NavLink className="navlink" to="/about">About</NavLink> |
                <NavLink className="navlink" to="/projects"> Projects</NavLink> |
                <a classname="navlink" href="https://learn.co/jessica_shearwood/resume">Resume</a> | 
                <a classname="links" href="mailto:letsjesscode@gmail.com"><MdEmail /></a> | 
                <a classname="links" href="https://twitter.com/LetsJessCode"><CgTwitter /></a> | 
                <a classname="links" href="https://www.linkedin.com/in/jessica-shearwood/"><GrLinkedin /></a> |
                <a classname="links" href="https://github.com/LetsJessCode"><GrGithub /> </a>
            </ul>
        </nav>
    )
}
export default NavBar
