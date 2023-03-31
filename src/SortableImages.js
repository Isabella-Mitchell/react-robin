import React from "react";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import Image from "./Image";

export function SortableImages(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    display: "inline-block",
    transform: CSS.Transform.toString(transform),
    transition,
  };

  console.log("I'm creating the sortable images we");

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {/* Make anything in here */}
      {/* <Image /> */}
      <img src={props.id} alt="puzzle-piece"></img>
    </div>
  );
}
