// import { useState } from "react";
// import BirdCard from "./reusableComponents/BirdCard";
import styled from "@emotion/styled";
import MoveImageTilesWrapper from "./MoveImageTilesWrapper";

// function getRandomBird() {
//   const birds = ["Blackbird", "Goldfinch", "Cormorant", "Magpie", "Bluetit"];

//   return birds[Math.floor(Math.random() * birds.length)];
// }

// function getBluetit() {
//   return "bluetit";
// }

function RenderDragDropGame() {
  // const [birds, setBirds] = useState([]);

  // const handleClick = () => {
  //   setBirds([...birds, getBluetit()]);
  // };

  // change this so that it render bird game (only one?)
  // const renderedBirds => {
  //   return <BirdCard name={bird} key={index} />;
  // });

  const renderDragDrop = () => {
    return <MoveImageTilesWrapper />;
  };

  const Container = styled.div`
    text-align: center;
  `;

  const Button = styled.button`
    display: inline-block;
    padding: 20px;
    border: 1px solid black;
    border-radius: 15px;
    margin: 20px;
  `;
  return (
    <div>
      <h1>Bird Card Generator</h1>
      <Container>
        <Button onClick={renderDragDrop()}>Add Bird</Button>
      </Container>
      <MoveImageTilesWrapper />
    </div>
  );
}

export default RenderDragDropGame;
