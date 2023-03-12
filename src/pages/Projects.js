import React from "react";
import image1 from "../images/02-portfolio-1.jpg"
import image2 from "../images/02-portfolio-2.jpg"
import image3 from "../images/02-portfolio-3.jpg"
import image4 from "../images/02-portfolio-4.jpg"
import image5 from "../images/02-portfolio-5.jpg"
import image6 from "../images/02-portfolio-6.png"

function Work() {
  return (
    <>
      <section id="work" className="container" >
        <h1 className="text-center">Work</h1>
        <hr />
        <div className="container">
          <div className="row g-5 ">
            <div className="card col-md-4 col-sm-6 border-0">
              <img
                src={image1}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>

            <div className="card col-md-4 col-sm-6 border-0">
              <img
                src={image2}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>

            <div className="card col-md-4 col-sm-6 border-0">
              <img
                src={image3}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>

            <div className="card col-md-4 col-sm-6 border-0">
              <img
                src={image4}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>

            <div className="card col-md-4 col-sm-6 border-0">
              <img
                src={image5}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>

            <div className="card col-md-4 col-sm-6 border-0">
              <img
                src={image6}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
