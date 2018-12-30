import React, { Component } from "react";
import {
  Route,
  NavLink
} from "react-router-dom";

import "./index.css";
import Home from "./home";
import About from "./about";
import Projects from "./projects";
import Skills from "./skills";

class Main extends Component {
  render() {
    return (
        <div>
          <header>
            <ul className="navigation">
              <li><NavLink className="" to="/">home</NavLink></li>
              <li><NavLink to="/about-me">about me</NavLink></li>
              <li><NavLink to="/skills">skills</NavLink></li>
              <li><NavLink to="/projects">projects</NavLink></li>
            </ul>
          </header>

          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/about-me" component={About}/>
            <Route exact path="/skills" component={Skills}/>
            <Route exact path="/projects" component={Projects}/>
          </div>
        </div>
    );
  }
}

export default Main;
