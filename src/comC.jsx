import React, { useState } from 'react';
import {PassData} from './index';
function comC()
{
    //const PassData=createContext();
return(
    <>
        <PassData.Consumer >{(data)=>
        {
        return <h1> {data}</h1>
        }}</PassData.Consumer>
        <h3>com a</h3>

     </>   
)
}

export default comC;
//export {PassData};