import { useState } from "react";
import { logo } from "../../assets";
import * as React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar/navbar.css";
import { social, links } from "../../constants";
import { MdEmail } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

// importing icons

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  window.addEventListener("scroll", () => {
    var navbar = document.querySelector(".navbar_desktop");

    navbar.classList.toggle("navbar_sticky", window.scrollY > 50);
    navbar.classList.toggle("navbar_absolute", window.scrollY < 50);
  });

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
          <a className="subheader_number" href="tel:+919625887710">
            {" "}
            <span>
              <IoMdContact />{" "}
            </span>
            +91 96258 87710
          </a>
          <a href="mailto:info@friendsindeed.co.in">
            <span>
              <MdEmail />
            </span>{" "}
            info@friendsindeed.co.in
          </a>
        </div>
      </div>

      {/* navbar desktop  */}
      <div className="navbar_desktop">
        <div className="navbar_logo">
          <img src={logo} alt="logo" />
          <a href="#">
            <h2 className="pointer">Friends Indeed Foundation</h2>
          </a>
        </div>
        <div className="navbar_links">
          <ul>
            {links.map((item, index) => (
              <a key={index} href={`#${item.link}`}>
                <li>{item.name}</li>
              </a>
            ))}
          </ul>
        </div>
        <div className="navbar_contact">
          <a href="#contact">
            <button className="pointer">
              <IoMdContact
                style={{ fontSize: "30px" }}
                className="navbar_icon"
              />
              contact
            </button>
          </a>
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
            <a key={index} href={`#${item.link}`}>
              <li onClick={() => setMenu(false)}>{item.name}</li>
            </a>
          ))}
        </div>
        <div className="navbar_mobile_contact">
          <a href="#contact">
            <button onClick={() => setMenu(false)} className="pointer">
              <IoMdContact
                style={{ fontSize: "30px" }}
                className="navbar_icon"
              />
              contact
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
