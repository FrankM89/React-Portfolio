import React from "react";

const projectsData = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    link: "https://example.com/project1",
    repoLink: "https://github.com/user/repo1",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    link: "https://example.com/project2",
    repoLink: "https://github.com/user/repo2",
  },
  {
    title: "Project 3",
    description: "Description of Project 2",
    link: "https://example.com/project2",
    repoLink: "https://github.com/user/repo2",
  },
  {
    title: "Project 4",
    description: "Description of Project 2",
    link: "https://example.com/project2",
    repoLink: "https://github.com/user/repo2",
  },
  {
    title: "Project 5",
    description: "Description of Project 2",
    link: "https://example.com/project2",
    repoLink: "https://github.com/user/repo2",
  },
];

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div>
        {projectsData.map((project, index) => (
          <div key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
