import React from 'react'

import SquareContacts from '../../../global-parts/square-contacts/SquareContacts'
import { SquareContactProps } from '../../../global-parts/square-contacts/square-contacts.interfaces'

import styles from  '@/styles/pages/home/contacts.module.scss'


export default function Contacts(props: {squareContactsList: SquareContactProps[]}) {
    const {squareContactsList} = props
  return (
    <section className={styles["contacts__section-container"]}>
        <div className={styles["contacts__heading-line-container"]}>
            <h2 className={styles["contacts__heading"]}><span className={`${styles["contacts__heading-cage"]} primary-color`}>#</span>contacts</h2>
            <div className={`${styles["contacts__heading-line"]} line`}></div>
        </div>
        <div className={styles["contacts__text-contacts-container"]}>
            <div className={styles["contacts__text-container"]}>
            <p className={styles["contacts__text"]}>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
            </div>
            <SquareContacts squareContactsList={squareContactsList} />
        </div>
    </section>
  )
}
