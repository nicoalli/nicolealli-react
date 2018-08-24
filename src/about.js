import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section id="about-me">
        <h2>about me</h2>
        <div className="col-two">
          <center><img src="profilepic.jpg" id="profilepic"></center>
  		  </div>
  		  <div className="col-two">
  			  <p>My name is Nicole Alli, I have a double major in computer science and equity studies from the University of Toronto.</p>
          <p>Web development, design, and creating accessible technology ....</p>
        </div>
  		</section>
    );
  }
}

export default About;
