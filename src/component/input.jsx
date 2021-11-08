import React,{useState} from 'react';


function Input({onClick}){
const[title,setTitle] = useState("");

    return (
        <div>
            <input
            placeholder = "add"
            value = {title}
            onChange = {(e) => setTitle(e.target.value)}
            >
            </input>
        </div>
    )


}


export {Input}