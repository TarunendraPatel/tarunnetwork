import React from "react";
import Logo from "../logo/logo";
import FollowersCard from "../followerscard/followerscard";
import InfoCard from "../infocard/infocard";

const Profileleft = () => {
  return (
    <div className="ProfileSide">
      <Logo />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default Profileleft;
