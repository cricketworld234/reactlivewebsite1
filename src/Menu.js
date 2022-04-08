import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="menu_style">
        <NavLink exact className="active_class" to="/">
          AboutUs
        </NavLink>
        <NavLink exact className="active_class" to="/services">
          Services
        </NavLink>
        <NavLink exact className="active_class" to="/search">
          Search Box
        </NavLink>
        <NavLink exact className="active_class" to="/user">
          User Page
        </NavLink>
        <NavLink exact className="active_class" to="/contact">
          Contact Us
        </NavLink>
        <br />
      </div>
      {/* <a href="/">AboutUs </a>
      <a href="/contact">ContactUs </a> */}
    </>
  );
};
export default Menu;
