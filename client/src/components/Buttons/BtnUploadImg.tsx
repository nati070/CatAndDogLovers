import React from "react";
import { BsCloudUpload } from "react-icons/bs";
import { useDispatch } from "react-redux";

// on click open the update window
const BtnUploadImg = () => {
      const dispatch =  useDispatch()
  const handleClick = ()=>{
      dispatch({
        type: "OPEN_UPLOAD_WINDOW"
      })
  }

  return (
    <button className="btn" id={"btn-upload-img"} onClick={()=>handleClick()}>
         <div id={'wrap-upload-img'}>
        <BsCloudUpload />
      </div>
      Upload
    </button>
  );
};

export default React.memo(BtnUploadImg);
