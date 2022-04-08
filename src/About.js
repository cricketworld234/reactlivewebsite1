import React from "react";
import web from "../src/images/p1.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {

  return (
    <>
    <Common name ="Welcome About sdjhfgsdu" 
    imgsrc={web}
    visit="/contact"
    btname="Contact Now"
    />
    </>
  );
};
export default About;
