import React, { useState } from 'react'
import Table from '@/components/global/admin/content/read/table/Table'
import SectionLayout from '@/components/global/admin/section/Layout'

type Props = {}

export default function SmallProjects({}: Props) {
  const [smallProjects, setSmallProjects] = useState([]);
  const name = "small-projects"

  return (
    <SectionLayout
      heading={name}
      content={<Table propsArray={smallProjects} />}
      request={name}
      entitySetState={setSmallProjects}
    />
  )
}
