import React from "react";
import DefaultButton from "@/components/ui/default-button/DefaultButton";
import { useRouter } from "next/router";

import styles from "@/styles/pages/admin/section/controls.module.scss";

export default function Controls() {
  const router = useRouter()

  const goToAddPage = () => router.push(`${router.route}/add`)

  return (
    <div className={styles["controls-container"]}>
      {!router.route.includes('/add') && <DefaultButton content="Add" onClick={goToAddPage} />}
    </div>
  );
}
