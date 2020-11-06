import React from 'react'
import { GrGithub } from 'react-icons/gr'
import ReactPlayer from "react-player"

import '../Project/Project.css'

const Projects = () => {
    return (
        
        <div className="body">     
            <h2 className="name">My Projects! </h2>
            <div>
                 <h3 className="list"> "TextBook Application" </h3>
                 <p className="info"> Rails application where you can monitor a students assignments by subject and completion.</p>
                     <ReactPlayer className="video"
                    url="https://youtu.be/UfLDn2Cxg4I" />
                <div className="icon">
                    <a href="https://github.com/LetsJessCode/textbook"><GrGithub /></a>
                </div>
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
