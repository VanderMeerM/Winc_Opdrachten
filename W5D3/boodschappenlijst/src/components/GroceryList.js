import React from 'react'; 
import List from "./List.js"



 
function GroceryList({groceryItems, handleClickEmptyCart}) {
   
  
return(
    <div>
    <button className="button-primary" onClick={handleClickEmptyCart}>
        Leeg de winkelmand 
        </button> 
    <List className="groceries" 
    items={groceryItems} 
        
     /> 
   
    </div>
)

}
export default GroceryList;