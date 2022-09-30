import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div style={styleSheet}>
      <h1>Bob Merullo</h1>
      <p style={pStyle}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, totam
        esse distinctio corporis asperiores vel repellat molestias ducimus vitae
        recusandae velit accusamus in ab quam facilis ipsa? In, saepe dolores?
      </p>
      <Link style={pStyle} to="/aboutme">
        click here
      </Link>
    </div>
  );
};

export default LandingPage;

const styleSheet = {
  background: "blue",
  color: "white",
  pading: "50px",
};

const pStyle = {
  color: "red",
};
