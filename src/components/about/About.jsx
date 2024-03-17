import React from "react";
import { aboutImg } from "../../assets";
const About = () => {
  return (
    <div className="about">
      <h1 className="about_heading"></h1>
      <div className="about_content">
        <div className="aboutImg">
          <img src={aboutImg} alt="about_img" />
        </div>
        <div className="about_caption">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
            amet ipsa ipsam fugit fuga veritatis distinctio quam, esse ratione
            vel expedita sequi quos eos eius cupiditate excepturi! Error,
            accusantium eligendi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
