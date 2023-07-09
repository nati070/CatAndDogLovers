import React from 'react';
import {BiSolidErrorCircle} from 'react-icons/bi'
const Error = () => {
    return (
        <div className='error-weather'>
            <div id='wrap-error-icon'>
            <BiSolidErrorCircle size={40}/>
            </div>
            Error get weather data 
        </div>
    );
};

export default Error;