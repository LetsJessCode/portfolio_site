import React from 'react'
import { GrGithub } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import ProjectNav from './ProjectNav'
import Footer from './ProjectFooter'
import Typography from '@material-ui/core/Typography'
import './Project.css'



const github = () => {
    window.open("https://github.com/LetsJessCode/textbook")
}

export default function Textbook() {
    return (
        <div className="project">
            <div className="project_header">
                <ProjectNav />
            </div>
            <div className="project_component">
                <div className="sub_title">
                    <h3> "TextBook Application" </h3> 
                    <div className="github">
                        <span>code: <Link className="github" onClick={github} ><GrGithub className="icon"/></Link></span>
                    </div>
                </div>
                <Typography className="info"> Rails generated web application, allowing you to monitor a students assignments by subject and completion.</Typography>
                <div class="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/UfLDn2Cxg4I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title='Textbook Project' ></iframe>
                </div>
            </div>
            <div className="project_footer">
                <Footer/>
            </div>
        </div>
    )
}
