import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import ProjectFormComponent from "../components/ProjectFormComponent";
import axios from "axios";

const UpdateWeb = (props) => {
  const { stateChange, setStateChange } = props;
  const { id } = useParams();
  const submitLabal = "update";
  const navigate = useNavigate();
  const [updatedWeb, setUpdatedWeb] = useState({
    title: "",
    description: "",
    url: "",
    image: "",
  });

  const handleChange = (e) => {
    setUpdatedWeb({
      ...updatedWeb,
      [e.target.name]: e.target.value,
    });
  };

  const imageChange = (e) => {
    setUpdatedWeb({ ...updatedWeb, image: e.target.files[0] });
    console.log(updatedWeb.image);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/web/${id}`)
      .then((res) => {
        console.log(res.data);
        setUpdatedWeb(res.data);
        console.log({ updatedWeb });
      })
      .catch((err) => console.log(err));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", updatedWeb.image);
    formData.append("title", updatedWeb.title);
    formData.append("url", updatedWeb.url);
    formData.append("description", updatedWeb.description);
    console.log(updatedWeb.image, "single project?");
    // setUpdatedProject(formData);

    axios
      .put(`http://localhost:8000/api/web/${id}`, formData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setStateChange(stateChange + 1);
        navigate(`/admn-portal/${localStorage.userId}`);
        console.log(updatedWeb);
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
      .delete(`http://localhost:8000/api/web/${id}`)
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
            <h2>Update {updatedWeb.title}</h2>

            <div>
              <button
                className="admin-btn"
                id="delete-btn"
                onClick={(e) => deleteFilter(updatedWeb._id)}
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
              project={updatedWeb}
              setProjectList={setUpdatedWeb}
              submitLabel={submitLabal}
              imageChange={imageChange}
            />
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default UpdateWeb;
