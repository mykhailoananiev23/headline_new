import React, { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import SampleData from '../data/sampleData.json';
import $, { event } from 'jquery';
import { json } from 'react-router-dom';
export default function Result({ data, SetallValue }) {
  const { sectionHeading, allTestimonial } = data;
  const { content } = SampleData;

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
  var Result_Text = "";

  
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
  ///// fior copy 
  
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = (e) => {
    var targetID = e.target.id ? e.target.id : e.target.parentNode.id;
    console.log(e.target.id);

    //reset
    $(".reply_color").css("color","#EEEEEE");
    $(".copy_button" ).css("background-color","#0788ff");
    $(".copy_button" ).css("color","#EEEEEE");
    $(".copy_button").css("border-color","#0788ff");


  
    //active
    $("." + targetID).css("color","gray");
    $("." + targetID).css("border-color","gray");

    $("#" + targetID).css("background-color","#040c16");
    $("#" + targetID).css("border-color","white");


    navigator.clipboard.writeText($("." + targetID).html())
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000); // Reset the "Copied" state after 2 seconds
      })
      .catch((err) => {
        console.error('Unable to copy to clipboard', err);
      });
  };




  return (
    <section className="section effect-section  gray-bg pb-5 pt-5 " style={{ innerHeight: 90, marginTop: 100 }}>

      <div className="container">
        <SectionHeading
          miniTitle={sectionHeading.miniTitle}
          title={sectionHeading.title}
          variant="text-center"
        />
        <div className="form-group ps-5 pe-5" dir='rtl'>
          {/* /////  one line/ */}
          <div >
          

            {
              content == null ? null :
                Object.entries(content).map((ele, id) =>( 
                  <div key={id}>
                     <h4  className='pt-5 pb-2' ><u style={{color:"#DDDDDD"}}>{ele[1]["title"]}</u></h4> 
                     {
                    Object.entries(content["headline"+ (id +1)]["answers"]).map((item, index) => (
                      item[1] = item[1].replace("A1", SetallValue["val1111"]),
                      item[1] = item[1].replace("A3", SetallValue["val3333"]),
                      item[1] = item[1].replace("A4", SetallValue["val4444"]),
                      item[1] = item[1].replace("A5", SetallValue["val5555"]),
                      item[1] = item[1].replace("A6", SetallValue["val6666"]),
                      item[1] = item[1].replace("A7", SetallValue["val7777"]),
                      item[1] = item[1].replace("A2", SetallValue["val2222"]),
                      item[1] = item[1].replace("A8", SetallValue["val8888"]),
                      <div key={index}>

                        <div className='pt-3'>
                          <div>
                           {parseInt(item[0])+1}. &nbsp; <label style={{color:"#EEEEEE"}} className={"reply_color form-label "+'ID' + id+'_'+index }> {item[1]}</label>
                            <button id={'ID' + id+'_'+index} onClick={(event) => handleCopyClick(event)} className=' px-btn  d-lg-inline-flex copy_button' >{  'Copy'}</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
               ))

            }
          </div>
        </div>
      </div>
    </section>
  );
}
