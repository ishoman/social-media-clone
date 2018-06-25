import React from "react";
import PostImage from "./PostImage";
import PostName from "./PostName";
import PostContent from "./PostContent";
import PostFeedback from "./PostFeedback";

function Post(){
  const postStyles = {
    listStyle: 'none',
  }
  return (
    <div>
      <PostImage/>
      <div>
        <PostName/>
        <PostContent/>
        <PostFeedback/>
      </div>
    </div>
  );
}

export default Post;
