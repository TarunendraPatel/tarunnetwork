import React from "react";
import Logoo from "../../img/logo.png";
import "./logo.css";
const Logo = () => {
  return (
    <div className="LogoSearch">
      <img src={Logoo} alt="logoicon" />
      <div className="logobrand">
        <span>TARUN APP</span>
      </div>
    </div>
  );
};

export default Logo;
