import React from 'react'; 
import List from "./List.js"
import InputField from "./InputField"


 function ShoppingCart({addGrocery, shoppingListItems, addNewShoppingItem}) {
        return(
        <div>
            
        <InputField click={addNewShoppingItem} />

        <List 
        items={shoppingListItems} 
        addGrocery = {addGrocery} />
       
         
        </div>
    )}

 export default ShoppingCart

 
