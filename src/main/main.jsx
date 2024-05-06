import React from "react"
import './main.css';
import { MENULIST }  from "./Data";
import Header from "./header";
import Menu from "./menu";
import Article from "./article";
import Section from "./section";

export default function Main() {
  return(
    <>
      <Header />
      <Menu 
        menuLists={MENULIST}/>
      <Article />
      <Section />
    </>
  )
}