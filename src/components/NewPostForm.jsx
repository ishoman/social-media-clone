import React from "react";

function NewPostForm(){
  const newPostFormStyles = {
    display: "flex",
    justifyContent: "center"
  }

  const input = {
    width: "60%",
    marginLeft: 5
  }

  const blockStyles = {
    height: 20,
    width: 20,
    backgroundColor: "red"
  }
  return (
    <div style={newPostFormStyles}>
      <div style={blockStyles}>
      </div>
    <input style={input} type="text" placeholder="What's happening?" required></input>
    </div>
  );
}

export default NewPostForm;
