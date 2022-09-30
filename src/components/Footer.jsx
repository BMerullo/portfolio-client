import { Link } from "react-router-dom";
import linkedinImg from "../images/logos/linkedin-img.png";
import githubImg from "../images/logos/github-img.png";
import logo from "../images/logos/logo.png";

const Footer = (props) => {
  const email = "bmerullo85@gmail";

  return (
    <footer>
      <div>
        <Link to="/">
          <img className="footer-logo" src={logo} alt="logo" />
        </Link>
        <p>{email}</p>
      </div>
      <div className="footer-link-container">
        <div>
          <ul className="list footer-list">
            <label className="list-label">Explore</label>
            <li>
              <Link className="nav-link" id="explore-link" to="/">
                about
              </Link>
            </li>
            <li>
              <Link className="nav-link" id="explore-link" to="/projects">
                projects
              </Link>
            </li>
            <li>
              {/* <Link className="nav-link" id="explore-link" to="/web">
              web
            </Link> */}
            </li>
          </ul>
        </div>
        <div className="contact-link-container">
          <ul className="list footer-list">
            <label className="list-label">Connect</label>
            <div className="footer-link-flex">
              <li>
                <a
                  className="nav-link"
                  id="connect-link"
                  href="https://www.linkedin.com/in/bobmerullo/"
                >
                  <img
                    className="footer-img"
                    src={linkedinImg}
                    alt="linkedin logo"
                  />{" "}
                  linkedin
                </a>
              </li>
              {/* <img className="footer-img" src={linkedinImg} alt="linkedin logo" /> */}
            </div>
            <div className="footer-link-flex">
              <li>
                <a
                  className="nav-link footer-link-flex"
                  id="connect-link"
                  href="https://github.com/BMerullo"
                >
                  <img
                    className="footer-img"
                    src={githubImg}
                    alt="github logo"
                  />{" "}
                  github
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
