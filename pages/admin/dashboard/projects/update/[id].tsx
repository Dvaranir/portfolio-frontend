import React, { useState } from "react";
import CrudFabric from "@/components/global/admin/content/CrudFabric";
import SectionLayout from "@/components/global/admin/section/Layout";
import { IDynamicProps } from "@/components/global/admin/content/dynamic.interfaces";
import { ECrudPageType } from "@/components/global/admin/content/dynamic.interfaces";
import { useRouter } from "next/router";

export default function UpdateProject() {
  const { id } = useRouter().query;
  
  let dummyField: IDynamicProps = {
    id: "4",
    technologies: "HTML SCSS Python Flask",
    title: "ChertNodes",
    description: "Minecraft servers hosting",
    gitUrl: "",
    liveUrl: "",
    image: "https://v1.popcornnews.ru/k2/news/1200/upload/news/133399768034.jpg",
  };

  const [project, setProject] = useState<IDynamicProps>(dummyField);
  const name = "projects";

  return (
    <SectionLayout
      heading={name}
      content={<CrudFabric entities={project} pageType={ECrudPageType.Update} />}
      request={name}
      entitySetState={setProject}
    />
  );
}
