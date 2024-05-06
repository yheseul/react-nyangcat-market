import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";



export default function Section() {
  return(
    <div className="section pt-10 cursor-pointer">
    <div className="sectionTitle mb-7 justify-center items-center">
      <div className="text-3xl py-2 pl-2 min-h-12 font-medium flex text-center">
        😻세계 고양이의 날 임박! 간식 랭킹😻
        <MdOutlineArrowForwardIos className="text-2xl ml-1 mt-1.5"/>
      </div>
      <span className="text-base text-slate-500 mt-0.5 text-center">놓치지 말고 지금 주문하세요!</span>
    </div>
    </div>
  )
}