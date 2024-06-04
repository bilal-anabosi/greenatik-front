import React from 'react'
import './About.css';

function About() {
return (
<div>
<section>
<div className='AA'>
  <div className="container h-100">
    <div className="row">
      <div className="col-md-6 align-self-center">
        <div className="text-center text-sm-center text-md-end mb-4">
          <h2 className="text-grad display-1 fw-bold mb-4">1+ Years</h2>
        </div>
      </div>
      <div className="col-md-6 align-self-center text-center text-sm-center text-md-start">
        <p className="pe-0 pe-lg-5">At GreeNatik, we are passionate about creating a sustainable future through innovative recycling solutions and promoting green practices.</p>
        <p className="pe-0 pe-lg-5">Our mission is to inspire and empower communities, businesses, and individuals to take an active role in preserving our planet for generations to come.</p> 
        <img src="/img/crayon-425.png" alt="..." className='im' />
      </div>
    </div>
  </div>
</div>
<div className="container">
<div className='aaa'>
<br/><br/><br/>
<div className="row mt-4">
  {/* feature 1 */}
  <div className="col-md-4">
    <div className="feature-box h-100 icon-primary">
      <div className="feature-box-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="currentColor" className="bi bi-recycle" viewBox="0 0 16 16">
  <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244z" />
</svg>
</div>
<br/>
      <h3 className="feature-box-title">Recycling Solutions:</h3>
      <p className="feature-box-desc">We offer comprehensive recycling programs for households, businesses, and municipalities. Our services include waste collection, sorting, and processing, ensuring that recyclable materials are transformed into valuable resources.</p>
    </div>
  </div>
  {/* feature 2 */}
  <div className="col-md-4">
    <div className="feature-box h-100 icon-primary">
      <div className="feature-box-icon"><svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="currentColor" className="bi bi-bag-heart" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
</svg>
</div>
<br/>
      <h3 className="feature-box-title">Educational Initiatives:</h3>
      <p className="feature-box-desc"> Education is key to driving change. We provide workshops, seminars, and resources to educate the public on the importance of recycling and how to incorporate green practices into their daily lives.</p>
    </div>
  </div>
  {/* feature 3 */}
  <div className="col-md-4">
    <div className="feature-box h-100 icon-primary">
      <div className="feature-box-icon"><svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="currentColor" className="bi bi-emoji-wink" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m1.757-.437a.5.5 0 0 1 .68.194.93.93 0 0 0 .813.493c.339 0 .645-.19.813-.493a.5.5 0 1 1 .874.486A1.93 1.93 0 0 1 10.25 7.75c-.73 0-1.356-.412-1.687-1.007a.5.5 0 0 1 .194-.68" />
</svg>
</div>
      <br/>
      <h3 className="feature-box-title">Green Products:</h3>
      <p className="feature-box-desc">Our range of eco-friendly products helps reduce the environmental footprint. From reusable bags to sustainable packaging, we provide alternatives that are both practical and planet-friendly.</p>
    </div>
  </div>
</div>
</div>
</div>
</section>
</div> 
)
}
export default About;