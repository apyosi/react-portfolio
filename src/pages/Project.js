import React from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../data.json";

const Project = () => {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);
  return (
    <main id="project">
      <article className="text-center">
        {project && (
          <>
            <h1>{project.id}</h1>
            <p>{project.description}</p>
            <div>
              <a href={project.html_url} target="_blank" rel="noreferrer">
                <button className="btn bg-dark text-white m-2">
                  GitHub Repository
                </button>
              </a>
              <a href={project.deployed_url} target="_blank" rel="noreferrer">
                <button className="btn bg-dark text-white">
                  Deployed link
                </button>
              </a>
            </div>
            <img
              className=" img-fluid  border border-dark m-1"
              src={project.image_url}
              alt={projects.id}
            />
          </>
        )}
        {!project && (
          <>
            <h2>Project Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to="/projects">Visit project section</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default Project;
