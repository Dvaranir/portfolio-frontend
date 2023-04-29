import React from 'react'
import Image from 'next/image'
import { NoComponentIfUndefined } from '@/scripts/functions'
import DefaultButton from '@/components/global-parts/DefaultButton'
import { ProjectProps } from './project.interfaces'
import styles from  '@/styles/pages/home/projects.module.scss'

export default function Project(props: {project: ProjectProps}) {

    const {projectName, technologies, projectAbout, imageSrc, liveLink, gitLink} = props.project;
  
  return (
    <article className={styles["projects__project-container"]}>
        <div className={styles["projects__project-image-container"]}>
            <Image className={styles["projects__project-image"]} width={200} height={200} src={imageSrc} alt=""/>
        </div>
        <p className={styles["projects__project-technologies-paragraph"]}>{technologies}</p>
        <div className={styles["projects__project-about-container"]}>
            <h3 className={styles["projects__project-about-heading"]}>{projectName}</h3>
            <p className={styles["projects__project-about-paragraph"]}>{projectAbout}</p>
            <div className={styles["projects__project-about-buttons-container"]}>
            {NoComponentIfUndefined(liveLink, <DefaultButton href={liveLink} additionalClass={styles["projects__project-about-button"]} content='Live &lt;~&gt;'/>)}
            {NoComponentIfUndefined(gitLink, <DefaultButton href={gitLink} additionalClass={styles["projects__project-about-button"]} content='Git &gt;'/>)}
            </div>
        </div>
    </article>
  )
}
