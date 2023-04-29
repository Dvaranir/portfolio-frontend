import React from 'react'

import SquareContact from './SquareContact'
import { SquareContactProps } from './square-contacts.interfaces'

import styles from  '@/styles/pages/home/contacts.module.scss'

function SquareContacts(props: {squareContactsList: SquareContactProps[]}) {
    const {squareContactsList} = props
  return (
    <div className={styles["contacts__contacts-container"]}><h3 className={styles["contacts__contacts-heading"]}>Contact me here</h3>
    {squareContactsList.map(contact => <SquareContact {...contact} />)}
        
    </div>
  )
}

export default SquareContacts