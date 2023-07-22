import React from "react";
import RowControls from "./RowControls";
import { IDynamicProps } from "../../dynamic.interfaces";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Row(props: IDynamicProps) {
  const keys = Object.keys(props);

  const genImage = (src: string) => <img src={src} />
  const genLink = (href: string) => <a href={href} target="_blank"><FontAwesomeIcon icon={faLink} /></a>

  function pickUpTag(key: string, props: IDynamicProps){
    if (key === 'image') return genImage(props[key].toString())
    else if (key.toLowerCase().includes('url')) return genLink(props[key].toString())
    else return props[key]
  }

  const genFields = () =>
    keys.map((key, i) => (
      <td key={i}>
        {pickUpTag(key, props)}
      </td>
    ));

  return (
    <tr>
      {genFields()}
      <RowControls id={props.id} />
    </tr>
  );
} 
