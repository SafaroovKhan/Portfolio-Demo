import React from 'react'
import webimg01 from "../Images/webtest1.jpeg"
import webimg02 from "../Images/webtest2.jpeg"
import webimg03 from "../Images/webtest3.jpeg"
function Portfolio() {
  return (
    <>
        <div className="portfolio">
          <div className="portfolio-box">
              <h1 className="portfolio-header">Portfolio</h1>
              <article className="portfolio-txt">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas</article>
              <div className="portfolio-container">
                  <div className="portfolio-figure">
                    <img src={webimg01} alt="" className="portfolio-figure-img" />
                  </div>
                  <div className="portfolio-figure">
                    <img src={webimg02} alt="" className="portfolio-figure-img" />
                  </div>
                  <div className="portfolio-figure">
                    <img src={webimg03} alt="" className="portfolio-figure-img" />
                  </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Portfolio