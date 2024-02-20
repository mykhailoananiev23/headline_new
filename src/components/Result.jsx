import React, { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import SampleData from '../data/sampleData.json';
import $, { event } from 'jquery';
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

  if (SetallValue != null) {

    for (let i = 1; i < 6; i++) {
      // Generate a random number between 1 and 100
      const randomNumber = Math.floor(Math.random() * 119) + 1;
      Result_Text += i + ". " + content['headline' + randomNumber] + "\n";
    }

    Result_Text = Result_Text.replace(/1111/g, SetallValue["val1111"]);
    Result_Text = Result_Text.replace(/2222/g, SetallValue["val2222"]);
    Result_Text = Result_Text.replace(/3333/g, SetallValue["val3333"]);
    Result_Text = Result_Text.replace(/4444/g, SetallValue["val4444"]);
    Result_Text = Result_Text.replace(/5555/g, SetallValue["val5555"]);
    Result_Text = Result_Text.replace(/6666/g, SetallValue["val6666"]);
    Result_Text = Result_Text.replace(/7777/g, SetallValue["val7777"]);
    Result_Text = Result_Text.replace(/8888/g, SetallValue["val8888"]);
  }
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
                     <h4 className='pt-5 pb-2' >-<u>{ele[1]["title"]}</u></h4> 
                     {
                    Object.entries(content["headline"+ (id +1)]["answers"]).map((item, index) => (
                      item[1] = item[1].replace(/1111/g, SetallValue["val1111"]),
                      item[1] = item[1].replace(/3333/g, SetallValue["val3333"]),
                      item[1] = item[1].replace(/4444/g, SetallValue["val4444"]),
                      item[1] = item[1].replace(/5555/g, SetallValue["val5555"]),
                      item[1] = item[1].replace(/6666/g, SetallValue["val6666"]),
                      item[1] = item[1].replace(/7777/g, SetallValue["val7777"]),
                      item[1] = item[1].replace(/8888/g, SetallValue["val8888"]),
                      <div key={index}>

                        <div className='pt-3'>
                          <div>
                           {item[0]}. &nbsp; <label className={"form-label "+'ID' + id+'_'+index }> {item[1]}</label>
                            <button id={'ID' + id+'_'+index} onClick={(event) => handleCopyClick(event)} className='px-btn  d-lg-inline-flex copy_button' >{  'Copy'}</button>
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
