import React from "react";
import { useDispatch } from "react-redux";
// on click get new img
const BtnNextImg = () => {
  const dispatch = useDispatch();

  //click for next img
  const handleClick = () => {
    dispatch({
      type: "NEXT_IMG",
    });
  };
  return (
    <button className="btn" id={"btn-next-img"} onClick={() => handleClick()}>
      <svg width="24" height="24" fill="white" id={'arrow'}>
        <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
      </svg>
      <div id="slide"></div> 
    </button>
  );
};

export default React.memo(BtnNextImg);
