import React from "react";
import ShowingRecommendedProducts from "./recommendedProducts"
import {  RECOMMENDED_PRODUCT_TITLE, RECOMMENDED_PRODUCT_CONTENTS, RECOMMENDED_PRODUCT_TITLE2, RECOMMENDED_PRODUCT_CONTENTS2 } from "./Data";

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
    </div>
  )
}