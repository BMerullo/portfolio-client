import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import ProjectFormComponent from "../components/ProjectFormComponent";
import axios from "axios";

const UpdateProject = (props) => {
  const { stateChange, setStateChange } = props;
  const { id } = useParams();
  const submitLabal = "update";
  const navigate = useNavigate();
  const [updatedProject, setUpdatedProject] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setUpdatedProject({
      ...updatedProject,
      [e.target.name]: e.target.value,
    });
  };

  const imageChange = (e) => {
    setUpdatedProject({ ...updatedProject, image: e.target.files[0] });
    console.log(updatedProject.image);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/projects/${id}`)
      .then((res) => {
        console.log(res.data);
        setUpdatedProject(res.data);
        console.log({ updatedProject });
      })
      .catch((err) => console.log(err));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", updatedProject.image);
    formData.append("title", updatedProject.title);
    formData.append("url", updatedProject.url);
    formData.append("description", updatedProject.description);
    console.log(updatedProject.image, "single project?");
    // setUpdatedProject(formData);

    axios
      .put(`http://localhost:8000/api/projects/${id}`, formData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setStateChange(stateChange + 1);
        navigate(`/admn-portal/${localStorage.userId}`);
        console.log(updatedProject);
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

  const deleteFilter = (setupId) => {
    axios
      .delete(`http://localhost:8000/api/projects/${id}`)
      .then((res) => {
        console.log(res.data);
        setStateChange(stateChange + 1);
        navigate(`/admn-portal/${localStorage.userId}`);
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
      <main className="content-body">
        <section className="projects-background banner">
          <div className="top-banner-title-admin">
            <h2>Update {updatedProject.title}</h2>

            <div>
              <button
                className="admin-btn"
                id="delete-btn"
                onClick={(e) => deleteFilter(updatedProject._id)}
              >
                delete
              </button>
              <button className="admin-btn" onClick={() => navigateTo()}>
                admin
              </button>
              <button className="admin-btn" onClick={logout}>
                logout
              </button>
            </div>
          </div>
        </section>
        <section className="flex">
          <article>
            <ProjectFormComponent
              submitHandler={submitHandler}
              handleChange={handleChange}
              project={updatedProject}
              setProjectList={setUpdatedProject}
              submitLabel={submitLabal}
              imageChange={imageChange}
            />
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default UpdateProject;
