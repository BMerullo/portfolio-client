import React from "react";
import computer from "../images/computer.webp";

const TechModal = (props) => {
  const { closeTech } = props;
  return (
    <div className="modal-background">
      <div className="modal-container">
        <button className="close-btn" onClick={() => closeTech(false)}></button>

        <div className="modal-title">
          <h1>Equipment</h1>
        </div>
        <div className="modal-body">
          <p>- Top of the line computer</p>
          <p>- Fax machine for quick professional communication</p>
        </div>
        <div className="modal-footer">
          <img className="modal-img" src={computer} alt="A computer" />
        </div>
      </div>
    </div>
  );
};

export default TechModal;
