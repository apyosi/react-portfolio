import React from "react";
import Card from "../components/Card";
import projects from "../data.json";

/* import { Link } from "react-router-dom";
import image1 from "../images/02-portfolio-1.jpg";
import image2 from "../images/02-portfolio-2.jpg";
import image3 from "../images/02-portfolio-3.jpg";
import image4 from "../images/02-portfolio-4.jpg";
import image5 from "../images/02-portfolio-5.jpg";
import image6 from "../images/02-portfolio-6.png"; */

function Projects() {
  return (
    <>
      <section id="projects" className="container">
        <h1 className="text-center">Work</h1>
        <hr />
        <div className="container">
          <div className="row g-5 ">
            {projects.map((item) => (
              <Card key={item.id} item={item} />
              // <h1>{item.id}</h1>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
