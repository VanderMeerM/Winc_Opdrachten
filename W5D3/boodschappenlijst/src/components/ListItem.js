
import React from "react"


function ListItem (item) {
   
    return (
        
        
    <div>
        <li onClick={item.click}> 
       {item.value}   
           
       </li>
        
</div>
)
}

export default ListItem