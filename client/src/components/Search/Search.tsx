import React, { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";

interface KeyboardEvent {
  key: string;
}
const SearchBox = () => {
  const btn = useRef<HTMLButtonElement>(null);
  const [textInput,setTextInput] = useState<string>('')
  const urlSearchNavigate = useSelector((state: {searchReducer: {searchUrl: string}})=> state.searchReducer.searchUrl)
  
  //navigate to the relavent url with the input as query 
  const handleClick = ()=>{
    window.location.href = `${urlSearchNavigate}${textInput}`
  }
  //on press 'enter'
  const handleKeyDown = (e: KeyboardEvent)=>{
    if(e.key == 'Enter'){
        btn.current?.click();
    }
  }

  return (
    <div id="search-box">
       <button onClick={()=>handleClick()} ref={btn}>
          <BsSearch size={15} color="#837B7A" />
        </button>
      <input type="text" placeholder="Search for ..." value={textInput} onChange={(e)=>setTextInput(e.target.value)} onKeyDown={(e)=>handleKeyDown(e)} />
    </div>
  );
};

export default SearchBox;
