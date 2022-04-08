import React from "react";
import web from "../src/images/p1.jpg";
import { NavLink } from "react-router-dom";

const Card = () => {
  return (
    <>
      <div class="card">
        <img src={web} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <NavLink to="/home" class="btn btn-primary">
            Go somewhere
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Card;
