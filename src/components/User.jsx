import React from "react";
import UserName from "./UserName";
import UserImage from "./UserImage";
import UserButton from "./UserButton";

function User(){
  const userStyles = {
    display: "flex"
  }

  const nameButtonStyles = {
    marginLeft: 20
  }

  return(
      <div style={userStyles}>
        <div>
          <UserImage/>
        </div>
        <div style={nameButtonStyles}>
          <UserName/>
          <UserButton/>
        </div>
      </div>

  );
}

export default User;
