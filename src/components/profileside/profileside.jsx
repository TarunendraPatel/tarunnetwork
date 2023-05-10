import React from "react";
import "./profileside.css";
import Logo from "../logo/logo";
import ProfileCard from "../profilecard/profilecard";
import FollowersCard from "../followerscard/followerscard";

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <Logo />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;
