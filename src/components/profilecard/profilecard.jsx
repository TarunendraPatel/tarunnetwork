import React, { useEffect, useState } from "react";
import Cover from "../../img/cover.jpg";
import Profilee from "../../img/profileImg.jpg";
import "./profilecard.css";
import Profile from "../pages/profile/profile";

const ProfileCard = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <div className="ProfileCard">
        <div className="ProfileImages">
          <img src={Cover} alt="" />
          <img src={Profilee} alt="" />
        </div>

        <div className="ProfileName">
          <span>Tarunendra Patel</span>
          <span>Senior UI/UX Designer</span>
        </div>

        <div className="followStatus">
          <hr />
          <div>
            <div className="follow">
              <span>6,890</span>
              <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
              <span>1</span>
              <span>Followers</span>
            </div>

            <div className="vl"></div>
            <div className="follow">
              <span>3</span>
              <span>Posts</span>
            </div>
          </div>
          <hr />
        </div>
        <span className="profilesection" onClick={() => setShowProfile(true)}>
          {" "}
          Profile
        </span>
      </div>
      {showProfile && <Profile setShowProfile={setShowProfile} />}
    </>
  );
};

export default ProfileCard;
