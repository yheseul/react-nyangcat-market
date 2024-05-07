import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function Section() {
  return(
    <div className="productArticle">
      <EventSection />
    </div>
  )
}

function EventSection() {
  return(
    <div className="eventSection">
      <a href=" " className="eventSectionLink">
        <span className="eventSectionTitle">😻세계 고양이의 날 임박! 간식 랭킹😻</span>
        <MdOutlineArrowForwardIos className="eventSectionLinkImage"/>
      </a>
      <p className="eventSectionText">놓치지 말고 지금 주문하세요!</p>
    </div>
  )
}