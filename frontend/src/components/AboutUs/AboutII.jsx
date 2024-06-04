import React from 'react';
import './About.css';

function AboutII() {
    return (
        <div className ="container">
            <div className='UU'>
                <section className="why-us p-0">
                    <div className="container">
                        <div className="row">
                            {/* why us left */}
                            <div className="col-lg-6 d-none d-lg-block p-0" style={{ backgroundImage: 'url(/img/05.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            </div>
                            {/* why us right */}
                            <div className="col-lg-6 col-md-12 bg-dark px-4 py-5 p-lg-5 text-white">
                                <div className="h-100">
                                    <div className="title text-start p-0">
                                        <span className="pre-title">Ok! So Who We Are?</span>
                                        <h2 className="text-white">GreeNatik is a dedicated team of environmental enthusiasts, engineers, and educators committed to making a positive impact on the environment. </h2>
                                        <p>With years of experience in the recycling and sustainability sector, we bring expertise and innovation to every project we undertake. In addition to our commitment to environmental initiatives, we are proud to offer a range of eco-friendly products.</p>
                                    </div>
                                    <div className="row">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row testimonials">
                            {/* testimonials left */}
                            <div className="col-lg-6 col-md-12 bg-light px-4 py-5 p-lg-5">
                                <div className="h-100">
                                    <div className="title text-center p-0">
                                        <span className="pre-title">Ok! So why our client trust us?</span>
                                        <h2>From reusable bags to sustainable packaging solutions, our products are carefully curated to align with our mission of promoting sustainability and reducing environmental impact.</h2>
                                        <hr />
                                        <h1>With GreeNatik, you not only support our efforts in recycling and sustainability but also contribute to creating a greener and more sustainable future through your everyday choices.</h1>
                                    </div>
                                </div>
                            </div>
                            {/* testimonials right */}
                            <div className="col-lg-6 d-none d-lg-block p-0" style={{ backgroundImage: 'url(/img/08.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AboutII;