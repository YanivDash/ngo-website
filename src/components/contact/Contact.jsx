import React from "react";
import { contact } from "../../constants";
import "../../styles/contact/contact.css";
import { facebook } from "../../assets";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { LuHeartHandshake } from "react-icons/lu";

const ContactCard = (item) => {
  const data = item.data;
  const Icon = data.icon;
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={fadeIn("down", "", data.key * 0.3, 0.1)}
      viewport={{ once: true }}
      className="contact_card"
      style={{
        position: "relative",
        zIndex: 2 - data.key,
      }}
    >
      <a href={data.type}>
        <Icon className="contact_icon" />
      </a>
      <h2>{data.title}</h2>
      <p>{data.data}</p>
    </motion.div>
  );
};

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact_heading">
        <LuHeartHandshake
          style={{
            color: "red",
            fontSize: "20px",
          }}
        />
        <h1> Contact Us</h1>
        <p>
          {" "}
          <FaQuoteLeft /> Friends Indeed Foundation <FaQuoteRight />
        </p>
      </div>
      <div className="contact_info">
        {" "}
        {contact.map((item, index) => {
          item.key = index;
          return <ContactCard key={index} data={item} />;
        })}
      </div>
      <a
        className="subheader_social_links"
        href="https://www.facebook.com/people/Friends-Indeed-Foundation/100086909890597/?mibextid=LQQJ4d"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          style={{
            backgroundImage: `url(${facebook})`,
          }}
          className="contact_facebook"
        >
          <h1>Join Our Facebook Group</h1>
        </div>
      </a>
    </div>
  );
};

export default Contact;
