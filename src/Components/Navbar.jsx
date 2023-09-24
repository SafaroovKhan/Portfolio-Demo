import React from 'react'
import profileimg from "../Images/portfoliopp.png"

function Navbar() {
  return (
    <>
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-content">
                    <img src={profileimg} alt="profile image" className='profile-img' />
                    <h1 className='navbar-header'>Nahid Imanlı</h1>
                    <div className="navbar-icons">
                        <a href="" className="navbar-icon"><i className="fa-brands fa-twitter "></i></a>
                        <a href="" className="navbar-icon"><i className="fa-brands fa-github "></i></a>
                        <a href="" className="navbar-icon"><i className="fa-brands fa-instagram "></i></a>
                        <a href="" className="navbar-icon"><i className="fa-brands fa-linkedin "></i></a>
                    </div>
                </div>
                <div className="navigation">
                    <div className="navigation-links">
                        <a href="" className="nav-link"><i className="fa-solid icon-link fa-house"></i> Ana Səhifə</a>
                        <a href="" className="nav-link"><i className="fa-solid icon-link fa-user"></i> Haqqımda</a>
                        <a href="" className="nav-link"><i className="fa-solid icon-link fa-file"></i> CV</a>
                        <a href="" className="nav-link"><i className="fa-solid icon-link fa-folder"></i> Portfolio</a>
                        <a href="" className="nav-link"><i className="fa-solid icon-link fa-pen"></i> Bloq</a>
                        <a href="" className="nav-link"><i className="fa-solid icon-link fa-envelope"></i> Əlaqə</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar