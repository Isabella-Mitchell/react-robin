// import React from "react";
// import { css } from "@emotion/react";

// function Item(props) {
//   return (
//     <h1
//       css={css`
//         color: hotpink;
//       `}
//     >
//       {props.colour}
//     </h1>
//   );
// }

// function ColourList() {
//   const colours = ["#765739", "yellow", "green"];
//   return (
//     <div>
//       {colours.map((colour) => (
//         <Item key={colour} colour={colour} />
//       ))}
//     </div>
//   );
// }

// export default ColourList;

// import styled from "@emotion/styled";

// const colourMap = {
//   black: "#000000",
//   white: "#FFFFFF",
// };

// function ColourList({ name, colour }) {
//   const Wrapper = styled.div`
//     display: inline-block;
//     padding: 20px;
//     border: 1px solid black;
//     border-radius: 15px;
//     margin: 20px;
//   `;
//   const ColourBox = styled.span`
//     color: ${colour};
//   `;
//   return (
//     <Wrapper>
//       <ul>
//         <li>
//           <ColourBox key={colourMap[name]} colour={colourMap[name]} />
//         </li>
//       </ul>
//     </Wrapper>
//   );
// }

// export default ColourList;

import React from "react";

function ColourBox(props) {
  return (
    <div
      style={{
        backgroundColor: props.colour,
        width: "100px",
        height: "100px",
      }}
    />
  );
}

function ColourList() {
  const colours = ["#765739", "yellow", "green"];
  return (
    <div>
      {colours.map((colour) => (
        <ColourBox key={colour} colour={colour} />
      ))}
    </div>
  );
}

export default ColourList;
