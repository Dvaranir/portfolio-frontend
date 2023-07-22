import React from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { RowControlsProps } from "./row-controls.interfaces";

export default function RowControls({ id }: RowControlsProps) {
  const router = useRouter();

  const handleUpdate = () => router.push(`${router.pathname}/update/${id}`);
  const handleDelete = () => null

  return (
    <td>
      <FontAwesomeIcon onClick={handleUpdate} icon={faPenToSquare} />
      <FontAwesomeIcon onClick={handleDelete} icon={faTrashCan} />
    </td>
  );
}
