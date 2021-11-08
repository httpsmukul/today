import { v4 as uuidv4 } from 'uuid';
import React, {useState} from 'react';
import {Input} from "./input";
import {List} from "./list";


function Manag(){

    const[data,setdata] = useState([]);
    cnst[showAll,setShowAll] =React.useState();
        const handelAdd = (title) =>{
            const payload = {
                title,
                status : false,
                id : uuidv4()
        };
         setdata([...data,payload]);
    };
    

    return (
        <div>
                <Todoinput onClick = {handelAdd}></Todoinput>



        </div>

    )
}

export {Manag}