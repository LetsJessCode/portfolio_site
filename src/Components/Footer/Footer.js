import React, { Component } from 'react'
import { MdEmail } from 'react-icons/md'
import { CgTwitter } from 'react-icons/cg'
import { GrLinkedin } from 'react-icons/gr'
import { GrGithub } from 'react-icons/gr'
import '../Footer/Footer.css'

export class Footer extends Component {
    render() {
        return (
            <div className="fixed-bottom"> 
                 <nav className= "icon">
                   <ul> 
                       <a href="mailto:letsjesscode@gmail.com"><MdEmail /></a> 
                         <a href="https://twitter.com/LetsJessCode"><CgTwitter /></a> 
                        <a href="https://www.linkedin.com/in/jessica-shearwood/"><GrLinkedin /></a>
                         <a href="https://github.com/LetsJessCode"><GrGithub /> </a>
                    </ul> 
                </nav>
            </div>
        )
    }
}

export default Footer
