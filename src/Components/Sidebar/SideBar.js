import React from 'react'
import {Link} from 'react-router-dom'
import Header from './NavBar/Header'
import Footer from './Footer/Footer'
import photo from '../images/Jess.jpg'
import './SideBar.css'

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="side_items">
                <div className="img"><Link to="/"><img className="profile_pic" src={photo} alt="profile pic"/></Link></div>
                <div className="sidebar_title"><h3>Let Jess Code!</h3></div>
                <div className="header"><Header /></div>
                <div className="footer"><Footer /></div> 
            </div>
        </div>
    )
}
