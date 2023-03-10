import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section className="error"></section>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to="/" className="btn">
        Back Home
      </Link>
    </>
  );
};

export default Error;
