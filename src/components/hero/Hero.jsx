import React, { useEffect, useState } from "react";
import { banner } from "../../constants";
import { motion } from "framer-motion";
import "../../styles/hero/hero.css";
import { fadeIn, slideIn } from "../../utils/motion";
const Hero = () => {
  const [active, setActive] = useState(0);
  const [secondActive, setSecondActive] = useState(1);
  const totalBanner = banner.length - 1;

  const autoSlide = () => {
    if (active >= totalBanner) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      autoSlide();
    }, 6000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [active]);

  return (
    <div className="hero">
      {banner.map((item, index) => {
        return (
          <div
            key={index}
            className={active == index ? "hero_img" : "hero_hide"}
          >
            <img src={item.image} alt={`banner${index + 1}`} />
            <div className="hero_caption">
              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeIn("down", "tween", 0.1, 0.5)}
                className="hero_caption_header"
              >
                <motion.h1
                  initial="hidden"
                  animate="show"
                  variants={slideIn("up", "tween", 0.1, 0.5)}
                >
                  {item.title}
                </motion.h1>
              </motion.div>
              <h2>{item.subTitle}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
