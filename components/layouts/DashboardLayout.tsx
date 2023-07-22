import React, { ReactNode } from 'react'
import Aside from '../global/admin/aside/Aside'

import styles from '@/styles/pages/admin/dashboard.module.scss'

type Props  = {
    children: ReactNode
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className={styles['dashboard__container']}>
      <Aside />
      {children}
    </div>
  )
}
