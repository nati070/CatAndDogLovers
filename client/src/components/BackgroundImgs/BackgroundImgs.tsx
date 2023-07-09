import React, { Suspense, useRef } from "react";
import { useBackgroundSrc } from "../../hooks";
import ErrorBoundary from "../ErrorBoundary";
import Error from "./Error";
import Loading from "./Loading";
import { useSelector } from "react-redux";

const BackgroundImgs = () => {
  const ref = useRef<HTMLImageElement>(null);
  // get image location and update the img tag
  const imgSrc = useBackgroundSrc();
  if (imgSrc) {
    return (
      <div id={"wrap-bg-img"}>
        <img ref={ref} src={imgSrc} />
      </div>
    );
  }
};

const Wrap = () => {
  const imgSrc = useSelector(
    (state: { bgImgReducer: { imgSrc: string } }) => state.bgImgReducer.imgSrc
  );

  return (
    <ErrorBoundary fallback={<Error />} imgSrc={imgSrc}>
      <Suspense fallback={<Loading />}>
        <BackgroundImgs />
      </Suspense>
    </ErrorBoundary>
  );
};
export default React.memo(Wrap);
