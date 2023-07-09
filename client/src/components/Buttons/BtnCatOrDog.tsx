import React, { useEffect, useRef } from "react";
import { cat, dog } from "../../assets";
import { useDispatch } from "react-redux";
import { AnimalType } from "../../utils";

/*
  button that allow to choose which picture to show dog/cat
*/
//igonre-prettier
const BtnCatOrDog = () => {
  const dispatch = useDispatch();
  const refDogBtn = useRef<HTMLButtonElement>(null);
  const refCatBtn = useRef<HTMLButtonElement>(null);

  // first render make sure which type of animal we choosen before
  useEffect(() => {
    localStorage["animal_type"] == "cat"
      ? ChangeSelctedAnimalColorToYellow("cat")
      : ChangeSelctedAnimalColorToYellow("dog");
  }, []);

  //change the select tag animal to yellow color
  const ChangeSelctedAnimalColorToYellow = (animalType: AnimalType) => {
    if (refCatBtn.current && refDogBtn.current) {
      if (animalType == "cat") {
        refDogBtn.current!.style.filter = "none";
        refCatBtn.current!.style.filter =
          "invert(16%) sepia(62%) saturate(5957%) hue-rotate(358deg) brightness(101%) contrast(126%)";
      } else {
        refCatBtn.current!.style.filter = "none";
        refDogBtn.current!.style.filter =
          "invert(16%) sepia(62%) saturate(5957%) hue-rotate(358deg) brightness(101%) contrast(126%)";
      }
    }
  };

  // when click update the type in localstorge and get new img
  const handleClick = (animalType: AnimalType) => {
    if (animalType != localStorage["animal_type"]) {
      localStorage["animal_type"] = animalType;
      dispatch({
        type: "NEXT_IMG",
      });

      ChangeSelctedAnimalColorToYellow(animalType);
    }
  };

  return (
    <div className={"wrap-btn-dog-cat"}>
      <button ref={refDogBtn} className="btn-animal">
        <img
          className="img-btn-dog"
          src={dog}
          onClick={() => handleClick("dog")}
        />
      </button>
      <button
        ref={refCatBtn}
        className="btn-animal"
        onClick={() => handleClick("cat")}
      >
        <img className="img-btn-cat" src={cat} />
      </button>
    </div>
  );
};

export default BtnCatOrDog;
