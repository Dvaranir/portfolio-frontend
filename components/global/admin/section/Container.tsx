import React, { ReactNode } from "react";
import styles from "@/styles/pages/admin/section/container.module.scss";

type Props = {
  children: ReactNode;
};

export default function Container({ children }: Props) {
  return <div className={styles["section-container"]}>{children}</div>;
}
