import React from 'react'
import Image from 'next/image'

import { ISquareContactProps } from './square-contacts.interfaces'

import styles from  '@/styles/pages/home/contacts.module.scss'

export default function SquareContact({href, imageSrc, imageAlt, text}: ISquareContactProps) {
  return (
    <a href={href} className={styles["contacts__contacts-link"]} target="_blank" rel="noopener noreferrer">
        <p className={styles["contacts__contacts-contact"]}>
        <Image src={imageSrc} width={30} height={30} alt={imageAlt} className={styles["contacts__contacts-link-image"]}/>
        <span className={styles["contacts__contacts-contact-text"]}>{text}</span>
        </p>
    </a>
  )
}
