import { useState } from "react";
import { logo } from "../../assets";
import * as React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar/navbar.css";
import { social, links } from "../../constants";

// importing icons
import { IoMdContact } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="navbar">
      {/* subheader social and email and number  */}
      <div className="subheader">
        <ul className="subheader_social">
          {social.map((item, index) => {
            let IconComponent = item.icon;
            return (
              <li key={index}>
                <a
                  className="subheader_social_links"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconComponent />
                </a>
              </li>
            );
          })}
        </ul>
        <div className="subheader_contact">
          <a href="tel:+1234567890">
            {" "}
            <span>Call Us:</span> +1 (234) 567-890
          </a>
          <a href="mailto:example@example.com">
            <span>Email Us:</span> example@example.com
          </a>
        </div>
      </div>

      {/* navbar desktop  */}
      <div className="navbar_desktop">
        <div className="navbar_logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <h2 className="pointer">Friends Indeed Foundation</h2>
        </div>
        <div className="navbar_links">
          <ul>
            {links.map((item, index) => (
              <Link key={index} to={item.link}>
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="navbar_contact">
          <Link to="contact">
            <button className="pointer">
              <IoMdContact
                style={{ fontSize: "30px" }}
                className="navbar_icon"
              />
              contact
            </button>
          </Link>
        </div>
        <GiHamburgerMenu
          onClick={() => setMenu(!menu)}
          className="navbar_menu pointer"
        />
      </div>
      {/* navbar mobile  */}
      <div
        className={
          menu ? "navbar_mobile menuActive" : "navbar_mobile menuDeactive"
        }
      >
        <div className="navbar_mobile_links">
          {links.map((item, index) => (
            <Link key={index} to={item.link}>
              <li>{item.name}</li>
            </Link>
          ))}
        </div>
        <div className="navbar_mobile_contact">
          <Link to="contact">
            <button className="pointer">
              <IoMdContact
                style={{ fontSize: "30px" }}
                className="navbar_icon"
              />
              contact
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
