import React from "react";
import Layout from "../components/Layout";

const Projects = (props) => {
  const { projectList } = props;

  return (
    <Layout>
      <main className="content-body">
        <section className="projects-background banner">
          <div className="top-banner-title">
            <h1 className="page-title">Projects</h1>
          </div>
        </section>
        <section className="project-container">
          {projectList.map((project, index) => (
            <div className="project">
              <img
                className="project-img"
                src={`../uploads/${project.image}`}
                alt="project image"
              />
              <a className="nav-link" href={project.url}>
                <div className="project-info">
                  <h2>{project.title}</h2>
                  <h4>{project.description}</h4>
                </div>
              </a>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default Projects;
