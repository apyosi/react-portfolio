import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <article className="card col-md-4 col-sm-6  bg-black border-0" >
      <div className="text-center w-100 p-2 border border-0 border-light ">
        <Link to={`${item.id}`}>
          <h3 className="card-title">{item.id}</h3>
        </Link>
        <p className="card-text">{item.description}</p>
        <Link to={`${item.id}`}>
          <img src={item.image_url} className="img-fluid img-thumbnail border border-1 border-white" width="300" height="300" alt={item.id} />
        </Link>
      </div>
    </article>
  );
};

export default Card;
