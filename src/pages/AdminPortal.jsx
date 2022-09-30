import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../components/Layout";
import axios from "axios";

const AdminPortal = (props) => {
  const { projectList, webList } = props;
  const navigate = useNavigate();
  const btnLink = [
    `/project-form/${localStorage.userId}`,
    `/web-form/${localStorage.userId}`,
  ];

  const logout = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/users/logout",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        localStorage.removeItem("userId");
        navigate("/admn-login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigateTo = (btn) => {
    console.log("project button");
    navigate(btn);
  };
  return (
    <Layout>
      <main className="content-body">
        <div className="about-background banner">
          <div className="top-banner-title-admin">
            <h1 className="page-title">admin portal</h1>
            <div>
              <button
                className="admin-btn"
                onClick={() => navigateTo(btnLink[0])}
              >
                new project
              </button>
              <button
                className="admin-btn"
                onClick={() => navigateTo(btnLink[1])}
              >
                new web
              </button>
              <button className="admin-btn" onClick={logout}>
                logout
              </button>
            </div>
          </div>
          <section className="project-list-container">
            <article className="project-list">
              <h3>Projects</h3>
              <div>
                {projectList.map((project, index) => (
                  <div key={project._id}>
                    <Link
                      className="update-links"
                      to={`/update-project/${project._id}`}
                      state={{ id: project._id, title: project.title }}
                    >
                      <h5>{project.title}</h5>
                    </Link>
                  </div>
                ))}
              </div>
            </article>
            <article className="project-list">
              <h3>Web</h3>
              <div>
                {webList.map((web, index) => (
                  <div key={web._id}>
                    <Link
                      className="update-links"
                      to={`/update-web/${web._id}`}
                    >
                      <h5>{web.title}</h5>
                    </Link>
                  </div>
                ))}
              </div>
            </article>
          </section>
          <div className="form-flex"></div>
        </div>
      </main>
    </Layout>
  );
};

export default AdminPortal;
