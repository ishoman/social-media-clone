import React from "react";
import IdStats from "./IdStats";
import IdName from "./IdName";
import IdPicture from "./IdPicture"

function IdBox(props) {
  const idBoxStyles = {
    display: "flex",
    flexDirection: "column"
  }
  return (
    <div style={idBoxStyles}>
      <IdPicture/>
      <IdName/>
      <IdStats/>
    </div>
  );
}

export default IdBox;
