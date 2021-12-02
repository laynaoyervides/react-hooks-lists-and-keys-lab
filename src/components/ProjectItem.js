import React from "react";

function ProjectItem({ name, about, technologies }) {
  const techList = technologies.map(
    technologies => {
      return (
        <span key={technologies}>{technologies}</span>
      )
    }
  )
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
       {techList}
      </div>
    </div>
  );
}

export default ProjectItem;
