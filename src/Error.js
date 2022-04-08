import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="Error1">
        <h1>404 Error.....!!!!</h1>
        <NavLink to="/">Go back</NavLink>
      </div>
    </>
  );
};
export default Error;
