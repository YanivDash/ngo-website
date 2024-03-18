import React from "react";
import { aboutData } from "../../constants";
import "../../styles/about/about.css";
import { motion } from "framer-motion";
import { fadeIn, slideIn, zoomIn } from "../../utils/motion";
import { rajmri } from "../../assets";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
const About = () => {
  let [read, setRead] = useState(false);
  return (
    <div className="about">
      {aboutData.map((item, index) => {
        let moreContent;
        if (item.subContent.length > 500) {
          moreContent = item.subContent.slice(500, item.subContent.length - 1);
        }

        return (
          <div key={index}>
            <div key={index} className="about_heading">
              <motion.h1
                initial="hidden"
                whileInView={"show"}
                variants={fadeIn("down", "tween", 0.2, 0.5)}
                viewport={{ once: true }}
              >
                {item.title}
              </motion.h1>
            </div>
            <div className="about_content">
              {item.image ? (
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn("right", "tween", 0.3, 0.5)}
                  className="aboutImg"
                  viewport={{ once: true }}
                >
                  <img src={item.image} alt="about_img" />
                </motion.div>
              ) : (
                <></>
              )}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: "true" }}
                variants={fadeIn("left", "tween", 0.3, 0.5)}
                style={
                  item.image
                    ? {}
                    : {
                        width: "100%",
                        padding: "10px 10px 10px 10px",
                      }
                }
                className="about_caption"
              >
                <p>{item.content}</p>
                <br />
              </motion.div>
            </div>
            <>
              {item.subContent ? (
                <>
                  <p
                    className="subContent"
                    style={{ fontSize: "14px", padding: "10px 20px 10px 20px" }}
                  >
                    <span>
                      <FaStar style={{ color: "gold" }} /> {item.subContent[0]}
                    </span>

                    {item.subContent.map((i, index) => {
                      if (index == 0) return;
                      if (read) {
                        return (
                          <span key={index}>
                            <br />
                            <FaStar style={{ color: "gold" }} /> {i}
                          </span>
                        );
                      }
                    })}
                    {item.subContent.length > 1 ? (
                      <span
                        style={{ color: "red", fontWeight: 600 }}
                        className="pointer"
                        onClick={() => setRead(!read)}
                      >
                        {read ? "See less" : "Read more"}
                      </span>
                    ) : (
                      <></>
                    )}
                  </p>
                </>
              ) : (
                <></>
              )}
            </>
          </div>
        );
      })}
      <div className="rajmri">
        <img src={rajmri} alt="" />
      </div>
    </div>
  );
};

export default About;
