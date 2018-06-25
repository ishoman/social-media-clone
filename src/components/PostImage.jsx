import React from "react";


function PostImage(){
  const postImageStyles = {
    width: '100px',
  }
  return(
    <div>
      <img style={postImageStyles} src="https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"></img>
    </div>
  );
}

export default PostImage;
