import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons';

class Home extends Component {
  render() {
    return (
      <section id="intro">
        <div className="intro">
          <h1>NICOLE ALLI</h1>
          <span id="tagline">Developer &#183; Equity & Diversity Advocate
                &#183; She/Her &#183; Cat Lady
          </span>
          <div id="social-links">
            <a href="https://github.com/nicoalli" target="_blank">
              <FontAwesomeIcon icon={['fab', 'github']}/></a>
            <a href="mailto:alli.nicolette@gmail.com" target="_blank">
              <FontAwesomeIcon icon={farEnvelope}/></a>
            <a href="https://www.linkedin.com/in/nicole-alli/" target="_blank">
              <FontAwesomeIcon icon={['fab', 'linkedin']}/></a>
            <a href="https://www.instagram.com/itsthenicole/" target="_blank">
              <FontAwesomeIcon icon={['fab', 'instagram']}/></a>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
