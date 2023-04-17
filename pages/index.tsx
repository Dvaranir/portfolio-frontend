import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Yuriy Dvaranir</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      
              {/* <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles[]}{styles.vercelLogo}
                width={100}
                height={24}
                priority
              /> */}

        <div className="flow-container">
          <aside className="aside__container">
            <div className="aside__line"></div>
            <ul className="aside__links-container">
              <li className="aside__link-container"><a href="#" className="aside__link"><Image className="aside__image" width={200} height={200} src="/assets/images/logo-github.svg" alt="Github Logo"/></a></li>
              <li className="aside__link-container"><a href="#" className="aside__link"><Image className="aside__image" width={200} height={200} src="/assets/images/logo-bitbucket.webp" alt="Bitbucket Logo"/></a></li>
              <li className="aside__link-container"><a href="#" className="aside__link"><Image className="aside__image" width={200} height={200} src="/assets/images/logo-linkedin.webp" alt="Lenkedin Logo"/></a></li>
            </ul>
          </aside>
          <div className="container">
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
          <main className={styles["who-am-i__container"]}>
            <div className={styles["who-am-i__text-container"]}>
              <h1 className={styles["who-am-i__heading"]}>I am a <span className={styles["who-am-i__text primary-color"]}><strong>fullstack web developer</strong></span></h1>
              <p className={styles["who-am-i__paragraph"]}>I craft responsive websites where technologies meet creativity</p>
              <button className={`${styles["who-am-i__button"]} button`}>Contact me!</button>
            </div>
            <div className={styles["who-am-i__images-container"]}>
              <div id="who-am-i__animation-container" className={styles["who-am-i__animation-container"]}></div>
              <div className={styles["who-am-i__activity-container"]}><span className={styles["who-am-i__activity-icon"]}></span><span className={styles["who-am-i__activity-text"]}>Currently working on</span><strong className={styles["who-am-i__activity-name"]}>Portfolio</strong></div>
            </div>
          </main>
          <div className={styles["quotation__container"]}>
            <p className={styles["quotation__paragraph"]}>I know that I know nothing,<br/>but others do not even know that</p>
            <p className={styles["quotation__sign"]}>- Socrates</p>
          </div>
          <section className={styles["projects__section-container"]}>
            <div className={styles["projects__heading-container"]}>
              <div className={styles["projects__heading-line-container"]}>
                <h2 className={styles["projects__heading"]}><span className={`${styles["projects__heading-cage"]} primary-color`}>#</span>projects</h2>
                <div className={styles["projects__heading-line line"]}></div>
              </div>
              <Link href="#" className={styles["projects__heading-link"]}>View all ~~&gt;</Link>
            </div>
            <div className={styles["projects__projects-container"]}>
              <article className={styles["projects__project-container"]}>
                <div className={styles["projects__project-image-container"]}>
                  <Image className={styles["projects__project-image"]} width={200} height={200} src="/assets/images/article-example-photo.jpg" alt=""/>
                </div>
                <p className={styles["projects__project-technologies-paragraph"]}>HTML SCSS Python Flask</p>
                <div className={styles["projects__project-about-container"]}>
                  <h3 className={styles["projects__project-about-heading"]}>ChertNodes</h3>
                  <p className={styles["projects__project-about-paragraph"]}>Minecraft servers hosting </p>
                  <div className={styles["projects__project-about-buttons-container"]}>
                    <button className={`${styles["projects__project-about-button"]} button`}>Live &lt;~&gt;</button>
                    <button className={`${styles["projects__project-about-button"]} button`}>Cached &gt;=</button>
                  </div>
                </div>
              </article>
              <article className={styles["projects__project-container"]}>
                <div className={styles["projects__project-image-container"]}>
                  <Image className={styles["projects__project-image"]} width={200} height={200} src="/assets/images/article-example-photo.jpg" alt=""/>
                </div>
                <p className={styles["projects__project-technologies-paragraph"]}>HTML SCSS Python Flask</p>
                <div className={styles["projects__project-about-container"]}>
                  <h3 className={styles["projects__project-about-heading"]}>ChertNodes</h3>
                  <p className={styles["projects__project-about-paragraph"]}>Minecraft servers hosting </p>
                  <div className={styles["projects__project-about-buttons-container"]}>
                    <button className={`${styles["projects__project-about-button"]} button`}>Live &lt;~&gt;</button>
                    <button className={`${styles["projects__project-about-button"]} button`}>Cached &gt;=</button>
                  </div>
                </div>
              </article>
              <article className={styles["projects__project-container"]}>
                <div className={styles["projects__project-image-container"]}>
                  <Image className={styles["projects__project-image"]} width={200} height={200} src="/assets/images/article-example-photo.jpg" alt=""/>
                </div>
                <p className={styles["projects__project-technologies-paragraph"]}>HTML SCSS Python Flask</p>
                <div className={styles["projects__project-about-container"]}>
                  <h3 className={styles["projects__project-about-heading"]}>ChertNodes</h3>
                  <p className={styles["projects__project-about-paragraph"]}>Minecraft servers hosting </p>
                  <div className={styles["projects__project-about-buttons-container"]}>
                    <button className={`${styles["projects__project-about-button"]} button`}>Live &lt;~&gt;</button>
                    <button className={`${styles["projects__project-about-button"]} button`}>Cached &gt;=</button>
                  </div>
                </div>
              </article>
            
              
            </div>
          </section>
          <section className={styles["skills__section-container"]}>
            <div className={styles["skills__heading-container"]}>
              <h2 className={styles["skills__heading"]}><span className={`${styles["skills__heading-cage"]} primary-color`}>#</span>skills</h2>
              <div className={styles["skills__heading-line line"]}></div>
            </div>
            <div className={styles["skills__container"]}>
              <div className={styles["skill__container"]}>
                <h3 className={styles["skill__heading"]}>Languages</h3>
                <p className={styles["skill__description"]}>Python C# TypeScript JavaScript Bash</p>
              </div>
              <div className={styles["skill__container"]}>
                <h3 className={styles["skill__heading"]}>Databases</h3>
                <p className={styles["skill__description"]}>MySQL PostgreSQL SQLite</p>
              </div>
              <div className={styles["skill__container"]}>
                <h3 className={styles["skill__heading"]}>Tools</h3>
                <p className={styles["skill__description"]}>Linux SSH Git Webpack Gulp Vite Figma Docker</p>
              </div>
              <div className={styles["skill__container"]}>
                <h3 className={styles["skill__heading"]}>Frameworks</h3>
                <p className={styles["skill__description"]}>Django .Net React.js Scrapy</p>
              </div>
              <div className={styles["skill__container"]}>
                <h3 className={styles["skill__heading"]}>Other</h3>
                <p className={styles["skill__description"]}>HTML CSS SCSS LESS Rest</p>
              </div>
            </div>
          </section>
          <section className={styles["about-me__section-container"]}>
            <div className={styles["about-me__heading-line-container"]}>
              <h2 className={styles["about-me__heading"]}><span className={`${styles["about-me__heading-cage"]} primary-color`}>#</span>about-me</h2>
              <div className={`${styles["about-me__heading-line"]} line`}></div>
            </div>
            <div className={styles["about-me__text-photo-container"]}>
              <div className={styles["about-me__text-container"]}>
                <p className={styles["about-me__text"]}>Hello, i’m Elias!</p>
                <p className={styles["about-me__text"]}>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</p>
                <p className={styles["about-me__text"]}>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
                <button className={`${styles["about-me__button"]} button`}>Read more -&gt;</button>
              </div>
              <div id="about-me__animation-container" className={styles["about-me__animation-container"]}></div>
            </div>
          </section>
          <section className={styles["contacts__section-container"]}>
            <div className={styles["contacts__heading-line-container"]}>
              <h2 className={styles["contacts__heading"]}><span className={`${styles["contacts__heading-cage"]} primary-color`}>#</span>contacts</h2>
              <div className={`${styles["contacts__heading-line"]} line`}></div>
            </div>
            <div className={styles["contacts__text-contacts-container"]}>
              <div className={styles["contacts__text-container"]}>
                <p className={styles["contacts__text"]}>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
              </div>
              <div className={styles["contacts__contacts-container"]}><h3 className={styles["contacts__contacts-heading"]}>Contact me here</h3>
                <a href="tel:87770164685" className={styles["contacts__contacts-link"]} target="_blank" rel="noopener noreferrer">
                  <p className={styles["contacts__contacts-contact"]}>
                    <Image src="/assets/images/phone-icon.png" width={200} height={200} alt="Discord Icon" className={styles["contacts__contacts-link-image"]}/>
                    <span className={styles["contacts__contacts-contact-text"]}>Phone</span>
                  </p>
                </a>
                <a href="https://telegram.me/dvaranir" className={styles["contacts__contacts-link"]} target="_blank" rel="noopener noreferrer">
                  <p className={styles["contacts__contacts-contact"]}>
                    <Image src="/assets/images/logo-telegram.png" width={200} height={200} alt="Telegram Icon" className={styles["contacts__contacts-link-image"]}/>
                    <span className={styles["contacts__contacts-contact-text"]}>Telegram</span>
                  </p>
                </a>
                <a href="https://api.whatsapp.com/send?phone=77770164685" className={styles["contacts__contacts-link"]} target="_blank" rel="noopener noreferrer">
                  <p className={styles["contacts__contacts-contact"]}>
                    <Image src="/assets/images/logo-whatsapp.png" width={200} height={200} alt="WhatsApp Icon" className={styles["contacts__contacts-link-image"]}/>
                    <span className={styles["contacts__contacts-contact-text"]}>WhatsApp</span>
                  </p>
                </a>
                <a href="https://www.linkedin.com/in/yuriy-plakhin/" className={styles["contacts__contacts-link"]} target="_blank" rel="noopener noreferrer">
                  <p className={styles["contacts__contacts-contact"]}>
                    <Image src="/assets/images/logo-linkedin-black.png" width={200} height={200} alt="Linkedin Icon" className={styles["contacts__contacts-link-image"]}/>
                    <span className={styles["contacts__contacts-contact-text"]}>Linkedin</span>
                  </p>
                  
                </a>
              </div>
            </div>
          </section>
          <footer className="footer__container">
            <div className="footer__logo-media-container">
              <div className="footer__logo-about_me-container">
                <div className="footer__logo-email-container">
                  <div className="footer__logo-container">
                    <Image className="footer__logo-image small-logo-image" width={200} height={200} src="/assets/images/logo-terminal.png" alt=''/>
                    <h3 className="footer__logo-title">Yuriy</h3>
                  </div>
                  <span className="footer__email">yuriy.plakhin@gmail.com</span>
                </div>
                <p className="footer__about_me">Fullstack developer based in Kazakhstan</p>
              </div>
              <div className="footer__media-container">
                <h3 className="footer__media-heading">Contacts</h3>
                <ul className="footer__media-links">
                  <li className="footer__media-link-container">
                    <a href="tel:87770164685" className="contacts__contacts-link" target="_blank" rel="noopener noreferrer">
                      <p className="contacts__contacts-contact">
                        <Image src="/assets/images/phone-icon.png" width={200} height={200} alt="Phone Icon" className="footer__media-image"/>
                      </p>
                    </a>
                  </li>
                  <li className="footer__media-link-container">
                    <a href="https://telegram.me/dvaranir" className="footer__media-link" target="_blank" rel="noopener noreferrer">
                      <Image src="/assets/images/logo-telegram.png" width={200} height={200} alt="Telegram Icon" className="footer__media-image"/>
                    </a>
                  </li>
                  <li className="footer__media-link-container">
                    <a href="https://api.whatsapp.com/send?phone=77770164685" className="footer__media-link" target="_blank" rel="noopener noreferrer">
                      <Image src="/assets/images/logo-whatsapp.png" width={200} height={200} alt="WhatsApp Icon" className="footer__media-image"/>
                    </a>
                  </li>
                  <li className="footer__media-link-container">
                    <a href="https://www.linkedin.com/in/yuriy-plakhin/" className="footer__media-link" target="_blank" rel="noopener noreferrer">
                      <Image src="/assets/images/logo-linkedin-black.png" width={200} height={200} alt="Linkedin Icon" className="footer__media-image"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="footer__copyright">© Copyright 2022. Made by Yuriy</p>
          </footer>
        </div>
        </div>

          
      </main>
    </>
  )
}
