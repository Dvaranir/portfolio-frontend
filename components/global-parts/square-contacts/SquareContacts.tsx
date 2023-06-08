import React from 'react'

import SquareContact from './SquareContact'
import { ISquareContactProps } from './square-contacts.interfaces'

import styles from  '@/styles/pages/home/contacts.module.scss'

function SquareContacts(props: {squareContactsList: ISquareContactProps[]}) {
    const {squareContactsList} = props
  return (
    <div className={styles["contacts__contacts-container"]}><h3 className={styles["contacts__contacts-heading"]}>Contact me here</h3>
    {squareContactsList.map((contact, i) => <SquareContact key={`scon${i}`} {...contact} />)}
        
    </div>
  )
}

export default SquareContacts