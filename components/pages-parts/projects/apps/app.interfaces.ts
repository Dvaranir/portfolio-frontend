export interface IAppCoreProps {
  technologies: string,
  heading: string,
  description: string,
}

export interface IAppImagesProps{
  imageSrc: string,
  imageAlt: string,
}

export interface IAppLinksProps {
  liveLink?: string,
  githubLink?: string,
}

export interface IAppProps extends IAppCoreProps, IAppLinksProps, IAppImagesProps {}
    

