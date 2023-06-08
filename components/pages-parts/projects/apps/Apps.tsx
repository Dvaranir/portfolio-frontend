import React from 'react'

import App from './App'

import { IAppProps } from './app.interfaces'

import styles from '@/styles/pages/projects/apps.module.scss'

function Apps(props: {completedAppsList: IAppProps[]}) {
    const {completedAppsList} = props
  return (
    <section className={styles["apps__section"]}>
        <h2 className={`${styles["apps__heading"]} block-heading`}><span className={`${styles["apps__heading-cage"]} primary-color`}>#</span>apps</h2>
        <div className={styles["apps__container"]}>
            {completedAppsList.map((app, i) => <App key={`capp${i}`} {...app} />)}
        </div>
    </section>
  )
}

export default Apps