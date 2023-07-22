import React, { useState } from "react";
import CrudFabric from "@/components/global/admin/content/CrudFabric";
import SectionLayout from "@/components/global/admin/section/Layout";
import { IDynamicProps, ECrudPageType } from "@/components/global/admin/content/dynamic.interfaces";

export default function AddProject() {
  let dummyField: IDynamicProps = {
      id: '4',
      technologies: "HTML SCSS Python Flask",
      title: "ChertNodes",
      description: "Minecraft servers hosting",
      gitUrl: "",
      liveUrl: "",
  }
  const [project, setProject] = useState<IDynamicProps>(dummyField);
  const name = "projects"

  return (
    <SectionLayout
      heading={name}
      content={<CrudFabric entities={project} pageType={ECrudPageType.Add} />}
      request={name}
      entitySetState={setProject}
    />
  );
}