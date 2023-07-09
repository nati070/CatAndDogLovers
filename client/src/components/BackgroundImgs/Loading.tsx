import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Loading = () => {
  return (
    <div className="loading-bg-img">
      <div id="wrap-loading-icon">
        <AiOutlineLoading3Quarters id={"loading-icon"} size={40} />
      </div>
    </div>
  );
};

export default Loading;
