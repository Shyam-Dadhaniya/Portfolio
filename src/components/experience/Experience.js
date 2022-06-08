import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./Experience.css";
const Experience = () => {
  return (
    <section id="experience">
      <div className="d-flex flex-column justify-content-center align-items-center mt-7 mb-4">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>HTML</h4>
                <small className="textLight">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>CSS</h4>
                <small className="textLight">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="textLight">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>BootStrap</h4>
                <small className="textLight">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>React</h4>
                <small className="textLight">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>Angular</h4>
                <small className="textLight">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>HTML</h4>
                <small className="textLight">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>CSS</h4>
                <small className="textLight">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="textLight">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>BootStrap</h4>
                <small className="textLight">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>React</h4>
                <small className="textLight">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>Angular</h4>
                <small className="textLight">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
