import React, { useEffect, useState } from "react";
import "../../styles/loader/loader.css";
import { banner1, banner5 } from "../../assets";

const Loader = () => {
  return (
    <div className="loader_comp">
      <img src={banner1} style={{ display: "none" }} />
      <img src={banner5} style={{ display: "none" }} />
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
