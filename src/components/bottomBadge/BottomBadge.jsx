import React from "react";
import { banner5, logo } from "../../assets";
import "../../styles/bottomBadge/bottomBadge.css";
const BottomBadge = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner5})`,
      }}
      className="bottomBadge"
    >
      <div className="bottomBadge_caption">
        <h1>
          {" "}
          <img className="bottomBadge_logo" src={logo} alt="logo" />
          FRIENDS INDEED FOUNDATION
        </h1>
        <img className="bottomBadge_logo" src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default BottomBadge;
