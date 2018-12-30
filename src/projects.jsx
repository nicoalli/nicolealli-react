import React, { Component } from "react";

class Projects extends Component {
  render () {
    return (
      <section id="projects">
        <div>
          <h2>Page currently under development</h2>
          <p>
            but you can check out my <a href="https://github.com/nicoalli" target="_blank">github</a> for some stuff I did!
          </p>
        </div>
      </section>
    )
  }
}

export default Projects;

/*
const projectData = [
  {name: "pinecone", url: "blah"},
  {name: "sap", url: "blahtwo"}
]
{projectData.map((project, i) => {
  return <Project name={project.name} url={project.url}>
})}
const Project = (props) => {
  return(
    <div>props.name props.url</div>
  )
}*/
