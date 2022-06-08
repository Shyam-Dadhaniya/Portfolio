import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import "./Header.css";
const HeaderSocial = () => {
  return (
    <>
      <div className="header__social">
        <a href="https://in.linkedin.com/" target="_blank">
          <AiFillLinkedin className="width" />
        </a>
        <a href="https://github.com/Shyam-Dadhaniya" target="_blank">
          <AiFillGithub className="width" />
        </a>
        <a href="www.twitter.com" target="_blank">
          <AiFillTwitterSquare className="width" />
        </a>
      </div>
    </>
  );
};

export default HeaderSocial;
