import React from "react"
import './main.css';
import { MENULIST, MEMBERSONLY }  from "./Data";
import { RiArrowDownSFill } from "react-icons/ri";
import Header from "./header";
import Menu from "./menu";
import ArticleSlider from "./articleSlider";


export default function Main() {
  return(
    <>
      <MembersOnly 
        membersOnly={MEMBERSONLY}/>
      <Header />
      <Menu 
        menuLists={MENULIST}/>
      <Article />
    </>
  )
}

function MembersOnly({ membersOnly }) {
  return(
    <div className="text-xs mt-2 mr-3 justify-end lg:mr-20 flex">
      <span className="text-blue-500 mx-3">{membersOnly.joinMembership}</span>
      <span className="text-slate-600">|</span>
      <span className="text-slate-600 mx-3">{membersOnly.logIn}</span>
      <span className="text-slate-600">|</span>
      <div className="flex">
      <span className="text-slate-600 ml-3">{membersOnly.customerService}</span>
      <RiArrowDownSFill className="mt-0.5"/>
      </div>
    </div>
  )
}

function Article() {
  return  <ArticleSlider />
}