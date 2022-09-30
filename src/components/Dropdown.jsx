import React, { useState } from 'react'

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="dropdown">
      {/* <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        Choose one
      </div> */}
      {isActive && (
        <div className="dropdown-content">
          <div className="dropdown-item">
            <a href="https://www.linkedin.com/in/bobmerullo/">linkedin</a>
          </div>
          <div className="dropdown-item">
            <a href="https://github.com/BMerullo">github</a>
          </div>
          <div className="dropdown-item">email</div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
