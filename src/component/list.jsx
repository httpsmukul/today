
function List({title,id,status,handleToggle}){

    return (
        <>
         <div>

             <div>{title}</div>
             <button id = "button" onClick = {() => handleToggle(id)}>
                 {status ?"omplete" : "not Complete"}

             </button>

        

         </div>

       <hr></hr>


        </>
    )
}
export {List}