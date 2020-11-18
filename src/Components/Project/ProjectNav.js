import React from 'react'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import {NavLink} from 'react-router-dom'
import './Project.css'

export default function ProjectNav() {
    return (
        <div className="project_nav">
            <Breadcrumbs aria-label="breadcrumb">
            <Typography className="nav_title">Projects</Typography>
            <NavLink to="/projects/textbook">Textbook</NavLink>
            <NavLink to="/projects/soap">Soaps</NavLink>
            <NavLink to="/projects/date-night">DateNight</NavLink>
            </Breadcrumbs>
        </div>
    )
}
