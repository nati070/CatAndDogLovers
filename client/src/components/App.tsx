import React from "react";
import Search from "./Search";
import NavBar from "./NavBar";
import { Weather } from "./Weather";
import { BackgroundImgs } from "./BackgroundImgs";
import { BtnUploadImg, BtnNextImg } from "./Buttons";
import Upload from "./Upload";
import MyWebSite from "./MyWebSite";

const App = () => {
  return (
    <div className="app">

      <NavBar />
      <MyWebSite/>
      <Upload/>
      <BackgroundImgs />
      <div id="wrap-search-and-weather">
        <Search />
        <Weather />
      </div>
      <div id="wrap-next-btn-and-upload-btn">
        <BtnUploadImg/>
        <BtnNextImg />
      </div>
    </div>
  );
};

export default App;
