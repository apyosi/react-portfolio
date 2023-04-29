import React from "react";
import profileImage from "../images/pull-shark.png";

function Home() {
  return (
    <main id="home">
      <h1 className="text-center">About Me</h1>
      {/* <hr /> */}
      <img
        className="w-100 mb-3"
        src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"
        alt="lighting-line"
      />
      <div className="container clearfix">
        <img
          className="col-4 col-sm-3 col-md-2 float-start mb-3 me-3"
          src={profileImage}
          alt="profile"
        />
        <h2>Hello. I'm Anton Yosifov 👋</h2>
        {/*       <ul>
          <li>
            🧾 I specialize Front-End Web Development{" "}
            <a
              href="https://skillsforlife.edx.org/"
              target="_blank"
              rel="noreferrer"
            >
              (Trilogy's Skills Bootcamp)
            </a>
          </li>
          <li>
            📜 I'm graduated in Computing Technologies (University of
            Roehampton)
          </li>
          <li>🔭 I’m currently working on my react portfolio</li>
          <li>🌱 I’m currently learning React</li>
          <li>🔭 I’m currently working on my react portfolio</li>
          <li>🌱 I’m currently learning React</li>
          <li>🔭 I’m currently working on my react portfolio</li>
          <li>🌱 I’m currently learning React</li>{" "}
          <li>🌱 I’m currently learning React</li>
        </ul> */}
        <p className="font-monospace fw-bold text-justify">
          Certified Front-End Web Developer (
          <a
            href="https://skillsforlife.edx.org/"
            target="_blank"
            rel="noreferrer"
          >
            Trilogy's Skills Bootcamp 2023
          </a>) and graduated in Computing Technologies (
          <a
            href="https://www.roehampton.ac.uk/"
            target="_blank"
            rel="noreferrer"
          >
            University of Roehampton 2022
          </a>
          ). During my time in these programs, I have picked up
          technical knowledge and abilities from my university course, as well as practical skills from the boot camp and independent study in several subjects. Along with using a variety of programming languages, development tools, and operating systems, I have also gone through agile and waterfall development life cycle methodologies on the group projects in the courses.
          <br></br>As a career switcher, I am eager to advance in the IT industry and have a focus on a range of computing technologies: Front-End and Back-End Web Development, Cloud Computing, Systems & Network Management, and Cybersecurity.
        </p>
      </div>
      <hr />
      <h4 className="text-center">GitHub Analytics ⚙️</h4>
      <div className="container-fluid">
        <a href="https://github.com/apyosi">
          <div className="d-flex flex-column">
            <img
              className="m-2"
              height="250em"
              src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=apyosi&theme=github_dark"
              alt="summary-cards"
            />
            <img
              className="m-2"
              height="250em"
              src="https://github-readme-activity-graph.cyclic.app/graph?username=apyosi&theme=react-dark"
              alt="graph"
            />
            <img
              className="m-2"
              height="250em"
              src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=apyosi&show_icons=true&theme=github_dark"
              alt="github-stats"
            />
            <img
              className="m-2"
              height="250em"
              src="https://github-readme-streak-stats.herokuapp.com/?user=apyosi&theme=github-dark-blue"
              alt="github-stats-heroku"
            />
            <img
              className="m-2"
              height="300em"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=apyosi&theme=github_dark"
              alt="stats"
            />
          </div>
        </a>
      </div>
    </main>
  );
}

export default Home;
