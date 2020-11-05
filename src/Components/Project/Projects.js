import React from 'react'
import { GrGithub } from 'react-icons/gr'
import ReactPlayer from "react-player"

import '../Project/Project.css'

const Projects = () => {
    return (
        
        <div className="body">     
            <h2 className="title">My Projects! </h2>
            
            <div>
                 <h3 className="textbook"> "TextBook Application" 
                    <a href="https://github.com/LetsJessCode/textbook"><GrGithub /> </a>
                </h3>
                     <ReactPlayer className="video"
                    url="https://youtu.be/UfLDn2Cxg4I" />
                        <p> This Rails application allows you to create a user account, monitor what students have homework, and which subjects the assignments are in. As a student completes an assignment, it is removed from their homework list.</p>
            </div>                
            <div>
                <h3> </h3>
                <ReactPlayer className="video"
                url="https://youtu.be/S5_O_5V4NAc" /> 
            </div>
            <div>
            <h3></h3>
                <ReactPlayer className="video"
                url="https://youtu.be/CWqkws14XoA" />
                
            </div>
                    <li>Brief Summary of each project</li>
                    <li>Link to GitHub Repository</li>
        </div>
    )
}

export default Projects
