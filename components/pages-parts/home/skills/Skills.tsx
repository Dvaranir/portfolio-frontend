import React from 'react'

import Skill from './Skill'
import { ISkillProps } from './skill.interfaces'

import styles from  '@/styles/pages/home/skills.module.scss'

export default function Skills(props: {skillsList: ISkillProps[]}) {
  const { skillsList } = props
  
  return (
    <section className={styles["skills__section-container"]}>
      <div className={styles["skills__heading-container"]}>
        <h2 className={styles["skills__heading"]}><span className={`${styles["skills__heading-cage"]} primary-color`}>#</span>skills</h2>
        <div className={styles["skills__heading-line line"]}></div>
      </div>
      <div className={styles["skills__container"]}>
        {skillsList.map((skill, i) => <Skill key={`skil${i}`} skill={skill} />)}
      </div>  
    </section>      
  )
}
