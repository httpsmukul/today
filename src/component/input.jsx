import React, { useState } from 'react';
import "./input.css"
function Input({onClick}){
  const [title,setTitle] = useState("");
    //  console.log(title)
     if(title === "") {
         alert("please add some data");
        
     }
  
    return (
        <div>
            <input
            id = "input"
            placeholder = "add product"
            value = {title}
            onChange = {(e) => setTitle(e.target.value)}
            />
            <button id = "but"  onClick = {() => onClick(title)}>add product</button>
        </div>
    );
}

export {Input};