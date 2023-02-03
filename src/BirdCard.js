import styled from "@emotion/styled";
import BlackbirdOutline from "./images/bb-outline.png";
import GoldfinchOutline from "./images/gf-outline.png";
import CormorantOutline from "./images/cm-outline.png";
import MagpieOutline from "./images/mp-outline.png";
import BluetitOutline from "./images/bt-outline.png";

const imageMap = {
  Blackbird: BlackbirdOutline,
  Goldfinch: GoldfinchOutline,
  Cormorant: CormorantOutline,
  Magpie: MagpieOutline,
  Bluetit: BluetitOutline,
};

function BirdCard({ name, image }) {
  const Wrapper = styled.div`
    display: inline-block;
    padding: 20px;
    border: 1px solid black;
    border-radius: 15px;
    margin: 20px;
  `;
  const Image = styled.img`
    width: 200px;
  `;
  const Title = styled.h2`
    text-align: center;
    font-family: sans-serif;
  `;
  return (
    <Wrapper>
      <Title>{name}</Title>
      <Image src={imageMap[name]} alt="bird" />
    </Wrapper>
  );
}

export default BirdCard;
