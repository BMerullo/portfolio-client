import React from "react";
import Layout from "../components/Layout";

const Web = (props) => {
  const { webList } = props;
  return (
    <Layout>
      <main className="content-body">
        <section className="projects-background banner">
          <div className="top-banner-title">
            <h1 className="page-title">Freelance</h1>
          </div>
        </section>
        <section className="project-container">
          {webList.map((web, index) => (
            <div className="project">
              <img
                className="project-img"
                src={`../uploads/${web.image}`}
                alt="project image"
              />
              <a className="nav-link" href={web.url}>
                <div className="project-info">
                  <h2>{web.title}</h2>
                  <h4>{web.description}</h4>
                </div>
              </a>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default Web;
