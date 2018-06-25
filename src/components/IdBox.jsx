import React from "react";
import IdStats from "./IdStats";
import IdName from "./IdName";
import IdPicture from "./IdPicture"

function IdBox(props) {
  const idBoxStyles = {
    height: 250,
    display: "flex",
    flexDirection: "column",
    border: "2px solid gray",
    marginBottom: 5
  }

  const background = {
    height: "60%",
    width: "100%",
    backgroundColor: "blue"
  }

  const imageDiv = {
    marginTop: "-15%",
    paddingLeft: 10,
    display: "flex",
    alignItems: "flex-end"
  }


  return (
    <div style={idBoxStyles}>
      <div style={background}>
      </div>
      <div style={imageDiv}>
        <IdPicture/>
        <IdName/>
      </div>
      <div>
        <IdStats/>
      </div>
    </div>
  );
}

export default IdBox;
