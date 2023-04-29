import React from 'react'

import styles from '@/styles/components/DefaultButton.module.scss'
import Link from 'next/link'

import { EmptyIfUndefined } from '@/scripts/functions'

type Props = {
  content: string,
  href?: string,
  link?: boolean,
  onClick?: () => void,
  additionalClass?: string,
}

export default function DefaultButton({ content, href, onClick, additionalClass, link=false }: Props) {
  additionalClass = EmptyIfUndefined(additionalClass)

  return (
    link
    ? <a className={`${styles["button"]} ${additionalClass}`}
         href={href}
         onClick={onClick}>{content}</a>
    : <Link href={href ? href : '#'}
            className={`${styles["button"]}  ${additionalClass}`}
            onClick={onClick}>{content}</Link>
  )
}

