import React from "react";
import { removeHyphensAndCapitalize } from "../../utils/helpers";

function Project({ project }) {
  const { name, repo, link, description } = project;

  // Determine the file format based on the name of the image file
  const imageExtension = /\.(jpg|jpeg)$/i.test(name) ? 'jpg' : 'png';

  return (
    <div className="project" key={name}>
      <img
        src={require(`../../assets/projects/${name}.${imageExtension}`).default}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>{" "}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
