import React from "react";
import { aboutData } from "../../constants";
import "../../styles/about/about.css";
import { motion } from "framer-motion";
import { fadeIn, slideIn, zoomIn } from "../../utils/motion";
const About = () => {
  return (
    <div className="about">
      <div className="about_heading">
        <motion.h1
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn("right", "tween", 0.5, 0.5)}
          viewport={{ once: true }}
        >
          About Us
        </motion.h1>
      </div>
      <div className="about_content">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={zoomIn(0.1, 0.5)}
          className="aboutImg"
          viewport={{ once: true }}
        >
          <img src={aboutData.image} alt="about_img" />
        </motion.div>
        <div className="about_caption">
          <p>{aboutData.content}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
