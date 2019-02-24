import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const projectData = [
  { name: "admin only channel",
    tagline: "slack application",
    type: [
      "node-js",
      "slack"
    ],
    desc: "Slack app that will delete messages from non-whitelisted users.\
    Allows the creation of admin-only or read-only channels",
    url: "https://github.com/nicoalli/admin-only-channel"
  },

  { name: "pinecone",
    tagline: "website for room booking",
    type: [
      "node-js",
      "html5",
      "css3-alt",
      "js-square"
    ],
    desc: "Website where UofT students can book rooms around campus\
    based on schedules. Perfect for organizing group assignments.",
    url: "https://github.com/nicoalli/Pinecone"
  },
  { name: "student accessibility portal",
    tagline: "website for accessibility services",
    type: [
      "node-js",
      "html5",
      "css3-alt",
      "js-square"
    ],
    desc: "Website where UofT students can access nformation and interact with\
    accessibility services by bringing information from various sources into\
    one platform. ",
    url: "https://github.com/nicoalli/Student-Accessibility-Portal"
  }
]

const Project = (props) => {
  return(
    <div className="project-wrapper">

      <div className="project-overlay">
        <h3 className="project-name">{props.name}</h3>
        <p className="project-tagline">{props.tagline}</p>
        <div className="project-type">
          {props.type.map((type, i) => {
            return <div><FontAwesomeIcon icon={['fab', type]}/></div>
          })}
        </div>
      </div>

       <div className="project-details">
         <p className="project-description">
           {props.desc}
         </p>
         <a className="project-link" target="_blank" href={props.url}>github</a>
       </div>

    </div>
  )
}

class Projects extends Component {
  render () {
    return (
      <section id="projects">
        <div>
          <h2>projects</h2>
          <p>personal projects and assignments I've worked on</p>
          <div className="projects-grid">
            {projectData.map((project, i) => {
              return <Project name={project.name} url={project.url}
                      type={project.type} tagline={project.tagline}
                      desc={project.desc}/>
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default Projects;
