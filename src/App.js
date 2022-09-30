import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import LandingPage from "./pages/LandingPage";
import Web from "./pages/Web";
import Projects from "./pages/Projects";
import AdminLogin from "./pages/AdminLogin";
import AdminPortal from "./pages/AdminPortal";
import ProjectForm from "./pages/ProjectForm";
import UpdateProject from "./pages/UpdateProject";
import WebForm from "./pages/WebForm";
import UpdateWeb from "./pages/UpdateWeb";
import axios from "axios";

function App() {
  const title = "Bob Merullo";
  const [projectList, setProjectList] = useState([]);
  const [webList, setWebList] = useState([]);
  const [stateChange, setStateChange] = useState(1);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/projects/`)
      .then((res) => {
        console.log(res.data);
        setProjectList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [stateChange]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/web/`)
      .then((res) => {
        console.log(res.data);
        setWebList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [stateChange]);

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/" element={<AboutMe title={title} />} />
        <Route path="/web" element={<Web title={title} webList={webList} />} />
        <Route
          path="/projects"
          element={<Projects title={title} projectList={projectList} />}
        />
        <Route path="/admn-login" element={<AdminLogin title={title} />} />
        <Route
          path="/admn-portal/:id"
          element={
            <AdminPortal
              title={title}
              projectList={projectList}
              webList={webList}
            />
          }
        />
        <Route
          path="/project-form/:id"
          element={<ProjectForm title={title} />}
        />
        <Route path="/web-form/:id" element={<WebForm title={title} />} />
        <Route
          path="/update-project/:id"
          element={
            <UpdateProject
              title={title}
              stateChange={stateChange}
              setStateChange={setStateChange}
            />
          }
        />
        <Route
          path="/update-web/:id"
          element={
            <UpdateWeb
              title={title}
              stateChange={stateChange}
              setStateChange={setStateChange}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
