import React from "react";
import Download from "../header/Download";
import ME from "../../assets/me.png";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import "./Header.css";
const Header = () => {
  return (
    <header id="home">
      <div className="container d-flex flex-column justify-content-center align-items-center header__container">
        <h5>Hello I'm</h5>
        <h1>Shyam Dadhaniya</h1>
        <h5>React Developer</h5>
      </div>
      <Download />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <img className="me" src={ME} alt="Me" />
      </div>
      <div className="scrollDown">
        <a href="#contact" className="rounded-circle scroll ">
          <BsFillArrowDownCircleFill className="scroll__down" />
        </a>
      </div>
    </header>
  );
};

export default Header;
