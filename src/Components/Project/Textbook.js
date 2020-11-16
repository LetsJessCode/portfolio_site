import React from 'react'
import { GrGithub } from 'react-icons/gr'
import ReactPlayer from "react-player"
import './Project.css'
import ProjectNav from './ProjectNav'
import Typography from '@material-ui/core/Typography'


const github = () => {
    window.open("https://github.com/LetsJessCode/textbook")
}

export default function Textbook() {
    return (
        <div>
        <ProjectNav />
        <Typography className="skills">
            <span className="skill_title">TECH SKILLS:</span><br/> 
            <span>
                HTML/CSS | JavaScript | React | Ruby | Ruby on Rails | SQL
            </span>
        </Typography>
        <div className="project_component">
            <div className="sub_title">
            <h3 className="list"> "TextBook Application" </h3> <a onClick={github}><GrGithub /></a>
            </div>
            <p className="info"> Rails generated web application, allowing you to monitor a students assignments by subject and completion.</p>
            <ReactPlayer className="video"
            url="https://youtu.be/UfLDn2Cxg4I" />
        </div>
        </div>
    )
}
