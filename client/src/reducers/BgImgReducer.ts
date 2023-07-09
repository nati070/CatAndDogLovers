import { AnyAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

type StateType = {
    imgSrc: string;
}
/*
    reducer save the img(url/base64). 
    if img was upload it return the img(base64) in localsession.
    if img was saved from the server it return the img url from cookie.
    if button next image click it will save the new image in the cookie 
    and return the url of the new img.
*/
const BgImgReducer = (state: StateType={imgSrc: ''},action: AnyAction)=>{
    switch(action.type){
        case 'LOCAL_STORAGE':
            if(Cookies.get("img_url")){
                Cookies.remove("img_url")
            }
            localStorage["my_bg_img"] = action.payload
            return {...state,imgSrc: action.payload}
        case 'COOKIE':
            if(localStorage["my_bg_img"]){
                localStorage.removeItem("my_bg_img");
            }
            return {...state,imgSrc: action.payload}
        case 'NEW_IMG':
            if(localStorage["my_bg_img"]){
                localStorage.removeItem("my_bg_img");
            }
            const date: Date = new Date();
            date.setHours(23, 59, 59, 999);
            Cookies.set("img_url", action.payload, { expires: date });
            return {...state,imgSrc: action.payload}

        case "NEXT_IMG": 
            /*
             if the button next is clicked it removes all the data thave saved on localstorage
             and the data on Cookies and the state reducer itself, therfore useBackgroundSrc 
             render also and kept new img on Cookie
            */
            if(localStorage["my_bg_img"]){
                localStorage.removeItem("my_bg_img");
            }
            if(Cookies.get("img_url")){
                Cookies.remove("img_url")
            }
            return {...state, imgSrc: ''}
        default:
            return state;
    }
}
export default BgImgReducer;