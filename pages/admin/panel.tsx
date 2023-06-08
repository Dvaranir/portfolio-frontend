import React from 'react'
import { useSession } from 'next-auth/react'

type Props = {}

export default function panel({}: Props) {
  const { data, status } = useSession()

  return (
    <div>panel</div>
  )
}
