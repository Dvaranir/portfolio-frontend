import React, { ReactNode } from 'react'

import Helmet from './Helmet'
import Aside from './Aside'
import Header from './Header'
import Footer from './Footer'

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