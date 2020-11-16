import React from 'react'
import { GrGithub } from 'react-icons/gr'
import ReactPlayer from 'react-player'
import ProjectNav from './ProjectNav'
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
        <div>
            <ProjectNav />
            <Typography className="skills">
                <span className="skill_title">TECH SKILLS:</span><br/> 
                <span>
                    HTML/CSS | JavaScript | React | Ruby | Ruby on Rails | SQL
                </span>
            </Typography>
            <div className="sub_title">
                <h3 className="list"> "Date Night App" </h3>
                FE: <a onClick={frontend}><GrGithub /></a>
                BE: <a onClick={backend}><GrGithub /></a>
            </div>
            <p className="info"> CSS Styling, React / Redux Frontend Built with Rails Generated Api Backend </p>
            <ReactPlayer className="video" url="https://youtu.be/CWqkws14XoA" />
        </div>
    )
}
