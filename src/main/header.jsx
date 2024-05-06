import { useState } from "react";
import { HEADER, MEMBERSONLY }  from "./Data";
import { RiArrowDownSFill } from "react-icons/ri";
import logo from "./logo.png";
import { IoSearch } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { VscHeart } from "react-icons/vsc";
import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return(
    <div className="header">
      <MembersOnly 
        membersOnly={MEMBERSONLY}/>
      <div className="headerMain">
        <HeaderLogo />
        <HeaderMenu 
          headerMenu1={HEADER.menu1}
          headerMenu2={HEADER.menu2}/>
        <Search />
        <HeaderSubMenu />
      </div>
    </div>
  )
}

function MembersOnly({ membersOnly }) {
  return(
    <div className="membersOnly">
      <a href=" " className="joinMembership">{membersOnly.joinMembership}</a>
      <div className="divider">|</div>
      <a href=" " className="logIn">{membersOnly.logIn}</a>
      <div className="divider">|</div>
      <div className="customerService">
        <a href=" " className="customerServiceText">{membersOnly.customerService}
        <RiArrowDownSFill size="16" className="customerServiceImage"/>
      </a>
      </div>
    </div>
  )
}

function HeaderLogo() {
  return(
    <img 
      src={logo}
      alt="logo" 
      className="ml-2"/>
  )
}

function HeaderMenu({ headerMenu1, headerMenu2 }) {
  return(
    <div className="text-slate-400 text-lg w-1/4 lg:w-1/6">
      <span className="font-semibold hover:text-blue-500">{headerMenu1}</span>
      <span className="font-light mx-2">|</span>
      <span className="font-semibold hover:text-blue-500">{headerMenu2}</span>
    </div>
  )
}

function Search() {
  return(
    <div className="h-12 ml-4 mt-3 w-6/8 lg:w-1/4 rounded-md outline outline-blue-500 inline-flex bg-white">
      <input 
        type="text"
        placeholder="검색어를 입력해주세요."
        className="w-5/6 ml-2 focus:outline-none"
      />
      <IoSearch className="w-1/6 h-6 my-3 text-blue-500"/>
    </div>
  )
}

function HeaderSubMenu() {
  return(
    <div className="flex text-3xl mt-3 text-slate-600 w-1/4 lg:ml-20">
      <Tooltip>
        <SlLocationPin className="hover:text-blue-500 ml-5"/>
      </Tooltip>
      <VscHeart className="hover:text-blue-500 ml-5"/>
      <BsCart2 className="hover:text-blue-500 ml-5"/>
    </div>
  )
}

function Tooltip({ children }) {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const showTooltip = () => setTooltipVisible(true);
  const hideTooltip = () => setTooltipVisible(false);

  return(
    <div className="relative inline-block">
      <span
        onMouseOver={showTooltip}
        onMouseOut={hideTooltip}
      >
        {children}
      </span>
      {tooltipVisible && (
        <div
          className="tooltip z-[100] absolute bg-white p2 rounded shadow-md text-base px-4 py-4 border"
          onMouseOver={showTooltip}
          onMouseOut={hideTooltip}
        >
          <div className="text-left">
            <p><span className="text-blue-500">배송지를 등록</span>하고</p>
            <p>구매 가능한 상품을 확인하세요!</p>
          </div>
          <div className="flex pt-3">
            <button
              type="button"
              onClick={hideTooltip}
              className="align-middle bg-white shadow-md w-1/3 py-1 rounded border"
            >
              로그인
            </button>
            <button
              type="button"
              onClick={hideTooltip}
              className="flex align-middle bg-blue-400 shadow-md ml-4 w-2/3 pl-5 py-1 rounded border text-white"
            >
              <CiSearch className="mr-2 mt-1"/> 주소 검색
            </button>
          </div>
        </div>
      )}
    </div>
  )
}