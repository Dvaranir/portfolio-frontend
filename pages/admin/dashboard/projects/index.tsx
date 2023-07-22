import React, { useState } from "react";
import Table from "@/components/global/admin/content/read/table/Table";
import SectionLayout from "@/components/global/admin/section/Layout";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const name = "projects"

  return (
    <SectionLayout
      heading={name}
      content={<Table {...projects} />}
      request={name}
      entitySetState={setProjects}
    />
  );
}
