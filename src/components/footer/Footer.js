import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <a href="#home" className="footer__logo">
        Shyam Dadhaniya
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/in/shyam-dadhaniya-b9a8b917b/">
          <AiFillGithub className="" />
        </a>
        <a href="https://www.facebook.com/in/shyam-dadhaniya-b9a8b917b/">
          <AiFillLinkedin className="" />
        </a>
        <a href="https://www.facebook.com/in/shyam-dadhaniya-b9a8b917b/">
          <AiFillFacebook className="" />
        </a>
        <a href="https://www.instagram.com">
          <AiFillInstagram className="" />
        </a>
        <a href="https://twittwer.com/shyam_dadhaniya">
          <AiFillTwitterCircle className="" />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Shyam Dadhaniya. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
