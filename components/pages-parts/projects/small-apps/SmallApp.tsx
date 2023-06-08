import React from 'react'

import { ISmallAppProps } from './small-app.intefaces'
import AppLinks from '../apps/AppLinks'

export default function SmallApp({technologies, heading, description, liveLink, githubLink}: ISmallAppProps) {
  return (
    <div className="small-projects__project-container">
        <p className="small-projects__project-technologies">{technologies}</p>
        <div className="small-projects__project-bottom-container">
            <h3 className="small-projects__project-heading">{heading}</h3>
            <p className="small-projects__project-description">{description}</p>
            <AppLinks liveLink={liveLink} githubLink={githubLink} />
        </div>
    </div>
  )
}
