import React from 'react'

import SmallApp from './SmallApp'
import { ISmallAppProps } from './small-app.intefaces'

// import styles from '@'

export default function SmallApps(props: {smallAppsList: ISmallAppProps[]}) {
    const {smallAppsList} = props
  return (
    <section className="small-projects__section">
        <h2 className="small-projects__heading projects-heading"><span className="completed-apps__heading-cage primary-color">#</span>small-projects</h2>
        <div className="small-projects__projects-container">
        {smallAppsList.map((app, i) => <SmallApp key={`smap${i}`} {...app}/>)}
            <div className="small-projects__project-container">
                <p className="small-projects__project-technologies">Typescript Javascript</p>
                <div className="small-projects__project-bottom-container">
                    <h3 className="small-projects__project-heading">Bot boilerplate</h3>
                    <p className="small-projects__project-description">Start creating scalable discord.js bot with typescript in seconds</p>
                    <a href="#" className="small-projects__project-source-link button">Github &lt;~&gt;</a>
                </div>
            </div>
            <div className="small-projects__project-container">
                <p className="small-projects__project-technologies">Typescript Javascript</p>
                <div className="small-projects__project-bottom-container">
                    <h3 className="small-projects__project-heading">Bot boilerplate</h3>
                    <p className="small-projects__project-description">Start creating scalable discord.js bot with typescript in seconds</p>
                    <a href="#" className="small-projects__project-source-link button">Github &lt;~&gt;</a>
                </div>
            </div>
            <div className="small-projects__project-container">
                <p className="small-projects__project-technologies">Typescript Javascript</p>
                <div className="small-projects__project-bottom-container">
                    <h3 className="small-projects__project-heading">Bot boilerplate</h3>
                    <p className="small-projects__project-description">Start creating scalable discord.js bot with typescript in seconds</p>
                    <a href="#" className="small-projects__project-source-link button">Github &lt;~&gt;</a>
                </div>
            </div>
        </div>
    </section>
  )
}


