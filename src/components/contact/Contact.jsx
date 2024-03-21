import React from "react";
import { contact } from "../../constants";
import "../../styles/contact/contact.css";
import { facebook } from "../../assets";

const ContactCard = (item) => {
  const data = item.data;
  const Icon = data.icon;
  return (
    <div className="contact_card">
      <a href={data.type}>
        <Icon className="contact_icon" />
      </a>
      <h2>{data.title}</h2>
      <p>{data.data}</p>
    </div>
  );
};

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact_heading">
        <h1>Contact Us</h1>
        <p>"Friends Indeed Foundation"</p>
      </div>
      <div className="contact_info">
        {" "}
        {contact.map((item, index) => (
          <ContactCard key={index} data={item} />
        ))}
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
