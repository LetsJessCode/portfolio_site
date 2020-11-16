import React from 'react'
import { GrGithub } from 'react-icons/gr'
import ReactPlayer from "react-player"
import ProjectNav from './ProjectNav'
import Typography from '@material-ui/core/Typography'
import './Project.css'

const github = () => {
    window.open("https://github.com/LetsJessCode/textbook")
}

export default function Soaps() {
    return (
        <div>
            <ProjectNav />
            <Typography className="skills">
                <span className="skill_title">TECH SKILLS:</span><br/> 
                <span>
                    HTML/CSS | JavaScript | React | Ruby | Ruby on Rails | SQL
                </span>
            </Typography>
            <div className="sub_title">
            <h3 className="list"> "Designer Soap Recipes"</h3> <a href="https://github.com/LetsJessCode/soaps_application"><GrGithub /></a>
            </div>
                <p className="info"> CSS Styling and Vanilla JavaScript Frontend
                    Rails Scaffold API, Backend. </p>
                    <div className="media">
                <ReactPlayer className="video"
                url="https://youtu.be/S5_O_5V4NAc" /> 
            </div>
        </div>
    )
}
