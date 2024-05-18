import React from "react";
import DayCountDownTimer from './dayCountDownTimer';
import { BsCart2 } from "react-icons/bs";

export default function SpecialPriceDay({ title, text1, text2, contents }) {
  return(
    <div className="specialPriceDay">
      <div className="specialPriceDay_desc">
        <h2 className="specialPriceDay_title">{title}</h2>
        <h3 className="specialPriceDay_text1">{text1}</h3>
        <DayCountDownTimer />
        <p className="specialPriceDay_text2">{text2}</p>
      </div>
      <div className="specialPriceDay_product">
        <SpecialPriceDayProduct
          contents={contents}
        />
      </div>
    </div>
  )
}

function SpecialPriceDayProduct({ contents }) {
  return(
    contents.map((content) => (
      <div className="special_price_day_product_wrap" >
        <div
          key={content.name}
          className="special_price_day_product"
        >
          <a
            href=" "
            className="special_price_day_product_link"
          >
            <img
              src={content.url}
              alt={content.alt}
            />
            <div className="special_price_day_add_wrap">
              <button className="special_price_day_add_btn">
                <BsCart2 
                  className="special_price_day_add_btn_img"
                />
                담기
              </button>
            </div>
            <div className="special_price_day_product_content">
              <div className="special_price_day_product_dscription">{content.description}</div>
              <h3 className="special_price_day_product_name">{content.productName}</h3>
              <div className="special_price_day_product_price_box_wrap">
                <div className="special_price_day_product_price_box">
                  <div className="special_price_day_product_regular_price">{content.regularPrice}</div>
                  <div>
                  <div className="special_price_day_product_discount">
                    <span className="special_price_day_product_discount_rate">{content.discountRate}</span>
                    <span className="special_price_day_product_discount_price">{content.discountPrice}</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
 
    ))
  )
}