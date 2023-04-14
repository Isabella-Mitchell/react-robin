// import React from "react";
import BluetitOutline from "../../images/bt-outline.png";
import BluetitFinal from "../../images/bt-final.png";

// export const getCutUpImage = () => {
//   return new Promise((resolve) => {
//     resolve(createCutUpImage);
//   });
// };

export function getCutUpImage() {
  console.log("I'm cutting up your image");
  const imageMap = {
    Bluetit: BluetitOutline,
    BluetitFinal: BluetitFinal,
  };

  var image = new Image();
  image.onload = cutImageUp;
  image.src = imageMap["BluetitFinal"];
  var imagePieces = [];

  function cutImageUp() {
    let numColsToCut = 5;
    let numRowsToCut = 1;
    let widthOfOnePiece = 110;
    let heightOfOnePiece = 550;

    for (var x = 0; x < numColsToCut; ++x) {
      for (var y = 0; y < numRowsToCut; ++y) {
        var canvas = document.createElement("canvas");
        canvas.width = widthOfOnePiece;
        canvas.height = heightOfOnePiece;
        var context = canvas.getContext("2d");
        context.drawImage(
          image,
          x * widthOfOnePiece,
          y * heightOfOnePiece,
          widthOfOnePiece,
          heightOfOnePiece,
          0,
          0,
          canvas.width,
          canvas.height
        );
        imagePieces.push(canvas.toDataURL());
      }
    }
  }
  console.log("the image is cut up");
  return imagePieces;
}
