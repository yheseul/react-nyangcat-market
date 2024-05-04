import React from "react";
import { HEADER }  from "./Data";
import logo from "./logo.png";
import { IoSearch } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { VscHeart } from "react-icons/vsc";
import { BsCart2 } from "react-icons/bs";

export default function Header() {
  return(
    <div className="flex justify-center items-center w-full my-2 ml-2 lg:ml-20">
      <HeaderLogo />
      <HeaderMenu 
        headerMenu1={HEADER.menu1}
        headerMenu2={HEADER.menu2}/>
      <Search />
      <HeaderSubMenu />
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
      <SlLocationPin className="hover:text-blue-500 ml-5"/>
      <VscHeart className="hover:text-blue-500 ml-5"/>
      <BsCart2 className="hover:text-blue-500 ml-5"/>
    </div>
  )
}