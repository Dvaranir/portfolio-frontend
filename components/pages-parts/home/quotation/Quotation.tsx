import React from 'react'

import styles from '@/styles/pages/home/quotation.module.scss'

type Props = {}

function Quotation({}: Props) {
  return (
    <div className={styles["quotation__container"]}>
        <p className={styles["quotation__paragraph"]}>I know that I know nothing,<br/>but others do not even know that</p>
        <p className={styles["quotation__sign"]}>- Socrates</p>
    </div>
  )
}

export default Quotation