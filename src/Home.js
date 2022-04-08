import React from "react";
import web from "../src/images/p1.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {

  return (
    <>
    <Common name ="Welcome Home sdjhfgsdu" 
    imgsrc={web}
    visit="/services"
    btname="Contact Now"
    />
    </>
  );
};
export default Home;
