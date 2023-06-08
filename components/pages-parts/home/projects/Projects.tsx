import React from 'react'
import DefaultButton from '@/components/global-parts/DefaultButton'

import Project from './Project'
import { IProjectProps } from './project.interfaces'

import styles from  '@/styles/pages/home/projects.module.scss'

function Projects(props: {projectsList:IProjectProps[]}) {
    const { projectsList } = props
    
  return (
    <section className={styles["projects__section-container"]}>
        <div className={styles["projects__heading-container"]}>
          <div className={styles["projects__heading-line-container"]}>
            <h2 className={styles["projects__heading"]}><span className={`${styles["projects__heading-cage"]} primary-color`}>#</span>projects</h2>
            <div className={styles["projects__heading-line line"]}></div>
          </div>
          <DefaultButton content='View all ~~&gt;' href='#' link={true} />
        </div>
        <div className={styles["projects__projects-container"]}>
        {projectsList.map((project, i) => (
            <Project key={`proj${i}`} project={project} />
        ))}
        </div>
    </section>)
}

export default Projects

