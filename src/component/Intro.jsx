import React from "react";
import EnochPic from "../../public/ProfilePic.jpeg";

const Intro = () => {
  const skills = [
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
            Full Stack Developer
          </p>
          <hr />
          <p className="is-family-monospace has-text-centered">
            Junior Full-Stack Web Developer with background in Logistics and
            Operations Management | Passionate about crafting interactive and
            user-centric web experiences.
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
              <div className="is-inline-flex">
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
