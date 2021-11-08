function List ({title,id,status,handleToggle}){
  


    return (
        <>
        <div id = "div">   
        <div>{title} </div>
         <button id = "button" onClick = {() => handleToggle(id)}>
             {status ? "Complete" : "Not Complete"}
         </button>
         </div>
         <hr></hr>
         </>
    )
}
export {List}