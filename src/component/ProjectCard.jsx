import React from "react";

const ProjectCard = ({ title, image, description, techsUsed, viewlink }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <p className="title is-size-5 is-family-monospace">{title}</p>
          {description}
          <br />
          {techsUsed.length > 0 &&
            techsUsed.map((tech, index) => (
              <span
                key={index}
                className="is-inline-flex tag has-text-primary mr-3"
              >
                {tech}
              </span>
            ))}

          <div className=" ">
            <a href={viewlink} target="_blank" rel="noopener noreferrer">
              <button className="button is-primary button is-primary is-light ">View</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
