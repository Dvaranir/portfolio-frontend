import AboutMe from '@/components/pages-parts/home/about-me/AboutMe'
import WhoAmI from '@/components/pages-parts/home/who-am-i/WhoAmI'
import Quotation from '@/components/pages-parts/home/quotation/Quotation'

import Projects from '@/components/pages-parts/home/projects/Projects'
import Skills from '@/components/pages-parts/home/skills/Skills'
import Contacts from '@/components/pages-parts/home/contacts/Contacts'

import { ProjectProps } from '@/components/pages-parts/home/projects/project.interfaces'
import { SkillProps } from '@/components/pages-parts/home/skills/skill.interfaces'
import { SquareContactProps } from '@/components/global-parts/square-contacts/square-contacts.interfaces'

export default function Home() {

  const dummyProjects: ProjectProps[] = [
    {
        liveLink: '#',
        gitLink: '#',
        imageSrc: '/assets/images/article-example-photo.jpg',
        technologies: 'HTML SCSS Python Flask',
        projectName: 'ChertNodes',
        projectAbout: 'Minecraft servers hosting'
    },
    {
        liveLink: '#',
        gitLink: '#',
        imageSrc: '/assets/images/article-example-photo.jpg',
        technologies: 'HTML SCSS Python Flask',
        projectName: 'ChertNodes',
        projectAbout: 'Minecraft servers hosting'
    },
    {
        liveLink: '#',
        gitLink: '#',
        imageSrc: '/assets/images/article-example-photo.jpg',
        technologies: 'HTML SCSS Python Flask',
        projectName: 'ChertNodes',
        projectAbout: 'Minecraft servers hosting'
    },
    
  ]

  const dummySkills: SkillProps[] = [
    {
      heading:'Languages',
      technologies:'Python C# TypeScript JavaScript Bash',
    },
    {
      heading:'Databases',
      technologies:'MySQL PostgreSQL SQLite',
    },
    {
      heading:'Tools',
      technologies:'Linux SSH Git Webpack Gulp Vite Figma Docker',
    },
    {
      heading:'Frameworks',
      technologies:'Django .Net React.js Scrapy',
    },
    {
      heading:'Other',
      technologies:'HTML CSS SCSS LESS Rest',
    },
  ]

  const dummyContacts: SquareContactProps[] = [
    {
      href: "tel:87770164685",
      imageSrc: "/assets/images/phone-icon.png",
      imageAlt: "Discord Icon",
      text: "Phone",
    },
    {
      href: "https://telegram.me/dvaranir",
      imageSrc: "/assets/images/logo-telegram.png",
      imageAlt: "Telegram Icon",
      text: "Telegram",
    },
    {
      href: "https://api.whatsapp.com/send?phone=77770164685",
      imageSrc: "/assets/images/logo-whatsapp.png",
      imageAlt: "WhatsApp Icon",
      text: "WhatsApp",
    },
    {
      href: "https://www.linkedin.com/in/yuriy-plakhin/",
      imageSrc: "/assets/images/logo-linkedin-black.png",
      imageAlt: "Linkedin Icon",
      text: "Linkedin",
    },
  ]

  return (
    <>
      <WhoAmI />
      <Quotation />
      <Projects projectsList={dummyProjects} />
      <Skills skillsList={dummySkills} />
      <AboutMe />
      <Contacts squareContactsList={dummyContacts} />
    </>
  )
}
