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
                <NavLink className="navlink" to="/about">About</NavLink>
                <NavLink className="navlink" to="/projects"> Projects</NavLink>
                <NavLink className="navlink" to="/blogs"> Blogs </NavLink> 
            </ul>
            <div className="resume">
                 <a href="https://learn.co/jessica_shearwood/resume">Resume</a> 
            </div>
           
        </nav>
    )
}
export default NavBar
