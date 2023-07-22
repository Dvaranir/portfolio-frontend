import React, { useState } from "react";
import Table from "@/components/global/admin/content/read/table/Table";
import SectionLayout from "@/components/global/admin/section/Layout";

type Props = {};

export default function Skills({}: Props) {
  const [skills, setSkills] = useState([]);
  const name = "skills"
  
  return (
    <SectionLayout
      heading={name}
      content={<Table propsArray={skills} />}
      request={name}
      entitySetState={setSkills}
    />
  );
}
