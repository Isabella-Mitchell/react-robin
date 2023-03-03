import React from "react";
import BluetitOutline from "./images/bt-outline.png";
import Beeb from "./images/beeb-building.jpeg";
import BluetitFinal from "./images/bt-final.png";

function MyImage() {
  const imageMap = {
    Bluetit: BluetitOutline,
    Beeb: Beeb,
    BluetitFinal: BluetitFinal,
  };

  var image = new Image();
  image.onload = cutImageUp;
  image.src = imageMap["BluetitFinal"];

  function cutImageUp() {
    let numColsToCut = 5;
    let numRowsToCut = 5;
    let widthOfOnePiece = 110;
    let heightOfOnePiece = 110;

    var imagePieces = [];
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

    // imagePieces now contains data urls of all the pieces of the image

    var container = document.getElementById("myDiv");
    for (let count = 0; count < imagePieces.length; count++) {
      var oImg = document.createElement("img");
      oImg.src = imagePieces[count];
      container.appendChild(oImg);
    }
  }
  return (
    <div>
      <h1>Bird Picture Game</h1>
      <div id="myDiv"></div>
    </div>
  );
}

export default MyImage;
