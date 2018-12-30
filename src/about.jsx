import React, { Component } from "react";
import profilepic from './profilepic.jpg';

class About extends Component {
  render() {
    return (
      <section id="about-me">
        <div>
          <h2>about me</h2>
          <div className="col-wrapper">
            <div className="col-two">
              <img src={profilepic} id="profilepic" alt="Profile"/>
      		  </div>
      		  <div className="col-two" id="description">
      			  <p>Hello! My name is <strong>Nicole Alli</strong>, a recent graduate from University of Toronto with a double major in computer science and equity studies.</p>
              <p>I currently reside in <strong>Toronto</strong> trying to figure out how to adult (no luck yet)</p>
              <p>Software development, UX/UI design, and creating accessible <strong>socially conscious</strong> technologies are my interestes.</p>
              <p>I hope to be surrounded by people who encourage me to take chances and my goal is to find a space in the tech world that <strong>inspires me</strong>.</p>
              <p>If I'm not coding you can find me colouring, watching FRIENDS, or playing with my cat :)</p>
            </div>
            </div>
        </div>
  		</section>
    );
  }
}

export default About;
