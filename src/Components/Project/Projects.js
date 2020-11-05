import React from 'react'
import { GrGithub } from 'react-icons/gr'
import '../Project/Project.css'

const Projects = () => {
    return (
        
        <div className="body">     
            <h2 className="title">My Projects!</h2>
                <ul>
                    <li>Video WalkThroughs of Each Project</li>
                    <li>Brief Summary of each project</li>
                    <li>Link to GitHub Repository</li>
                </ul>
        </div>
    )
}

export default Projects
