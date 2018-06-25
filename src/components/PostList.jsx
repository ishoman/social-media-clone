import React from "react";
import Post from "./Post";
import { globalStyles } from "./App"

function PostList(){

  return(
    <div>
      <ul style={globalStyles}>
        <li><Post/></li>
        <li><Post/></li>
        <li><Post/></li>
        <li><Post/></li>
      </ul>
    </div>
  );
}

export default PostList;
