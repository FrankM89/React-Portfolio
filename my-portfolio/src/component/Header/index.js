import React, { useState } from "react";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
function Header() {
  const [activeTab, setActiveTab] = useState("about");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  let content;
  if (activeTab === "about") {
    content = <About />;
  } else if (activeTab === "resume") {
    content = <Resume />;
  } else if (activeTab === "projects") {
    content = <Projects />;
  } else if (activeTab === "contact") {
    content = <Contact />;
  }
  return (
    <header className="bg-gray-800">
      <nav className="flex items-center justify-between container mx-auto px-4 py-4">
        <h1 className="text-white text-4xl font-bold">My Portfolio</h1>
        <ul className="flex">
          <li className={`mr-6 ${activeTab === "about" && "font-bold"}`}>
            <a
              href="#about"
              onClick={() => handleTabClick("about")}
              className="text-white hover:text-gray-400"
            >
              About
            </a>
          </li>
          <li className={`mr-6 ${activeTab === "resume" && "font-bold"}`}>
            <a
              href="#resume"
              onClick={() => handleTabClick("resume")}
              className="text-white hover:text-gray-400"
            >
              Skills
            </a>
          </li>
          <li className={`mr-6 ${activeTab === "projects" && "font-bold"}`}>
            <a
              href="#projects"
              onClick={() => handleTabClick("projects")}
              className="text-white hover:text-gray-400"
            >
              Projects
            </a>
          </li>
          <li className={`mr-6 ${activeTab === "contact" && "font-bold"}`}>
            <a
              href="#contact"
              onClick={() => handleTabClick("contact")}
              className="text-white hover:text-gray-400"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {content}
    </header>
  );
}
export default Header;
