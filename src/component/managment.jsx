import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import {Input} from "./input";
import {List} from "./list";

function Manag(){
    
    const [data,setdata] = useState([]);
    const [showAll,setshowAll] = React.useState(true);
         const handelAdd = (title) =>{
         const payload = {
             title,
             status : false,
             id : uuidv4()
         };
         setdata([...data,payload]);
     };
     
     

     const handleToggle = (id) => {
        const updateTodo = data.map(item => item.id === id ? 
            {...item,status :!item.status}
            : item
            );
            setdata(updateTodo);
     };
    

    return (
        <div id = "box">
            <Input onClick= {handelAdd}></Input>
            {data
            .filter( (item) => (showAll ? true : !item.status))
            
            
            .map((item) =>(
                <List 
                // handleDelete = {handleDelete}
                handleToggle = {handleToggle}
                key = {item.id}{...item}/>
            ))}
            <button id = "but1" onClick = {() => setshowAll(!showAll)}>{showAll ? "order list" : "current list"}</button>
        </div>
    );
}

export {Manag};