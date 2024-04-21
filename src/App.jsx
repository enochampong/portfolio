// import "./App.css";
import Navbar from "./component/Navbar";
import Contact from "./Pages/Contact";
import HomePage from "./Pages/HomePage";

import Projects from "./component/Projects";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import "bulma/css/bulma.min.css";
import Intro from "./component/Intro";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Intro />
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
        {/* <footer>
       <p>enochampong0@gmail.com</p>
     </footer> */}
      </div>
    </>
  );
}

export default App;
