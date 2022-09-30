import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = (props) => {
  // const { id } = props;
  const [localStorageId, setLocalStorageId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/users/login",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res, "res");
        console.log(res.data, "here is the res.data");
        localStorage.setItem("userId", res.data.userId);
        setLocalStorageId(res.data.userId);

        navigate(`/admn-portal/${localStorage.userId}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <div className="content-body">
        <div className="about-background banner">
          <div className="top-banner-title">
            <h1 className="page-title">Login</h1>
          </div>
          <div className="form-flex">
            <form action="" onSubmit={login}>
              <label>username</label>
              <div>
                <input
                  className="input"
                  type="text"
                  name="title"
                  value={username}
                  placeholder="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <label>password</label>
              <div>
                <input
                  className="input"
                  type="password"
                  name="password"
                  value={password}
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-flex">
                <button
                  className="submit-btn"
                  type="submit"
                  // onSubmit={(e) => login}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="form-flex"></div>
        <div className="content"></div> */}
      </div>
    </Layout>
  );
};

export default AdminLogin;
