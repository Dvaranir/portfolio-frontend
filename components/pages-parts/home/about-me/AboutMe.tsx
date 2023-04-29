import React from 'react'

import DefaultButton from '@/components/global-parts/DefaultButton'

import styles from  '@/styles/pages/home/about-me.module.scss'

function AboutMe() {
  return (
    <section className={styles["about-me__section-container"]}>
        <div className={styles["about-me__heading-line-container"]}>
            <h2 className={styles["about-me__heading"]}><span className={`${styles["about-me__heading-cage"]} primary-color`}>#</span>about-me</h2>
            <div className={`${styles["about-me__heading-line"]} line`}></div>
        </div>
        <div className={styles["about-me__text-photo-container"]}>
            <div className={styles["about-me__text-container"]}>
            <p className={styles["about-me__text"]}>Hello, i’m Elias!</p>
            <p className={styles["about-me__text"]}>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</p>
            <p className={styles["about-me__text"]}>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
            <DefaultButton additionalClass={styles["about-me__button"]} content='Read more -&gt;'/>
            </div>
            <div id="about-me__animation-container" className={styles["about-me__animation-container"]}></div>
        </div>
    </section>
  )
}

export default AboutMe