import React from 'react'

import TopDescription from '@/components/global-parts/TopDescription'
import { ITopDescriptionProps } from '@/components/global-parts/top-description.interfaces'

import Apps from '@/components/pages-parts/projects/apps/Apps'
import { IAppProps } from '@/components/pages-parts/projects/apps/app.interfaces'

import SmallApps from '@/components/pages-parts/projects/small-apps/SmallApps'
import { ISmallAppProps } from '@/components/pages-parts/projects/small-apps/small-app.intefaces'

export default function Projects() {

    const dummyCompletedAppsProps: IAppProps[] = [
        {
            imageSrc: "/assets/images/article-example-photo.jpg",
            imageAlt: "",
            technologies: "HTML SCSS Python Flask",
            heading: "ChertNodes",
            description: "Minecraft servers hosting",
            liveLink: "#",
            githubLink: "#",
        },
        {
            imageSrc: "/assets/images/article-example-photo.jpg",
            imageAlt: "",
            technologies: "HTML SCSS Python Flask",
            heading: "ChertNodes",
            description: "Minecraft servers hosting",
            liveLink: "#",
            githubLink: "#",
        },
        {
            imageSrc: "/assets/images/article-example-photo.jpg",
            imageAlt: "",
            technologies: "HTML SCSS Python Flask",
            heading: "ChertNodes",
            description: "Minecraft servers hosting",
            liveLink: "#",
            githubLink: "#",
        },
        {
            imageSrc: "/assets/images/article-example-photo.jpg",
            imageAlt: "",
            technologies: "HTML SCSS Python Flask",
            heading: "ChertNodes",
            description: "Minecraft servers hosting",
            liveLink: "#",
            githubLink: "#",
        },
    ]

    const dummySmallAppsProps: ISmallAppProps[] = [
        {
            technologies: "HTML SCSS Python Flask",
            heading: "ChertNodes",
            description: "Minecraft servers hosting",
            liveLink: "#",
            githubLink: "#",
        },
        {
            technologies: "HTML SCSS Python Flask",
            heading: "ChertNodes",
            description: "Minecraft servers hosting",
            liveLink: "#",
            githubLink: "#",
        },
        {
            technologies: "HTML SCSS Python Flask",
            heading: "ChertNodes",
            description: "Minecraft servers hosting",
            liveLink: "#",
            githubLink: "#",
        },
        {
            technologies: "HTML SCSS Python Flask",
            heading: "ChertNodes",
            description: "Minecraft servers hosting",
            liveLink: "#",
            githubLink: "#",
        },
    ]


  return (
    <>
    <TopDescription heading='projects' paragraph='List of my projects' />
    <Apps completedAppsList={dummyCompletedAppsProps} />
    <SmallApps smallAppsList={dummySmallAppsProps} />
    
</>
  )
}