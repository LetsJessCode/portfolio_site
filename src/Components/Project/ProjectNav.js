import React from 'react'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import {Link, NavLink} from 'react-router-dom'

function handleClick(e) {
    e.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function ProjectNav() {
    return (
        <div className="project-nav">
            <Breadcrumbs aria-label="breadcrumb">
            <Typography color="textPrimary">Projects</Typography>
            <NavLink to="/projects/textbook">Textbook</NavLink>
            <NavLink to="/projects/soap">Soaps</NavLink>
            <NavLink to="/projects/date-night">DateNight</NavLink>
            </Breadcrumbs>
        </div>
    )
}
