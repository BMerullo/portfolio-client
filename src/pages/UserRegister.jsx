import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const register = (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("username", user.username);
    // formData.append("password", user.password);
    // formData.append("confirmPassword", user.confirmPassword);

    axios
      .post(
        "https://bob-merullo-server.herokuapp.com/api/users/register",
        user,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("userId", res.data.userId);
        setLocalStorageId(res.data.userId);
        navigate(`/admn-portal/${localStorage.userId}`);
      })
      .catch((err) => {
        console.log(err, "this is the error");
      });
  };
  return (
    <Layout>
      <div>
        <form action="" onSubmit={register}>
          <label>username</label>
          <div>
            <input
              className="input"
              type="text"
              name="username"
              defaultValue={user.username}
              placeholder="username"
              onChange={handleChange}
            />
          </div>
          <label>password</label>
          <div>
            <input
              className="input"
              type="password"
              name="password"
              value={user.password}
              placeholder="password"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="input"
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              placeholder="confirm password"
              onChange={handleChange}
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
    </Layout>
  );
};

export default UserRegister;
