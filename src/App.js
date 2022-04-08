import React from "react";
import { Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";
import User from "./User";
import Services from "./Services";
import Home from "./Home";
import Navbar from "./Navbar";
import Navbar1 from "./Navbar1";
const App = () => {
  const Name = () => {
    return <h1>Hello,i am a name page</h1>;
  };
  return (
    <>
      <Navbar />
      {/* <Navbar1/> */}

      <div className="text-center">
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/services" component={Services} />
          <Route path="/home" component={Home} />
          <Route path="/contact/Name" component={Name} />
          <Route component={Error} />
        </Switch>
      </div>
    </>
  );
};
export default App;
