import React from 'react'
import {NavLink} from 'react-router-dom'
// import { MdEmail } from 'react-icons/md'
// import { CgTwitter } from 'react-icons/cg'
// import { GrLinkedin } from 'react-icons/gr'
// import { GrGithub } from 'react-icons/gr'
// import '../NavBar/Nav.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/NavBar'
import NavDropdown from 'react-bootstrap/Navbar'
// ------------------------------
const NavBar = () => {
    return (   
        <nav className="nav">
            <ul>
               <li><NavLink className="navlink" to="/about">About</NavLink></li> 
               <li><NavLink className="navlink" to="/projects"> Projects</NavLink></li>
               <li><a href="https://learn.co/jessica_shearwood/resume">Resume</a>  </li> 
                <li><a href="https://jessicashearwood.medium.com/">Blogs</a></li> 
            </ul>
        </nav>
        
    )
}
export default NavBar
