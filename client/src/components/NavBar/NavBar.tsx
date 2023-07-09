import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BtnCatOrDog from "../Buttons/BtnCatOrDog";
// 3 tabs of seatch 
const tabs = ["Web", "Images", "Videos"];

// prettier-ignore
const NavBar = () => {
    const dispatch = useDispatch()
    const [currentTab,setCurrentTab] = useState<string|null>(null)
    
    // in the first render make sure that the first tab active(have yellow buttom line) 
    useEffect(()=>{
        if(tabs.length > 0){
            const element = document.getElementById(`li-${tabs[0].toLowerCase()}`) as  HTMLLIElement;
            element.classList.add('li-active')
            setCurrentTab(tabs[0].toLowerCase())
        }
    },[]
    )
    // when click, mark tab and dispatch(change the url dicration) 
    const handleClick = (searchType: string)=>{
        if(currentTab){
            const element2 = document.getElementById(`li-${currentTab}`) as HTMLLIElement;
            element2.classList.remove('li-active')
        }
        dispatch({type: searchType})
        const element = document.getElementById(`li-${searchType.toLowerCase()}`) as  HTMLLIElement;
        element.classList.add('li-active')
        setCurrentTab(searchType.toLowerCase())
    }    
    return (
     <nav className="main-nav-bar">
          <ul >
           {tabs.map((ele,key) => <li key={key} id={`li-${ele.toLowerCase()}`} onClick={()=>handleClick(ele.toUpperCase())}>{ele}</li> )}
          </ul>
            <BtnCatOrDog/>
     </nav>
    );
};

export default React.memo(NavBar);
