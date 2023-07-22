import React from "react";
import styles from "@/styles/pages/admin/section/heading.module.scss";

type Props = {
  heading: string;
};

export default function Heading({ heading }: Props) {
  return (
    <h1 className={styles["section-heading"]}>
      <span className="primary-color">#</span>
      {heading}
    </h1>
  );
}
