import React from 'react'
import Image from 'next/image'

import AppLinks from './AppLinks'

import { IAppProps } from './app.interfaces'

import styles from '@/styles/pages/projects/apps.module.scss'

export default function App({imageSrc, imageAlt, technologies, heading, description, liveLink, githubLink}: IAppProps) {
  return (
    <article className={styles["apps__app-container"]}>
        <div className={styles["apps__app-image-container"]}>
            <Image width={100} height={100} className={styles["apps__app-image"]} src={imageSrc} alt={imageAlt} />
        </div>
        <p className={styles["apps__app-technologies-paragraph"]}>{technologies}</p>
        <div className={styles["apps__app-about-container"]}>
            <h3 className={styles["apps__app-about-heading"]}>{heading}</h3>
            <p className={styles["apps__app-about-paragraph"]}>{description}</p>
            <div className={styles["apps__app-about-buttons-container"]}>
              <AppLinks liveLink={liveLink} githubLink={githubLink} />
            </div>
        </div>
    </article>
  )
}
