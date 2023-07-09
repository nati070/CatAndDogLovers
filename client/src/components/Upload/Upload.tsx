import React, { useEffect, useRef, useState } from "react";
import { AiOutlineDownload, AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getBase64 } from "../../utils";
/*
  upload image to the background
*/

const Upload = () => {
  const [dragActive, setDragActive] = React.useState(false);
  const [fileImage,setFileImage] = useState<File>();
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch()
  const isDisplay = useSelector((state: {uploadReducer: {isDisplay: boolean}})=>(state.uploadReducer.isDisplay))


  //when isdisplay true/false it will open/close the window. 
  useEffect(() => {
    if (ref.current) {
      ref.current.style.display = isDisplay ? "block" : "none";
    }
  }, [isDisplay]);


  const handelClose = () => {
    if (ref.current) {
      setFileImage(undefined);
      dispatch({type: "CLOSE_UPLOAD_WINDOW"});
    }
  };



  //make sure the file and save the image
  const handleFile = (file: FileList) => {
     if(file[0].type.includes('image/')){
      setFileImage(file[0]);  
     }
  };

  const handleDrag = function (
    e: React.DragEvent<HTMLFormElement | HTMLDivElement>
  ) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  const handleDrop = function (e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files);
    }
  };

  const handleClickUpload = () => {
    if(fileImage){
      getBase64(fileImage).then(base64 => {
        dispatch({type: "LOCAL_STORAGE" , payload: base64})
      });
    }
  };
  return (
    <div className="upload-box" ref={ref}>
      <AiFillCloseCircle
        id={"close-icon"}
        size={30}
        onClick={() => handelClose()}
      />
      <form id="form-upload" onDragEnter={handleDrag}>
        <input
          type="file"
          id="input-file-upload"
          onChange={handleChange}
          accept="image/jpeg, image/jpg, image/png"
        />
        <label id="label-file-upload" htmlFor="input-file-upload">
          <div>
            <div id={"wrap-icon-upload"}>
              <AiOutlineDownload size={100} />
            </div>
            {fileImage?.name ? (
              <>
                <p> file name: {fileImage.name}</p>{" "}
                <div id="wrap-btn-upload">
                  <input
                    type="button"
                    className="btn"
                    id="btn-upload"
                    value="create as background image"
                    onClick={() => handleClickUpload()}
                  />
                </div>
              </>
            ) : (
              <p id="p-file-upload">
                Drag and drop your file here or Click here
              </p>
            )}
          </div>
        </label>
        {dragActive && (
          <div
            id="drag-file-element"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}
      </form>
    </div>
  );
};

export default React.memo(Upload);

