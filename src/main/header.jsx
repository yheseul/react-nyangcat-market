import { useState } from "react";
import { HEADER, MEMBERSONLY, CUSTOMERSERVICE }  from "./Data";
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
      <CustomerService
        membersOnly={membersOnly}
      />
    </div>
  )
}

function CustomerService({ membersOnly }) {
  const[isDropDownMenuVisible, setDropDownMenuVisible] = useState(false);

  const handleMouseOver = () => setDropDownMenuVisible(true);
  const handleMouseOut = () => setDropDownMenuVisible(false);

  return(
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="customerService"
    >
      <a href=" " className="customerServiceText">{membersOnly.customerService}
        <RiArrowDownSFill size="16" className="customerServiceImage"/>
      </a>
    
    {isDropDownMenuVisible && (
      <DropDownMenu
        dropDownMenulists={CUSTOMERSERVICE}
      />
    )}
    </div>
  )
}

function DropDownMenu({ dropDownMenulists }) {
  const lis = [];

  dropDownMenulists.forEach((list) => {
    lis.push(
      <li className="dropDownMenuList">{list}</li>
    )
  })

  return(
    <ul className="dropDownMenu">{lis}</ul>
  )
}

function HeaderMenu({ headerMenu1, headerMenu2 }) {
  return(
    <div className="headerMenuWrap">
      <img
        src={logo}
        alt="logo" 
        className="logo"
      />
      <button className="headerMenu headerMenu1">{headerMenu1}</button>
      <span className="headerMenuDivider">|</span>
      <button className="headerMenu headerMenu2">{headerMenu2}</button>
    </div>
  )
}

function Search() {
  return(
    <div className="searchBox">
      <div className="search">
        <input 
          type="text"
          placeholder="검색어를 입력해주세요."
          className="searchInput"
        />
        <IoSearch className="submitButton"/>
      </div>
    </div>
  )
}

function HeaderSubMenu() {
  return(
    <div className="headerSubMenuWrap">
      <div className="headerSubMenu">
        <Tooltip>
          <SlLocationPin className="registerDeliveryDestination headerSubMenuHover"/>
        </Tooltip>
        <VscHeart className="wish headerSubMenuHover"/>
        <BsCart2 className="shoppingCart headerSubMenuHover"/>
      </div>
    </div>
  )
}

function Tooltip({ children }) {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const showTooltip = () => setTooltipVisible(true);
  const hideTooltip = () => setTooltipVisible(false);

  return(
    <div>
      <span
        onMouseOver={showTooltip}
        onMouseOut={hideTooltip}
      >
        {children}
      </span>
      {tooltipVisible && (
        <div
          className="tooltip"
          onMouseOver={showTooltip}
          onMouseOut={hideTooltip}
        >
          <div className="tooltipText">
            <p><span className="tooltipBlueText">배송지를 등록</span>하고</p>
            <p>구매 가능한 상품을 확인하세요!</p>
          </div>
          <div className="tooltipButton">
            <button
              type="button"
              onClick={hideTooltip}
              className="tooltipLoginButton"
            >
              로그인
            </button>
            <button
              type="button"
              onClick={hideTooltip}
              className="tooltipAddressSearchButton"
            >
              <CiSearch className="tooltipAddressSearchButtonImage"/> 주소 검색
            </button>
          </div>
        </div>
      )}
    </div>
  )
}