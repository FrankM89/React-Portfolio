import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="font-sans">
      <Header />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;
