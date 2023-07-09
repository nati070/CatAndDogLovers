import React from 'react'
import ReactDOM from "react-dom/client";
import App from './components/App'
import './index.css'

// redux
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import { SearchReducer , BgImgReducer,UploadReducer} from './reducers'

const store = configureStore( {reducer: {searchReducer: SearchReducer,bgImgReducer: BgImgReducer, uploadReducer: UploadReducer} })
const rootElement = document.createElement("div");
rootElement.id = "react-chrome-app";

// const container = document.getElementById('app-root')!
// const root = ReactDOM.createRoot(container)
const globalStyles = document.createElement("style");
globalStyles.innerHTML = `
  #${rootElement.id} {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #ffffff;
  border-right: 1px solid #c2c2c2;
  z-index: 999999999;
  }
`;

document.body.appendChild(rootElement);
document.body.appendChild(globalStyles);
const root = ReactDOM.createRoot(rootElement);
root.render(<Provider store={store}><App/></Provider>)


