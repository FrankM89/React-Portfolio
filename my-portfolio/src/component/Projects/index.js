import React from "react";

const projectsData = [
  {
    title: "what-2-game",
    description: "MERN Stack",
    link: "https://what2game.herokuapp.com/",
    repoLink: "https://github.com/erickjavalos/what2game",
  },
  {
    title: "so-you-want-to-manage-a-project",
    description: "JS/HTML/CSS",
    link: "https://vast-brook-40513.herokuapp.com/",
    repoLink: "https://github.com/wiilki/so-you-want-to-manage-a-project",
  },
  {
    title: "jate",
    description: "JS/HTML/CSS/Node",
    link: "https://no-internet-no-problem.herokuapp.com/",
    repoLink: "https://github.com/FrankM89/No-Internet-No-Problem",
  },
  {
    title: "5-day-forecast",
    description: "JS/HTML/CSS",
    link: "https://frankm89.github.io/5-Day-Forecast-Dashboard/",
    repoLink: "https://github.com/FrankM89/5-Day-Forecast-Dashboard",
  },
  {
    title: "so-you-want-to-plan-your-work-day",
    description: "React/JavaScript/CSS",
    link: "https://frankm89.github.io/So-You-Want-To-Plan-Your-Work-Day/",
    repoLink: "https://github.com/FrankM89/So-You-Want-To-Plan-Your-Work-Day",
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
