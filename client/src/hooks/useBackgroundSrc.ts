import { useEffect, useState} from "react";
import { getRandomImg,ImgUrlType } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import promiseWrapper from "../components/promiseWrapper";

type srcType = string;

/*
  return the img src that upload\click next img\or save on cookie or localstorage(if upload only) 
*/

const useBackgroundSrc = (): srcType => {
  const imgSrc = useSelector(
    (state: { bgImgReducer: { imgSrc: string } }) => state.bgImgReducer.imgSrc
  );
  const dispatch = useDispatch();
  const [data,setData] = useState<ImgUrlType|null>(null)

  // dispatch the img src that save on cookie or localstorage(if upload only) 
  useEffect(() => {
    if (localStorage["my_bg_img"]) {
      dispatch({
        type: "LOCAL_STORAGE",
        payload: localStorage["my_bg_img"],
      });
    } else if (Cookies.get("img_url")) {
      dispatch({
        type: "COOKIE",
        payload: Cookies.get("img_url"),
      });
    } else {
      const promise = getRandomImg(localStorage['animal_type'])
      setData(promiseWrapper(promise))
    }
  }, [imgSrc]);

   //get new img and store on cookie;
  useEffect(()=>{
      if(data){
        dispatch({
          type: "NEW_IMG",
          payload: data.img_url
        })
      }
      
  },[data])

  return imgSrc;
};

export default useBackgroundSrc;