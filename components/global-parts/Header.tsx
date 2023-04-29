import React from 'react'

import Image from 'next/image'

function Header() {
  return (
    <header className="header__container">
        <div className="header__logo-container">
            <Image className="header__logo-image small-logo-image" width={200} height={200} src="/assets/images/logo-terminal.png" alt=''/>
            <span className="header__logo-title">Yuriy</span>
        </div>
        <nav className="header__navigation-container">
            <ul className="header__navigation-list">
            <li className="header__navigation-item">
                <a href="" className="header__navigation-anchor"><span className="header__navigation-cage primary-color">#</span>home
                </a>
            </li>
            <li className="header__navigation-item">
                <a href="" className="header__navigation-anchor"><span className="header__navigation-cage primary-color">#</span>projects
                </a>
            </li>
            <li className="header__navigation-item">
                <a href="" className="header__navigation-anchor"><span className="header__navigation-cage primary-color">#</span>about-me
                </a>
            </li>
            <li className="header__navigation-item">
                <a href="" className="header__navigation-anchor"><span className="header__navigation-cage primary-color">#</span>contacts
                </a>
            </li>
            <li className="header__navigation-item">
                <select className="header__navigation_language-select" name="languages" id="languages">
                <option className="header__navigation_language-option" value="EN">EN</option>
                <option className="header__navigation_language-option" value="RU">RU</option>
                </select>
            </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header