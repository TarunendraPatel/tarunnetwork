import React from "react";
import Home from "../../img/home.png";
import { UilSearch } from "@iconscout/react-unicons";
import "./rightside.css";
const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="navIcons">
        <img src={Home} alt="home" />
        <button className="button">Logout</button>
      </div>
      <div className="Search">
        <input type="text" placeholder="Search friends" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
