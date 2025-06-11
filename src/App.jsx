import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Contact from "./Pages/Contact";
import HomePage from "./Pages/HomePage";
import Excels from "./component/Excels";
import Projects from "./component/Projects";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import "bulma/css/bulma.min.css";
import Intro from "./component/Intro";
import Experience from "./component/Experience";

function App() {
    const [showExperience, setShowExperience] = useState(false);

  return (
    <>
      <Navbar />
      <div className="container">
        <Intro />
         <div className="mb-4">
          <button
            className="button is-link is-light"
            onClick={() => setShowExperience((prev) => !prev)}
          >
            {showExperience ? "Hide Experience" : "View Experience"}
          </button>
        </div>
        {showExperience && <Experience />}
        <Excels/>
        <Projects />
        <Contact />
        <main>
          {/* <Routes>
          <Route path="/" element={<HomePage />} />
         <Route path="/Projects" element={<Projects />} />
         <Route path="/AboutPage" element={<AboutPage />} />
         <Route path="/Contact" element={<Contact />} />
       </Routes> */}
          {/* <AboutPage /> */}
          {/* <Projects /> */}

          {/* <div>
           <h3>Contact Me</h3>
         </div> */}
        </main>
        <div className="content has-text-centered">
        <footer >
       <p>enochampong0@gmail.com</p>
     </footer>
        </div>
        
      </div>
    </>
  );
}

export default App;
