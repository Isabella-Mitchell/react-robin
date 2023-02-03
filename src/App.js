import { useState } from "react";
import BirdCard from "./BirdCard";
import styled from "@emotion/styled";

function getRandomBird() {
  const birds = ["Blackbird", "Goldfinch", "Cormorant", "Magpie", "Bluetit"];

  return birds[Math.floor(Math.random() * birds.length)];
}

function App() {
  const [birds, setBirds] = useState([]);

  const handleClick = () => {
    setBirds([...birds, getRandomBird()]);
  };

  const renderedBirds = birds.map((bird, index) => {
    return <BirdCard name={bird} key={index} />;
  });

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
      <Container>
        <Button onClick={handleClick}>Add Bird</Button>
      </Container>
      <Container>{renderedBirds}</Container>
    </div>
  );
}

export default App;
