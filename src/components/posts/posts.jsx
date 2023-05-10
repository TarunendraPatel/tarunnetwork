import React from "react";
import { PostsData } from "../../Data/postsdata";
import Post from "../post/post";
import "./posts.css";
const Posts = () => {
  return (
    <div className="Posts">
      {PostsData.map((post, id) => {
        return <Post data={post} id={id} />;
      })}
    </div>
  );
};

export default Posts;
