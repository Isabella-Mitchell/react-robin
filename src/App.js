import React, { useState } from "react";
import styled from "@emotion/styled";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSwappingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
// import { SortableImages } from "./SortableImages";
import { createCutUpImage } from "./cutUpImage";

function App() {
  const [birds, setBirds] = useState([
    "Blackbird",
    "Goldfinch",
    "Cormorant",
    "Magpie",
    "Bluetit",
  ]);

  const cutUpImageArray = createCutUpImage();

  const Container = styled.div`
    text-align: center;
  `;

  return (
    <Container>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <h1>Drag and Drop Birds</h1>
        <SortableContext items={birds} strategy={rectSwappingStrategy}>
          {birds.map((bird) => (
            <SortableItem key={bird} id={bird}></SortableItem>
          ))}
        </SortableContext>
      </DndContext>
      {/* <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <h1>Drag and Drop Birds</h1>
        <SortableContext items={images} strategy={rectSwappingStrategy}>
          <SortableImages key={images} id={images}></SortableImages>
        </SortableContext>
      </DndContext> */}
    </Container>
  );

  function handleDragEnd(event) {
    console.log("Drag end called");
    const { active, over } = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER: " + over.id);

    if (active.id !== over.id) {
      setBirds((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        console.log(arrayMove(items, activeIndex, overIndex));

        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }
}

export default App;
