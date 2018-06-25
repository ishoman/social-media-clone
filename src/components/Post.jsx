import React from "react";
import PostImage from "./PostImage";
import PostName from "./PostName";
import PostContent from "./PostContent";
import PostFeedback from "./PostFeedback";

function Post(){
  const postStyles = {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    border: "1px solid gray"
  }

  const contentStyles = {
    marginLeft: "5%"
  }


  return (
    <div style={postStyles}>
      <div>
      <PostImage/>
      </div>
      <div style={contentStyles}>
        <PostName/>
        <PostContent/>
        <hr></hr>
        <PostFeedback/>
      </div>
    </div>
  );
}

export default Post;
