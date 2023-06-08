import AboutMe from '@/components/pages-parts/home/about-me/AboutMe'
import WhoAmI from '@/components/pages-parts/home/who-am-i/WhoAmI'
import Quotation from '@/components/pages-parts/home/quotation/Quotation'

import Projects from '@/components/pages-parts/home/projects/Projects'
import Skills from '@/components/pages-parts/home/skills/Skills'
import Contacts from '@/components/pages-parts/home/contacts/Contacts'

import { IProjectProps } from '@/components/pages-parts/home/projects/project.interfaces'
import { ISkillProps } from '@/components/pages-parts/home/skills/skill.interfaces'
import { ISquareContactProps } from '@/components/global-parts/square-contacts/square-contacts.interfaces'

import axios from "axios";

export default function Home() {

  const dummyProjects: IProjectProps[] = [
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

  const dummySkills: ISkillProps[] = [
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

  const dummyContacts: ISquareContactProps[] = [
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
  async function test() {
    // console.log(process.env.NEXT_PUBLIC_API_URL);
    
    // const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/authenticate`, {email: 'test123@gmail.com', password: '1234'})
    // console.log(response.data.token);

    // const credentialDetails = {
    //   email: 'test123@gmail.com',
    //   password: '1234',
    // };

    // const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/authenticate", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(credentialDetails),
    // });
    // const user = await resp.json();
    // console.log(user.token);
    
  } test()

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
