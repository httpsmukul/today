import React, { useState } from 'react';
import './input.css'
function Input({onClick}){
  const [title,setTitle] = useState("");

  
    return (
        <div>
            <input
            id = "input"
            placeholder = "add a To-do"
            value = {title}
            onChange = {(e) => setTitle(e.target.value)}
            />
            <button id = "but" img onClick = {() => onClick(title)}>+</button>
        </div>
    );
}

export {Input};