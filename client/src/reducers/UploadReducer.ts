import { AnyAction } from "@reduxjs/toolkit";

type StateType = {
  isDisplay: boolean;
};

/*
    reducer open/close window upload 
*/

const SearchReducer = (
  state: StateType = { isDisplay: false },
  action: AnyAction
) => {
  switch (action.type) {
    case "CLOSE_UPLOAD_WINDOW":
      return { ...state, isDisplay: false };
    case "OPEN_UPLOAD_WINDOW":
      return { ...state, isDisplay: true };
    default:
      return state;
  }
};
export default SearchReducer;
