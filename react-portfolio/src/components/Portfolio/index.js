import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "what-2-game",
      description: "MERN Stack",
      link: "https://what2game.herokuapp.com/",
      repo: "https://github.com/erickjavalos/what2game",
    },
    {
      name: "so-you-want-to-manage-a-project",
      description: "JS/HTML/CSS",
      link: "https://vast-brook-40513.herokuapp.com/",
      repo: "https://github.com/wiilki/so-you-want-to-manage-a-project",
    },
    {
      name: "jate",
      description: "JS/HTML/CSS",
      link: "https://no-internet-no-problem.herokuapp.com/",
      repo: "https://github.com/FrankM89/No-Internet-No-Problem",
    },
    {
      name: "weather-dashboard",
      description: "JS/HTML/CSS",
      link: "https://frankm89.github.io/5-Day-Forecast-Dashboard/",
      repo: "https://github.com/FrankM89/5-Day-Forecast-Dashboard",
    },
    {
      name: "so-you-want-to-plan-your-work-day",
      description: "React/JavaScript/CSS",
      link: "https://frankm89.github.io/So-You-Want-To-Plan-Your-Work-Day/",
      repo: "https://github.com/FrankM89/So-You-Want-To-Plan-Your-Work-Day",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
