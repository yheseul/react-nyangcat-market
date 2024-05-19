import React from "react";
import { useState, useRef } from "react";
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

function AddCart({ src, alt, productName, discountPrice, regularPrice }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  let discountPriceNumber = Number(discountPrice.replace(/,/g, ''));
  const priceTotalCalculation = useRef(discountPriceNumber);
  const [priceSum, setPriceSum] = useState(discountPrice);
  const modalBackground = useRef();

  const handleMinusBtnClick = () => setQuantity(prev => prev - 1);
  const handlePlusBtnClick = () => setQuantity(prev => prev + 1);
  const handlePriceSum = (e) => {
    if(e.target.className === 'minus-btn') {
      priceTotalCalculation.current = priceTotalCalculation.current - discountPriceNumber;
      const resultPrice = priceTotalCalculation.current.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return setPriceSum(resultPrice);
    }
    if(e.target.className === 'plus-btn') {
      priceTotalCalculation.current = priceTotalCalculation.current + discountPriceNumber;
      const resultPrice = priceTotalCalculation.current.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return setPriceSum(resultPrice);
    }
  }

  return(
    <div>
      <div className="addWrap" onClick={() => setModalOpen(true)}>
        <button className="addButton">
          <BsCart2 
            className="addButtonImage"
          />
          담기
        </button>
      </div>
      {
        modalOpen &&
          <div className="modal-container" ref={modalBackground} onClick={e => {
          if(e.target === modalBackground.current) {
            setModalOpen(false);
          }
        }}>
            <div className="modal-content-wrap">
              <div className="modal-content">
                <div className="modal-title-wrap">
                  <img
                    src={src}
                    alt={alt}
                    className="modal-img"
                  />
                  <div className="modal-title-box">
                    <div className="modal-title">{productName}</div>
                  </div>
                </div>
                <div className="dividing-line"></div>
                <div className="modla-content-wrap">
                  <span className="modla-description">{productName}</span>
                  <div className="modal-product-quantity">
                    <div className="modal-price">
                      <span className="modal-discount-price">{discountPrice}원</span>
                      <span className="modal-regular-price">{regularPrice}원</span>
                    </div>
                    <div className="quantity-btn-wrap">
                      <div className="quantity-btn">
                        <button
                          className="minus-btn"
                          onClick={e => {
                            handleMinusBtnClick();
                            handlePriceSum(e);
                          }}
                        >
                          -
                        </button>
                        <div className="sum-total">{quantity}</div>
                        <button
                          className="plus-btn"
                          onClick={e => {
                            handlePlusBtnClick();
                            handlePriceSum(e);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                  <div className="dividing-line"></div>
                  <div className="modal-product-sum">
                    <span className="sum">합계</span>
                    <span className="product-sum">{priceSum}원</span>
                  </div>
                  <div className="modal-btn">
                    <button className="modal-close-btn" onClick={() => setModalOpen(false)}>취소</button>
                    <button className="modal-add-btn">장바구니 담기</button>
                  </div>
              </div>
            </div>
          </div>
      }
    </div>
  );
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
            <img
              src={content.url}
              alt={content.alt}
              className="recommendedProductLink"
            />
            <AddCart
              src={content.url}
              alt={content.alt}
              productName={content.productName}
              discountPrice={content.discountPrice}
              regularPrice={content.regularPrice}
            />
            <div className="recommendedProductContent">
              <h3 className="recommendedProductName">{content.productName}</h3>
              <div className="priceBoxWrap">
                <div className="priceBox">
                  <div className="regularPrice">{content.regularPrice}원</div>
                  <div>
                  <div className="discount">
                    <span className="discountRate">{content.discountRate}</span>
                    <span className="discountPrice">{content.discountPrice}원</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      ))}
    </Slider>
  )
}