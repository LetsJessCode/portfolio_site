import React, { Component } from 'react'
import { MdEmail } from 'react-icons/md'
import { CgTwitter } from 'react-icons/cg'
import { GrLinkedin } from 'react-icons/gr'
import { GrGithub } from 'react-icons/gr'
import './Footer.css'



export class Footer extends Component {
    render() {
        return (
            <div className="footer"> 
                 <div className= "icons">
                    <ul><a href="mailto:letsjesscode@gmail.com"><MdEmail /></a></ul> 
                    <ul><a href="https://twitter.com/LetsJessCode"><CgTwitter /></a></ul> 
                    <ul><a href="https://www.linkedin.com/in/jessica-shearwood/"><GrLinkedin /></a></ul>
                    <ul><a href="https://github.com/LetsJessCode"><GrGithub /> </a></ul>
                </div>
            </div>
        )
    }
}

export default Footer
