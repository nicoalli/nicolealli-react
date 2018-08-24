import React, { Component } from "react";
import {
  Route,
  NavLink
} from "react-router-dom";

import "./index.css";
import Home from "./home";

class Main extends Component {
  render() {
    return (
        <div>
          <header>
            <ul className="navigation">
              <li><NavLink to="/">home</NavLink></li>
              <li><NavLink to="/about-me">about me</NavLink></li>
              <li><NavLink to="/skills">skills</NavLink></li>
              <li><NavLink to="/projects">projects</NavLink></li>
              <li><NavLink to="/contact">contact</NavLink></li>
            </ul>
          </header>

          <div className="content">
            <Route exact path="/" component={Home}/>
          </div>
        </div>
    );
  }
}

export default Main;
