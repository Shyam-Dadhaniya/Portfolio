import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { GiAchievement } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { Button } from "bootstrap";
const About = () => {
  return (
    <section id="about">
      <div className="know  mt-7">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards d-flex justify-content-between">
            <article className="about__card">
              <GiAchievement className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <div>
            <p>
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quidem.lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quidem.lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam, quidem.lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam, quidem.lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quisquam, quidem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
