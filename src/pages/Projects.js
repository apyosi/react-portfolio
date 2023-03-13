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
      <main id="projects" className="container-fluid">
        <h1 className="text-center">Projects</h1>
        {/* <hr /> */}
        <img className="w-100 mb-3"
        src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"
        alt="lighting-line"
      />
        <div className="container">
          <div className="row g-5 ">
            {projects.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Projects;
