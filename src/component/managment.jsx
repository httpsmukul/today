import { v4 as uuidv4 } from 'uuid';
import React, {useState} from 'react';
import {Input} from "./input";
import {List} from "./list";


function Manag(){

    const [data,setdata] = useState([]);
    const [showAll,setShowAll] =React.useState();
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
                <Input onClick = {handelAdd}></Input>
              {data
              .filter((item) => (showAll ? true : !item.status))
              
              }


        </div>

    )
}

export {Manag}