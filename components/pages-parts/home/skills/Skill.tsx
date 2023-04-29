import React from 'react'

import { SkillProps } from './skill.interfaces'

import styles from  '@/styles/pages/home/skills.module.scss'


export default function Skill(props: {skill: SkillProps}) {
    const { heading, technologies } = props.skill;
  
  return (
    <div className={styles["skill__container"]}>
        <h3 className={styles["skill__heading"]}>{heading}</h3>
        <p className={styles["skill__description"]}>{technologies}</p>
    </div>
  )
}