import React from "react";
import EnochPic from "../../public/ProfilePic.jpeg";

const Intro = () => {
  const skills = [
    "Project Management",
    "Supply Chain Management",
    "Process Optimization",
    "Data Analysis",
    "Problem-Solving",
    "Excel",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Express",
    "Node",
    "MongoDB",
    "Netlify",
    "Render",
  ];
  return (
    <div className="container">
      <div className="columns mt-6">
        <div className="column">
          <figure className="image">
            <img
              src={EnochPic}
              className="is-rounded"
              style={{ height: "400px", width: "400px" }}
            />
          </figure>
        </div>
        <div className="column is-three-quarters">
          <p className="title is-size-1 is-family-monospace has-text-centered">
            Enoch Ampong
          </p>
          <p className="has-text-centered"> Project Manager | Web Developer</p>
          <hr />
          <p className="is-family-monospace has-text-centered">
            Results-driven professional with over six years of industry
            experience, excelling in logistics project management and web
            development. Skilled in problem-solving, decision-making, and
            fostering collaboration across diverse teams. Passionate about
            leveraging technology to optimize operations and enhance user
            experience.
          </p>

          <div className="has-text-centered">
            <div className="is-inline-flex mt-6">
              <a
                href="https://github.com/enochampong"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="is-size-3 mx-6">
                  <i className="fa-brands fa-github"></i>
                </p>
              </a>

              <a
                href="https://www.linkedin.com/in/enoch-ampong-a3342020a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="is-size-3">
                  <i className="fa-brands fa-linkedin"></i>
                </p>
              </a>
            </div>
          </div>

          <div className="columns is-multiline">
            <div className="column mt-6 has-text-centered">
              <div className="is-flex-mobile">
                {skills.map((skill, index) => (
                  <span className="tag is-primary mx-2" key={index}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
