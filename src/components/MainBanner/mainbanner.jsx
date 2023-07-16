import React from 'react'
import "../../styles/MainBanner.css"


export default function mainbanner() {
  return (
    <>
    <section className='Main-banner'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-9 col-lg-8 col-xl-8 col-xxl-8">
              <div className="content-box">
                <h2>Let’s Build a Great future for others together</h2>
                <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet maximus elementum. Praesent eu mi euismod neque commodo volutpat. Suspendisse id ipsum vel mauris consectetur.</p>
                <ul className='banner-btn'>
                  <li>
                    <a className='donate-btn' href="javascript:;">Donate Now</a>
                  </li>
                  <li>
                    <a className='video-btn' href="javascript:;">Watch Video</a>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
