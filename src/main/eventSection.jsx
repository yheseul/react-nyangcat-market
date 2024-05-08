import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { EVENTSECTION } from "./Data";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { EVENTSECTIONTMAGE } from "./Data";
import { BsCart2 } from "react-icons/bs";

export default function EventSection() {
  return(
    <div>
      <EventSectionTitle 
        eventSectionTitle={EVENTSECTION.eventSectionTitle}
        eventSectionText={EVENTSECTION.eventSectionText}
      />
      <EventSectionSlider />
    </div>
  )
}

function EventSectionTitle({ eventSectionTitle, eventSectionText}) {
  return(
    <div className="eventSection">
      <a href=" " className="eventSectionLink">
        <span className="eventSectionTitle">{eventSectionTitle}</span>
        <MdOutlineArrowForwardIos className="eventSectionLinkImage"/>
      </a>
      <p className="eventSectionText">{eventSectionText}</p>
    </div>
  )
}

function EventSectionSlider() {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: false,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    slidesToScroll: 4,
    arrows: false
  };

  return(
    <Slider {...settings}>
      {EVENTSECTIONTMAGE.map((image) => (
        <div key={image.name}>
          <img
            src={image.url}
            alt={image.alt}
          />
          <button>
            <BsCart2 />
            <span>담기</span>
          </button>
          <div>{image.regularPrice}</div>
          <div>
            <span>{image.discountRate}</span>
            <span>{image.discountPrice}</span>
          </div>
        </div>
      ))}
    </Slider>
  )
}