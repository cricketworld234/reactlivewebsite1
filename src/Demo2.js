import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Demo2 = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center">About11</h1>
   
      <div class="card" style={{ width: "18rem" }}>
        <img
          src="https://picsum.photos/seed/picsum/200/200"
          class="card-img-top"
          alt="images"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://unsplash.com/" class="btn btn-outline-success">
            Go somewhere
          </a>
        </div>
       
      </div>
      <div className="text-center">
         
          <button className="btn btn-outline-danger">Welcome</button>
        </div>
      </div>
    </>
  );
};
export default Demo2;
