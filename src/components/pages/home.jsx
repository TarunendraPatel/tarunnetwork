import React from "react";
import ProfileSide from "../profileside/profileside";
import PostSide from "../postside/postside";
import RightSide from "../rightside/rightside";
import "./home.css";

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
