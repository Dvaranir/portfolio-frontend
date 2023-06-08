import React from 'react'

import DefaultButton from '@/components/global-parts/DefaultButton'
import { NoComponentIfUndefined } from '@/scripts/functions'
import { IAppLinksProps } from './app.interfaces'

function AppLinks({liveLink, githubLink}: IAppLinksProps) {
  return (
    <>
        {NoComponentIfUndefined(liveLink, <DefaultButton href={liveLink} content='Live &lt;~&gt;' />)}
        {NoComponentIfUndefined(githubLink, <DefaultButton href={githubLink} content='Git &gt;=' />)}
    </>
  )
}

export default AppLinks