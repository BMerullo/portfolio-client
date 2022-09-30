import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import ProjectFormComponent from "../components/ProjectFormComponent";
import axios from "axios";

const ProjectForm = (props) => {
  const navigate = useNavigate();
  const submitLabel = "Submit";
  const [project, setProject] = useState({
    title: "",
    description: "",
    url: "",
    image: "",
  });
  console.log(project.image);

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const imageChange = (e) => {
    setProject({ ...project, image: e.target.files[0] });
    console.log(project.image);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", project.image);
    formData.append("title", project.title);
    formData.append("url", project.url);
    formData.append("description", project.description);

    console.log(project.image);

    axios
      .post("http://localhost:8000/api/projects", formData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        navigate(`/admn-portal/${localStorage.userId}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  const navigateTo = () => {
    console.log("project button");
    navigate(`/admn-portal/${localStorage.userId}`);
  };

  return (
    <Layout>
      <div className="content-body">
        <div className="projects-background banner">
          <div className="top-banner-title-admin">
            <h1 className="page-title">new project</h1>
            <div>
              <button className="admin-btn" onClick={() => navigateTo()}>
                admin
              </button>
              <button className="admin-btn" onClick={logout}>
                logout
              </button>
            </div>
          </div>
        </div>
        <ProjectFormComponent
          submitHandler={submitHandler}
          handleChange={handleChange}
          project={project}
          submitLabel={submitLabel}
          imageChange={imageChange}
        />
      </div>
    </Layout>
  );
};

export default ProjectForm;
