import React from "react";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import "./Portfolio.css";

const data = [
  {
    id: 1,
    title: "This is portfolio item title 1",
    image: IMG1,
    github: "https://github.com",
    liveDemo: "https://github.com",
  },
  {
    id: 2,
    title: "This is portfolio item title 2",
    image: IMG2,
    github: "https://github.com",
    liveDemo: "https://github.com",
  },
  {
    id: 3,
    title: "This is portfolio item title 3",
    image: IMG3,
    github: "https://github.com",
    liveDemo: "https://github.com",
  },
  {
    id: 4,
    title: "This is portfolio item title 4",
    image: IMG4,
    github: "https://github.com",
    liveDemo: "https://github.com",
  },
  {
    id: 5,
    title: "This is portfolio item title 5",
    image: IMG5,
    github: "https://github.com",
    liveDemo: "https://github.com",
  },
  {
    id: 6,
    title: "This is portfolio item title 6",
    image: IMG6,
    github: "https://github.com",
    liveDemo: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="d-flex flex-column justify-content-center align-items-center  mt-7 mb-4">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </div>

      <div className=" container portfolio-items">
        <div className=" portfolio-items ">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio-item ">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>This is portfolio item title</h3>
                <div className="portfolio__item__cta">
                  <a href={github} className="btn mx-2">
                    Github
                  </a>
                  <a href={demo} className="btn">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
