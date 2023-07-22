import React, { ReactComponentElement, ReactNode, useState } from "react";
import Container from "@/components/global/admin/section/Container";
import Heading from "@/components/global/admin/section/Heading";
import Controls from "@/components/global/admin/section/Controls";
import axios, { AxiosResponse } from "axios";
import { ISectionLayoutProps } from "./section.interfaces";

export default function SectionLayout({heading, content }: ISectionLayoutProps) {

  return (
    <Container>
      <Heading heading={heading} />
      <Controls />
      {content}
    </Container>
  );
}