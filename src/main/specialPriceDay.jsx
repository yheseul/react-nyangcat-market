import { useState, useRef } from "react";
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
      <div className="special_price_day_add_wrap" onClick={() => setModalOpen(true)}>
        <button className="special_price_day_add_btn">
          <BsCart2 
            className="special_price_day_add_btn_img"
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

function SpecialPriceDayProduct({ contents }) {
  return(
    contents.map((content) => (
      <div className="special_price_day_product_wrap" >
        <div
          key={content.name}
          className="special_price_day_product"
        >
            <img
              src={content.url}
              alt={content.alt}
              className="special_price_day_product_img"
            />
            <AddCart
              src={content.url}
              alt={content.alt}
              productName={content.productName}
              discountPrice={content.discountPrice}
              regularPrice={content.regularPrice}
            />
            <div className="special_price_day_product_content">
              <div className="special_price_day_product_dscription">{content.description}</div>
              <h3 className="special_price_day_product_name">{content.productName}</h3>
              <div className="special_price_day_product_price_box_wrap">
                <div className="special_price_day_product_price_box">
                  <div className="special_price_day_product_regular_price">{content.regularPrice}원</div>
                  <div>
                  <div className="special_price_day_product_discount">
                    <span className="special_price_day_product_discount_rate">{content.discountRate}</span>
                    <span className="special_price_day_product_discount_price">{content.discountPrice}원</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    ))
  )
}