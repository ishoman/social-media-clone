import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";

function Feed(){
  const feedStyles = {
    display: "flex",
    flexDirection: "column",
    border: "2px solid gray",
    margin: "0px 10px" 
  }

  return (
    <div style={feedStyles}>
      <NewPostForm/>
      <PostList/>
    </div>
  )
}

export default Feed;
