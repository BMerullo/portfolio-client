import React from 'react'
import desk from '../images/desk.jpeg'

const WorkspaceModal = (props) => {
  const { closeWorkspace } = props
  return (
    <div className="modal-background">
      <div className="modal-container">
        <button
          className="close-btn"
          onClick={() => closeWorkspace(false)}
        ></button>

        <div className="modal-title">
          <h1>Work Space</h1>
        </div>
        <div className="modal-body">
          <p>- Here I am in my parents basement just pluggin' away</p>
        </div>
        <div className="modal-footer">
          <img className="modal-img" src={desk} alt="A desk" />
        </div>
      </div>
    </div>
  )
}

export default WorkspaceModal
