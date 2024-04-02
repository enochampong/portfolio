import "./App.css";
import Navbar from "./component/Navbar";
import Contact from "./Pages/Contact";
import HomePage from "./Pages/HomePage";
import LinkedIn from "./component/LinkedIn";
import GitHub from "./component/gitHub";
import Projects from "./Pages/Projects";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section>
      <h1>welcome</h1>
      <header className="App-header">
        <img src="/ProfilePic.jpg.jpeg" alt="ProfilePic.jpg" />
        <h1 className="welcome">Welcome to Enoch Ampong's Portfolio</h1>

        <p>I recently finished a boot camp and here are some of my projects:</p>
        <div className="socialMedia">
        <LinkedIn />
        <GitHub />
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <AboutPage />
        <Projects /> 

        <div>
          <h3>Contact Me</h3>

        </div>
      </main>
      </section>
      <footer>
        <p>enochampong0@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
