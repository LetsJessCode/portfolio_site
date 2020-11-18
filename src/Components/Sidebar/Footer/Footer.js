import React, { Component } from 'react'
import { MdEmail } from 'react-icons/md'
import { CgTwitter } from 'react-icons/cg'
import { GrLinkedin } from 'react-icons/gr'
import { GrGithub } from 'react-icons/gr'
import { Link } from 'react-router-dom'
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
                 <div className= "icons"><Link onClick={email}><MdEmail /></Link></div>
                 <div className= "icons"><Link onClick={twitter}><CgTwitter /></Link></div>
                 <div className= "icons"><Link onClick={linkedin}><GrLinkedin /></Link></div>
                 <div className= "icons"><Link onClick={github}><GrGithub /> </Link></div>
            </div>
        )
    }
}

export default Footer
