import React, { useState } from "react";
import Header from "./component/Header";
import About from "./component/About";
import Resume from "./component/Resume";
import Projects from "./component/Projects";
import Contact from "./component/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("header");

  const renderPage = () => {
    switch (currentPage) {
      case "header":
        return <Header />;
      case "about":
        return <About />;
      case "resume":
        return <Resume />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Header />;
    }
  };

  return (
    <div className="font-sans">
      {renderPage()}
      <nav>
        <ul>
          <li onClick={() => setCurrentPage("header")}>Header</li>
          <li onClick={() => setCurrentPage("about")}>About</li>
          <li onClick={() => setCurrentPage("resume")}>Resume</li>
          <li onClick={() => setCurrentPage("projects")}>Projects</li>
          <li onClick={() => setCurrentPage("contact")}>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
