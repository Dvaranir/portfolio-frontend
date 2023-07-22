import Link from "next/link";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IAsideButtonProps } from "./aside-button.interfaces";

import styles from "./Aside-button.module.scss";

const defaultStyle = { fontSize: 20 };

function AsideButton({
  href,
  text,
  icon,
  style = defaultStyle,
}: IAsideButtonProps) {
  return (
    <Link href={href} className={styles["aside-button"]}>
      <div className={styles["icon-container"]}>
        <FontAwesomeIcon icon={icon} {...style} />
      </div>
      <div>{text}</div>
    </Link>
  );
}

export default AsideButton;
