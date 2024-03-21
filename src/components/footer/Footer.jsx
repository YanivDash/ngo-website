import React from "react";

import { logo2 } from "../../assets";
import "../../styles/footer/footer.css";
import { contact } from "../../constants";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="footer_ngo">
          <img src={logo2} alt="logo" />
          <h1>Friend Indeed Foundation</h1>
        </div>
        <div className="footer_contact">
          <h1>Contact US</h1>
          <p>+919625887710</p>
          <p>info@friendsindeed.co.in</p>
          <p>h0011 sector-8 faridabad</p>
        </div>
        <div className="footer_icon">
          {contact.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.type}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </a>
            );
          })}
        </div>
        <div className="footer_donate">
          <h1>Donate</h1>
          <p>123456789098</p>
          <p>detail goes here</p>
        </div>
      </div>
      <div className="footer_copyright">
        <p> Copyright © 2024 Friend Indeed Foundation - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
