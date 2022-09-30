import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import bob from "../images/bob.JPG";
import TechModal from "../components/TechModal";
import WorkspaceModal from "../components/WorkspaceModal";
import PhysicalModal from "../components/PhysicalModal";
import React, { useState } from "react";

const AboutMe = (props) => {
  const [openTech, setOpenTech] = useState(false);
  const [openWorkspace, setOpenWorkspace] = useState(false);
  const [openPhysical, setOpenPhysical] = useState(false);

  const { title } = props;

  return (
    <Layout>
      {openTech && <TechModal closeTech={setOpenTech} />}
      {openWorkspace && <WorkspaceModal closeWorkspace={setOpenWorkspace} />}
      {openPhysical && <PhysicalModal closePhysical={setOpenPhysical} />}
      <main className="content-body">
        <section className="about-background banner">
          <div className="top-banner-title">
            <h1 className="page-title">Web Developer</h1>
            {/* <h5 className="eyebrow">Web Developer in the Denver Area</h5> */}
          </div>
        </section>

        <section className="content">
          <p className="skills-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="carousel-cont">
            <Carousel />
          </div>
        </section>

        <section className="flex-content" id="modal-container">
          <button
            className="tech-btn"
            onClick={() => {
              setOpenTech(true);
            }}
          ></button>
          <button
            className="workspace-btn"
            onClick={() => {
              setOpenWorkspace(true);
            }}
          ></button>
          <button
            className="physical-btn"
            onClick={() => {
              setOpenPhysical(true);
            }}
          ></button>
        </section>
      </main>
    </Layout>
  );
};

export default AboutMe;
