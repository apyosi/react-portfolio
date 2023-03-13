import React from "react";
import { Link } from "react-router-dom";

const Card = ({item}) => {
  return (
    <article className="card col-md-4 col-sm-6 border-0">
      <Link to={`${item.id}`}>
        <img src={item.image_url} className="card-img-top" alt={item.id} width="100%"/>
        <div className="card-body">
          <h5 className="card-title">{item.id}</h5>
          <p className="card-text">
          {item.description}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default Card;
