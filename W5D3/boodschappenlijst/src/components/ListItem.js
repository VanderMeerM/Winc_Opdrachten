
import React from "react"


function ListItem (item) {
   
    return (
                
    <li
        key={item.key}
        className="list-item"
        onClick={item.addGrocery}>
        <span>  {item.value}</span>
      <span>{item.readonly ? `Hoeveelheid: ${item.amount}` : ""}</span>
       
               
        
      
</li>
)
}

export default ListItem