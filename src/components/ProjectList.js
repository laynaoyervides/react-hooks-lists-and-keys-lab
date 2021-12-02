import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
 const newArray = projects.map(projects =>
  {
    return (
      <ProjectItem key={projects.id} name={projects.name} about={projects.about} technologies={projects.technologies} />
 );
  })
  console.log(newArray);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
          {/* render ProjectItem components here */}
      {newArray};
          </div>
    </div>
  );
}

export default ProjectList;
