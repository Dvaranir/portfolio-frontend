import React from "react";
import AsideButton from "./AsideButton";
import { IAsideButtonProps } from "./aside-button.interfaces";
import { faBrain, faBook, faFile } from "@fortawesome/free-solid-svg-icons";

import styles from "./Aside.module.scss";

type Props = {};

function Aside({}: Props) {
  const asideButtons: IAsideButtonProps[] = [
    { href: "/admin/dashboard/projects", text: "Projects", icon: faBook },
    { href: "/admin/dashboard/small-projects", text: "Small-Projects", icon: faFile },
    { href: "/admin/dashboard/skills", text: "Skills", icon: faBrain },
  ];

  const renderButtons = () =>
    asideButtons.map((props, i) => <AsideButton key={i} {...props} />);

  return (
    <aside className={styles.container}>
      <div className={styles["header-container"]}>
        <img
          className={styles["header-logo"]}
          src="https://avatars.githubusercontent.com/u/87989392?v=4"
          alt="Logo"
        />
        <p className={styles["header-text"]}>Dashboard</p>
      </div>
      <div className={styles["buttons-container"]}>
        {renderButtons()}
      </div>
    </aside>
  );
}

export default Aside;
