import React from "react";

function Skills() {
  return (
    <>
      <main id="skills">
        <h1 className="text-center">Skills</h1>
        {/* <hr /> */}
        <img className="w-100 mb-3"
        src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"
        alt="lighting-line"
      />
        <div className="container text-center">
          <div className="list-unstyled row justify-content-evenly">
            <div className="col-4">
              <i
                className="fa-brands fa-html5 fa-7x text-danger"
                aria-hidden="true"
              ></i>
              <p>HTML</p>
            </div>
            <div className="col-4">
              <i
                className="fa-brands fa-css3-alt fa-7x text-primary"
                aria-hidden="true"
              ></i>
              <p>CSS</p>
            </div>
            <div className="col-4">
              <i
                className="fa-brands fa-bootstrap fa-7x text-info"
                aria-hidden="true"
              ></i>
              <p>Bootstrap</p>
            </div>
            <div className="col-4">
              <i
                className="fa-brands fa-js fa-7x text-warning"
                aria-hidden="true"
              ></i>
              <p>Javascript</p>
            </div>
            <div className="col-4">
              <i
                className="fa-brands fa-node fa-7x text-success"
                aria-hidden="true"
              ></i>
              <p>Node.js</p>
            </div>
            <div className="col-4">
              <i
                className="fa-brands fa-react fa-7x text-info"
                aria-hidden="true"
              ></i>
              <p>React</p>
            </div>
            <div className="col-4">
              <i
                className="fa-brands fa-square-git fa-7x"
                aria-hidden="true"
              ></i>
              <p>Git</p>
            </div>
            <div className="col-4">
              <i className="fa-brands fa-github fa-7x" aria-hidden="true"></i>
              <p>GitHub</p>
            </div>
            <div className="col-4">
              <i className="fa-brands fa-gitlab fa-7x" aria-hidden="true"></i>
              <p>GitLab</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Skills;
