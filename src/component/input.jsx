import React,{useState} from 'react';


function Input(){
const[title,setTitle] = useState("");

    return (
        <div>
            <input
            placeholder = "add Input"
            value = {title}
            onChange = {(e) => setTitle(e.target.value)}
            >
            </input>
            <button img onClick = {() => onClick(title)}>+</button>
        </div>
    )


}


export {Input}