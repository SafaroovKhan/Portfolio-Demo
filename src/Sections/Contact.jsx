import React from 'react'

function Contact() {
  return (
    <>
        <div className="contact">
            <div className="contact-container">
                <h1 className="contact-header">Contact</h1>
                <article className='contact-text'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</article>
                <div className="contact-box">
                    <div className="contact-box-partone">
                        <div className="partone-content">
                            <i class="fa-solid fa-location-dot contact-icon"></i>
                            <div>
                                <h1 className="contact-subheader">Location:</h1>
                                <p className="contact-detail-txt">A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>
                        <div className="partone-content">
                            <i class="fa-solid fa-envelope contact-icon"></i>
                            <div>
                                <h1 className="contact-subheader">Email:</h1>
                                <p className="contact-detail-txt">info@example.com</p>
                            </div>
                        </div>
                        <div className="partone-content">
                            <i class="fa-solid fa-phone contact-icon"></i>
                            <div>
                                <h1 className="contact-subheader">Phone:</h1>
                                <p className="contact-detail-txt">+1 5589 55488 55s</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-box-parttwo">
                        <form action="" className="contact-form">
                            <div className='form-top'>
                                <div  className='form-top-box'>
                                    <label htmlFor="" className="form-label">Your Name</label>
                                    <input type="text" className="form-input-top" />
                                </div>
                                <div className='form-top-box'>
                                    <label htmlFor="" className="form-label">Your Email</label>
                                    <input type="text" className="form-input-top" />
                                </div>
                            </div>
                            <div className='form-bottom'>
                                <label htmlFor="" className="form-label">Subject</label>
                                <input type="text" className='form-input-bottom' />
                            </div>
                            <div className='form-bottom'>
                                <label htmlFor="" className="form-label">Message</label>
                                <textarea rows={4} type="text" className="form-input-message" />
                            </div>
                            <button className="contact-button">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact