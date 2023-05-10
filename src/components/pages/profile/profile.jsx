import React from "react";
import Profileleft from "../../profileleft/profileleft";
import ProfileCard from "../../profilecard/profilecard";
import RightSide from "../../rightside/rightside";
import PostSide from "../../postside/postside";
import "./profile.css";

const Profile = ({ setShowProfile }) => {
  return (
    <div className="Profile">
      <Profileleft />
      <div className="profile-center" onClick={() => setShowProfile(false)}>
        <ProfileCard />

        <PostSide />
      </div>
      <RightSide />
    </div>
  );
};

export default Profile;
