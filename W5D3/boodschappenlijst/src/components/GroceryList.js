import React from 'react'; 
import List from "./List.js"


function GroceryList(items) {
  
return(
    <div>
    <List items={items.groceryItems} 
    click={items.handleClickGroceryItem} 
    
    /> 
    </div>
)

}
export default GroceryList;