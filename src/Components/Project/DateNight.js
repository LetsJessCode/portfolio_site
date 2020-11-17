import React from 'react'
import { GrGithub } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import ProjectNav from './ProjectNav'
import Footer from './ProjectFooter'
import Typography from '@material-ui/core/Typography'
import './Project.css'


const frontend = () => {
    window.open("https://github.com/LetsJessCode/date_idea")
}
const backend = () => {
    window.open("https://github.com/LetsJessCode/date_idea-client")
}

export default function DateNight() {
    return (
        <div className="project">
            <div className="project_header">
            <ProjectNav />
            </div>
            <div className="project_component">
                <div className="sub_title">
                    <h3> "Date Night App" </h3>
                    <div className="github">
                        <front>frontend: <Link onClick={frontend}><GrGithub className="icon"/></Link></front>
                        <span>backend: <Link onClick={backend}><GrGithub className="icon"/></Link></span>
                    </div>
                </div>
                <Typography className="info"> CSS Styling, React / Redux Frontend Built with Rails Generated Api Backend </Typography>
                <div class="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/IzxLP0hkT44" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="project_footer">
                <Footer/>
            </div>
        </div>
    )
}
