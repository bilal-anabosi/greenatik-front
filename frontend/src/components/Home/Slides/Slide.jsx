import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Slide.css';

const Slide = () => {

const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
};

const handleImageClick = () => {
    setIndex(index === 2 ? 0 : index + 1);
};


  return (
    <main className="main-content">
      <section className="slideshow">
        <div className="slideshow-inner">
        <Carousel activeIndex={index} onSelect={handleSelect} pause="hover"  wrap={true} controls={false} >
            <Carousel.Item>
              <div className="slide-content">
                <div className="caption">
                  <div className="title1">Guilt Free <br/> Shopping</div>
                  <div className="text-container">
                  <div className="text1">
                  80+
                  <br/>
                  <div className="t"> eco friendly products </div>
                  </div>
                  <div className="textt">
                  100+
                  <br/>
                  <div className="tt"> Customers </div>
                  </div>
                  </div>
                  <form action="#" className="d-flex">
                        <div className="inputt-group">
                        <input className="form-control rounded-start" type="search" placeholder="What are you looking for?" aria-label="Search" />
                        <button className="btn btn-outline-secondary rounded-end" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} color='black' fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" /></svg>
                        </button>
                        </div>
                    </form>

                </div>
              </div>
              <div className="image-container">
                <img
                  src="/pics/images/sa1.png"
                  alt=""
                  className="image"
                  onClick={handleImageClick}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="slide-content">
                <div className="caption">
                  <div className="text2">Earth Day Every Day</div>
                  <div className="title2">
                  "By embracing recycling practices and promoting green initiatives, we can work together to protect our planet Earth for future generations."
                  </div>
                </div>
              </div>
              <div className="image-container">
                <img
                  src="/pics/images/sa2.png"
                  alt=""
                  className="image"
                  onClick={handleImageClick}
                />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="slide-content">
                <div className="caption">
                  <div className="title">Try Our GreeNatik Kit Risk-Free!</div>
                  <div className="text">
                    The Perfect Kit To  Kickstart Your 
Sustainable Journey
                  </div>
                </div>
              </div>
              <div className="image-container">
                <img
                  src="/pics/images/sa3.png"
                  alt=""
                  className="image"
                  onClick={handleImageClick}
                />
              </div>
            </Carousel.Item>
          </Carousel>
          </div>
      </section>
    </main>
  );
};

export default Slide;
