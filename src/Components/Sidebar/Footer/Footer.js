import React, { Component } from 'react'
import { MdEmail } from 'react-icons/md'
import { CgTwitter } from 'react-icons/cg'
import { GrLinkedin } from 'react-icons/gr'
import { GrGithub } from 'react-icons/gr'
import './Footer.css'

const email = () => {
    window.open("mailto:letsjesscode@gmail.com")
}

const twitter = () => {
    window.open("https://twitter.com/LetsJessCode")
}

const linkedin = () => {
    window.open("https://www.linkedin.com/in/jessica-shearwood/")
}

const github = () => {
    window.open("https://github.com/LetsJessCode")
}


export class Footer extends Component {
    render() {
        return (
            <div className="footer"> 
                 <div className= "icons"><a onClick={email}><MdEmail /></a></div>
                 <div className= "icons"><a onClick={twitter}><CgTwitter /></a></div>
                 <div className= "icons"><a onClick={linkedin}><GrLinkedin /></a></div>
                 <div className= "icons"><a onClick={github}><GrGithub /> </a></div>
            </div>
        )
    }
}

export default Footer
