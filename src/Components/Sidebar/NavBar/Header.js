import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Header.css'

// import { MdEmail } from 'react-icons/md'
// import { CgTwitter } from 'react-icons/cg'
// import { GrLinkedin } from 'react-icons/gr'
// import { GrGithub } from 'react-icons/gr'
// import '../NavBar/Nav.css'
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/NavBar'
// import NavDropdown from 'react-bootstrap/Navbar'
// ------------------------------
const resume = () => {
    window.open("https://learn.co/jessica_shearwood/resume")
}

const blog = () => {
    window.open("https://jessicashearwood.medium.com/")
}

const NavBar = () => {
    
    return (   
        <div className="navBar">
            <div className="link"><NavLink to="/about">About</NavLink></div>
            <div className="link"><Link onClick={resume}>Resume</Link></div>
            <div className="link"><NavLink to="/projects"> Projects</NavLink></div>
            <div className="link"><Link onClick={blog}>Blogs</Link></div> 
        </div>
        
    )
}
export default NavBar
