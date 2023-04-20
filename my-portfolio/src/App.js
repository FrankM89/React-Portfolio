import React from "react";
import Header from "./component/Header";
import About from "./component/About";
import Resume from "./component/Resume";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
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
