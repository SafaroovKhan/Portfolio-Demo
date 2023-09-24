import React from 'react'
import headerbackgruond from "../Images/mainpic.jpg"
function Header() {
  return (
    <>
      <div className="header">
        <img src={headerbackgruond} alt="background image " className="header-background" />
        <div className="header-container">
          <h1 className="header-name">Nahid Imanlı</h1>
          <p className="header-profession">I am a Backend Developer</p>
        </div>
      </div>
    </>
  )
}

export default Header