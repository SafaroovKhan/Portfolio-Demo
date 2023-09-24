import React from 'react'
import profilepic from "../Images/portfoliopp.png"

function About() {
  return (
    <>
        <div className="about">
            <div className="about-container">
                <div className="about-header">
                    <h1 className="about-tittle">About</h1>
                </div>
                <div className="about-content">
                    <article className="about-article">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</article>
                    <div className="about-details">
                        <div className="about-image-box">
                            <img src={profilepic} alt="" className="about-image" />
                        </div>
                        <div className="about-detail-box">
                            <h1 className="about-detail-header">Backend Developer</h1>
                            <p className="about-detail-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="about-detail-personal">
                                <div className="personal-partone">
                                    <figure className="partone-figure">
                                        <i className="fa-solid fa-chevron-right figure-icon"></i>
                                        <h2 className="partone-header">Doğum Tarixi:</h2>
                                        <p className="partone-txt">1 May 1995</p>
                                    </figure>
                                    <figure className="partone-figure">
                                        <i className="fa-solid fa-chevron-right figure-icon"></i>
                                        <h2 className="partone-header">Website:</h2>
                                        <p className="partone-txt">www.nahidimanli.az</p>
                                    </figure>
                                    <figure className="partone-figure">
                                        <i className="fa-solid fa-chevron-right figure-icon"></i>
                                        <h2 className="partone-header">Əlaqə:</h2>
                                        <p className="partone-txt">(+994)55-223-34-41</p>
                                    </figure>
                                    <figure className="partone-figure">
                                        <i className="fa-solid fa-chevron-right figure-icon"></i>
                                        <h2 className="partone-header">Şəhər:</h2>
                                        <p className="partone-txt">Baku</p>
                                    </figure>
                                </div>
                                <div className="personal-partone">
                                    <figure className="partone-figure">
                                        <i className="fa-solid fa-chevron-right figure-icon"></i>
                                        <h2 className="partone-header">Yaş:</h2>
                                        <p className="partone-txt">24</p>
                                    </figure>
                                    <figure className="partone-figure">
                                        <i className="fa-solid fa-chevron-right figure-icon"></i>
                                        <h2 className="partone-header">Təhsil:</h2>
                                        <p className="partone-txt">Bakalavr</p>
                                    </figure>
                                    <figure className="partone-figure">
                                        <i className="fa-solid fa-chevron-right figure-icon"></i>
                                        <h2 className="partone-header">Email:</h2>
                                        <p className="partone-txt">nahidimanli223@gmail.com</p>
                                    </figure>
                                    <figure className="partone-figure">
                                        <i className="fa-solid fa-chevron-right figure-icon"></i>
                                        <h2 className="partone-header">Employement:</h2>
                                        <p className="partone-txt">Busy</p>
                                    </figure>
                                </div>
                            </div>
                            <article className='about-article'>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About