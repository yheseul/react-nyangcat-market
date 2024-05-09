import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";

export default function ShowingRecommendedProducts({ title, subTitle, contents }){
  return(
    <div className="recommendedProducts">
      <RecommendedProductTitle
        title={title}
        subTitle={subTitle}
      />
      <RecommendedProductSlider
        contents={contents}
      />
    </div>
  )
}

function RecommendedProductTitle({ title, subTitle }) {
  return(
    <div className="recommendedProductsTitleWrap">
      <a href=" " className="recommendedProductsLink">
        <span className="recommendedProductsTitle">{title}</span>
        <MdOutlineArrowForwardIos className="recommendedProductsArrow"/>
      </a>
      <p className="recommendedProductsSubTitle">{subTitle}</p>
    </div>
  )
}

function RecommendedProductSlider({ contents }) {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: false,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    slidesToScroll: 4,
    arrows: false
  };

  return(
    <Slider
      {...settings}
      className="recommendedProductSlider"
    >
      {contents.map((content) => (
        <div
          key={content.name}
          className="recommendedProduct"
        >
          <a
            href=" "
            className="recommendedProductLink"
          >
            <img
              src={content.url}
              alt={content.alt}
            />
            <div className="addWrap">
              <button className="addButton">
                <BsCart2 
                  className="addButtonImage"
                />
                담기
              </button>
            </div>
            <div className="recommendedProductContent">
              <h3 className="recommendedProductName">{content.productName}</h3>
              <div className="priceBoxWrap">
                <div className="priceBox">
                  <div className="regularPrice">{content.regularPrice}</div>
                  <div>
                  <div className="discount">
                    <span className="discountRate">{content.discountRate}</span>
                    <span className="discountPrice">{content.discountPrice}</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </Slider>
  )
}