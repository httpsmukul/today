import React, { useState } from 'react';
function Input({onClick}){
  const [title,setTitle] = useState("");

  
    return (
        <div>
            <input
            id = "input"
            placeholder = "add product"
            value = {title}
            onChange = {(e) => setTitle(e.target.value)}
            />
            <button id = "but" img onClick = {() => onClick(title)}>add product</button>
        </div>
    );
}

export {Input};