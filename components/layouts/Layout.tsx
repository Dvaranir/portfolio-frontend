import React, { ReactNode } from 'react'

import Helmet from '../global/user/Helmet'
import Aside from '../global/user/Aside'
import Header from '../global/user/Header'
import Footer from '../global/user/Footer'

type Props  = {
    children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <main className="flow-container">
        <Helmet/>
        <Aside />
        <div className="container">
          <Header/>
          {children}
        </div>
        <Footer/>
    </main>
  )
}