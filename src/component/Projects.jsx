import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
function Projects() {
  return (
    <div className="container">
      <p className="title is-size-3 is-family-monospace has-text-centered mt-6">
        Projects
      </p>
      <hr />
      <div className="columns is-multiline">
        {projects.length > 0 &&
          projects.map((project, index) => (
            <div className="column is-one-third">
              <ProjectCard
                key={index}
                title={project.title}
                image={project.image}
                description={project.description}
                techsUsed={project.techsUsed}
                viewlink={project.viewLink}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
export default Projects;
