import React from 'react'
import { GrGithub } from 'react-icons/gr'
import ReactPlayer from "react-player"

import '../Project/Project.css'

const Projects = () => {
    return (
        
        <div className="body">     
            <h2 className="name">My Projects! </h2>
            <h4>TECH SKILLS
HTML/CSS, JavaScript, React, Ruby, Ruby on Rails, SQL
</h4>
            <div>
                 <h3 className="list"> "TextBook Application" </h3>
                 <p className="info"> Rails generated web application, allowing you to monitor a students assignments by subject and completion.</p>
                     <ReactPlayer className="video"
                    url="https://youtu.be/UfLDn2Cxg4I" />
                <div className="icon">
                    <a href="https://github.com/LetsJessCode/textbook"><GrGithub /></a>
                </div>
            </div>                
            <div>
                <h3 className="list"> "Designer Soap Recipes"</h3>
                <p className="info"> CSS Styling and Vanilla JavaScript Frontend
                    Rails Scaffold API, Backend. </p>
                <ReactPlayer className="video"
                url="https://youtu.be/S5_O_5V4NAc" /> 
            </div>
            <div className="icon">
                    <a href="https://github.com/LetsJessCode/soaps_application"><GrGithub /></a>
                </div>
            <div>
            <h3 className="list"> "Date Night App" </h3>
            <p className="info"> CSS Styling, React / Redux Frontend
                Built with Rails Generated Api Backend </p>
                <ReactPlayer className="video"
                url="https://youtu.be/CWqkws14XoA" />
                FE: <a href="https://github.com/LetsJessCode/date_idea"><GrGithub /></a>
                BE: <a href="https://github.com/LetsJessCode/date_idea-client"><GrGithub /></a>
            </div>
        </div>
    )
}

export default Projects
