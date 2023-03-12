import React from "react";
import profileImage from "../images/profile.png"

function About() {
  return (
    <>
      <section id="about">
        <h1 className="text-center">About Me</h1>
        <hr />
      </section>
      <section>
        <div className="container clearfix">
          <img
            className="col-4 col-sm-3 col-md-2 float-start mb-3 me-3"
            src={profileImage}
            alt="profile"
          />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            temporibus repudiandae unde tempora! Fugit, dicta cumque dignissimos
            veniam porro at obcaecati totam harum reiciendis excepturi minus
            enim aliquam iste fugiat.
          </p>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            temporibus repudiandae unde tempora! Fugit, dicta cumque dignissimos
            veniam porro at obcaecati totam harum reiciendis excepturi minus
            enim aliquam iste fugiat.
          </p>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            temporibus repudiandae unde tempora! Fugit, dicta cumque dignissimos
            veniam porro at obcaecati totam harum reiciendis excepturi minus
            enim aliquam iste fugiat.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
