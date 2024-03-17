import { banner1, banner2, banner3, banner4, aboutImg } from "../assets";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

// subheader
export const social = [
  { icon: AiFillInstagram, link: "/" },
  {
    icon: FaFacebook,
    link: "/",
  },
  {
    icon: FaTwitter,
    link: "/",
  },
  {
    icon: FaYoutube,
    link: "/",
  },
];

// navbar
export const links = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "knowledge",
    link: "knowledge",
  },
];

// banner hero
export const banner = [
  {
    image: banner1,
    title: "Heading One",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: banner2,
    title: "Heading Two",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: banner3,
    title: "Heading Three",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: banner4,
    title: "Heading Four",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

// about content
export const aboutData = {
  image: aboutImg,
  content:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam amet ipsa ipsam fugit fuga veritatis distinctio quam, esse rationevel expedita sequi quos eos eius cupiditate excepturi! Error,  accusantium eligendi.",
};
