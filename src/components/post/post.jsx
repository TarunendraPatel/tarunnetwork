import React from "react";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import "./post.css";
const Post = ({ data }) => {
  return (
    <div className="Post">
      <img src={data.img} alt="postdata" />

      <div className="postReact">
        <img src={data.liked ? Heart : NotLike} alt="like" />
        <img src={Comment} alt="comment" />
        <img src={Share} alt="share" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {data.likes} likes
      </span>

      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
