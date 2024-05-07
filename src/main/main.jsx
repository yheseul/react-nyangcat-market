import React from "react"
import './main.css';
import Header from "./header";
import Navigation from "./navigationMenu";
import Article from "./article";
import Section from "./section";

export default function Main() {
  return(
    <>
      <Header />
      <Navigation />
      <div className="content">
        <div className="content">
        <Article className="article"/>
        <Section />
        </div>
      </div>
    </>
  )
}