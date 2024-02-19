import React, { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import Slider from 'react-slick';
import { Carousel } from 'react-bootstrap';

export default function Testimonial({ data }) {
  const { sectionHeading, allTestimonial } = data;
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3); // Change 3 to the total number of slides
    }, 5000); // Set the interval in milliseconds (3 seconds in this example)

    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
    <section className="section effect-section  gray-bg pb-5 pt-5" id='TESTIMONIAL' style={{innerHeight: 90}}>
      <div className="effect-3">
        <img src="/images/effect-3.svg" title alt="" />
      </div>
      <div className="effect-4">
        <img src="/images/effect-4.svg" title alt="" />
      </div>
      <div className="container">
        <SectionHeading
          miniTitle={sectionHeading.miniTitle}
          title={sectionHeading.title}
          variant="text-center"
        />
        <Carousel activeIndex={index} onSelect={handleSelect} >


          {allTestimonial?.map((item, index) => (
              <Carousel.Item key={index} >
            <div >

                <div className="testimonial-box">
                  <div className="t-user">
                    <img src={item.avatarImg} alt="Avatar" />
                  </div>
                  <div className="t-text">{item.reviewText}</div>
                  <div className="t-person">
                    <h6>{item.avatarName}</h6>
                    <span>{item.avatarCompany}</span>
                  </div>
                </div>
            </div>
              </Carousel.Item>
          ))}

        </Carousel>
      </div>
    </section>
  );
}
