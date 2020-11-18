import React from 'react'
import { GrGithub } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import ProjectNav from './ProjectNav'
import Footer from './ProjectFooter'
import Typography from '@material-ui/core/Typography'
import './Project.css'

const github = () => {
    window.open("https://github.com/LetsJessCode/soaps_application")
}

export default function Soaps() {
    return (
        <div className="project">
            <div className="project_header">
            <ProjectNav />
            </div>
            <div className="project_component">
                <div className="sub_title">
                    <h3> "Designer Soap Recipes"</h3> 
                    <div className="github">
                        <span>code: <Link className="github" onClick={github}><GrGithub className="icon"/></Link></span>
                    </div>
                </div>
                <Typography className="info"> CSS Styling and Vanilla JavaScript Frontend Rails Scaffold API, Backend. </Typography>
                <div class="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/S5_O_5V4NAc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Soap Project"></iframe>
                </div>
            </div>
            <div className="project_footer">
                <Footer/>
            </div>
        </div>
    )
}
