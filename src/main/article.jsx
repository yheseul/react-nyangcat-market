import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ARTICLE } from "./Data";

export default function Article() {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    slidesToScroll: 1,
    arrows: false
  };

  return(
    <Slider {...settings}>
      {ARTICLE.map((article) => (
        <div key={article.name} className="flex justify-center items-center">
          <img
            src={article.url}
            alt={article.alt}
            className="max-w-full mx-auto"
          />
        </div>
      ))}
    </Slider>
  )
}