import React from "react";
import IdStats from "./IdStats";
import IdName from "./IdName";
import IdPicture from "./IdPicture"

function IdBox(props) {
  return (
    <div>
      <IdPicture/>
      <IdName/>
      <IdStats/>
    </div>
  );
}

export default IdBox;
