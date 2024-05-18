import React from "react";
import ShowingRecommendedProducts from "./recommendedProducts"
import {  RECOMMENDED_PRODUCT_TITLE, RECOMMENDED_PRODUCT_CONTENTS, RECOMMENDED_PRODUCT_TITLE2, RECOMMENDED_PRODUCT_CONTENTS2, SPECIAL_PRICE_DAY, SPECIAL_PRICE_DAY_CONTENTS } from "./Data";
import SpecialPriceDay from './specialPriceDay';

export default function EventSection() {
  return(
    <div>
      <ShowingRecommendedProducts 
        title={RECOMMENDED_PRODUCT_TITLE.title}
        subTitle={RECOMMENDED_PRODUCT_TITLE.subTitle}
        contents={RECOMMENDED_PRODUCT_CONTENTS}
      />
      <ShowingRecommendedProducts
        title={RECOMMENDED_PRODUCT_TITLE2.title}
        subTitle={RECOMMENDED_PRODUCT_TITLE2.subTitle}
        contents={RECOMMENDED_PRODUCT_CONTENTS2}
      />
      <SpecialPriceDay
        title={SPECIAL_PRICE_DAY.title}
        text1={SPECIAL_PRICE_DAY.text1}
        text2={SPECIAL_PRICE_DAY.text2}
        contents={SPECIAL_PRICE_DAY_CONTENTS}
      />
    </div>
  )
}