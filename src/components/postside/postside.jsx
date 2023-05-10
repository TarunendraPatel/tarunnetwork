import React from "react";
import "./postside.css";
import PostShare from "../postshare/postshare";
import Posts from "../posts/posts";
const PostSide = () => {
  return (
    <div className="PostSide">
      <PostShare />
      <Posts />
    </div>
  );
};

export default PostSide;
