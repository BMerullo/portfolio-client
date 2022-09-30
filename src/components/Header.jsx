import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logos/logo.png";
import NavBar from "../components/NavBar";

const Header = (props) => {
  // const { title } = props
  const { nav } = props;

  return (
    <header>
      <h1 className="title">
        <Link to="/">
          <img className="bob-logo" src={logo} alt="bob logo" />
        </Link>
      </h1>
      <NavBar />
    </header>
  );
};

export default Header;
