import React, { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import Slider from 'react-slick';
import { Carousel } from 'react-bootstrap';

export default function Result({ data, result_text, SetallValue }) {
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
  var Result_Text="";
   
  if (result_text != null) {
  
    for (let i = 0; i < 5; i++) {
      // Generate a random number between 1 and 100
      const randomNumber = Math.floor(Math.random() * 119) + 1;
      Result_Text+=result_text['answer_' + randomNumber]+"\n";
    }
  }
  Result_Text=Result_Text.replace(/1111/g,SetallValue["val1111"]);
  Result_Text=Result_Text.replace(/2222/g,SetallValue["val2222"]);
  Result_Text=Result_Text.replace(/3333/g,SetallValue["val3333"]);
  Result_Text=Result_Text.replace(/4444/g,SetallValue["val4444"]);
  Result_Text=Result_Text.replace(/5555/g,SetallValue["val5555"]);
  Result_Text=Result_Text.replace(/6666/g,SetallValue["val6666"]);
  Result_Text=Result_Text.replace(/7777/g,SetallValue["val7777"]);
  Result_Text=Result_Text.replace(/8888/g,SetallValue["val8888"]);
  
console.log(SetallValue["val1111"]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 11); // Change 3 to the total number of slides
    }, 5000); // Set the interval in milliseconds (3 seconds in this example)

    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
    <section className="section effect-section  gray-bg pb-5 pt-5 " style={{ innerHeight: 90, marginTop: 100 }}>
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
                  <div className="t-text">
                    {Result_Text.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>

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
