import React from 'react'
import Lottie from 'react-lottie'

import WhoAmIAnimation from '@/public/assets/animations/programmer.json'

import DefaultButton from '@/components/global-parts/DefaultButton'

import { GenLottieOptions } from '@/scripts/functions'

import styles from  '@/styles/pages/home/who-am-i.module.scss'

function WhoAmI() {
  
  return (
    <main className={styles["who-am-i__container"]}>
        <div className={styles["who-am-i__text-container"]}>
            <h1 className={styles["who-am-i__heading"]}>I am a <span className={`${styles["who-am-i__text"]} primary-color`}><strong>fullstack web developer</strong></span></h1>
            <p className={styles["who-am-i__paragraph"]}>I craft responsive websites where technologies meet creativity</p>
            <DefaultButton content='Contact me!' />
        </div>
        <div className={styles["who-am-i__images-container"]}>
            <div id="who-am-i__animation-container" className={styles["who-am-i__animation-container"]}>
            <Lottie 
              options={GenLottieOptions(WhoAmIAnimation)}
            />
            </div>
            <div className={styles["who-am-i__activity-container"]}><span className={styles["who-am-i__activity-icon"]}></span><span className={styles["who-am-i__activity-text"]}>Currently working on</span><strong className={styles["who-am-i__activity-name"]}>Portfolio</strong></div>
        </div>
    </main>
  )
}

export default WhoAmI