import React, { useState } from "react";
import Project from "../Project";

// Import project images
import what2game from "../../assets/projects/what2game.png";
import soyouwanttomanageaproject from "../../assets/projects/soyouwanttomanageaproject.jpg";
import notetaker from "../../assets/projects/notetaker.png";
import jate from "../../assets/projects/jate.png";

function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "What 2 Game",
      description: "Video game search engine to find the perfect game that suits your taste!",
      image: what2game,
      link: "https://what2game.herokuapp.com/",
      repo: "https://github.com/erickjavalos/what2game",
    },
    {
      name: "So You Want To Manage a Project?",
      description:
        "App designed to help organizations keep track of their current projects.",
      image: soyouwanttomanageaproject,
      link: "https://vast-brook-40513.herokuapp.com/",
      repo: "https://github.com/wiilki/so-you-want-to-manage-a-project",
    },
    {
      name: "Virtual Assistant That Only Takes Notes",
      description: "Keep track of your notes with one simple app!",
      image: notetaker,
      link: "https://fm-note-taker.herokuapp.com/",
      repo: "https://github.com/FrankM89/Virtual-Assistant-That-Only-Takes-Notes",
    },
    {
      name: "No Internet No Problem",
      description: "No internet? No problem! Work with or without internet!",
      image: jate,
      link: "https://no-internet-no-problem.herokuapp.com/",
      repo: "https://github.com/FrankM89/No-Internet-No-Problem",
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
