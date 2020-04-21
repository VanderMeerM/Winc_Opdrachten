// https://github.com/WincAcademy/react-groceries-list} 

import React, {Component} from 'react'; 
import ShoppingCart from './components/ShoppingCart.js'
import GroceryList from './components/GroceryList.js'


class Container extends React.Component {
        constructor(prop) {
        super(prop)
        this.state = {
            groceryItems: [
            {id: 1, title: "Pak melk"},
            {id: 2, title: "Groente"},
            {id: 3, title: "Vlees"},
            {id: 4, title:  "Brood"}  
            ],        
            shoppingListItems: [
            {id: 1, title: "Doperwten"},
            {id: 2, title: "Bier"},
            {id: 3, title: "Vleeswaren"},
            {id: 4, title:  "Aardappelen"} 
            ] 
        } 
          
   }

    render() {
      const addNewShoppingListItem = itemTitle => {
        const newShoppingItem = {
          id: this.state.shoppingListItems.length + 1,
          title: itemTitle
        };
        this.setState(prevState => {
          const newList = prevState.shoppingListItems.concat(newShoppingItem);
          return {
            shoppingListItems: newList
          };
        });
      };
      
      const addAmountToItem = itemTitle => {
        // We maken een copy van de state, want je kunt de state niet direct muteren.
        const shoppingList = [...this.state.shoppingListItems];
        const newList = shoppingList.map(shoppingItem => {
          if (shoppingItem.title === itemTitle) {
            shoppingItem.amount++;
          }
          return shoppingItem;
        });
        this.setState({ shoppingListItems: newList });
      };

      const handleClickGroceryItem = event => {
        const clickedItem = event.target.getAttribute("value");
      const currentShoppingList = this.state.shoppingListItems;
      const shoppingListItem = currentShoppingList.filter(
        item => item.title === clickedItem
      );
      shoppingListItem.length === 0
        ? addNewShoppingListItem(clickedItem)
        : addAmountToItem(clickedItem);
    };

    const emptyCart = () => {
      this.setState({ shoppingListItems: [] });
    };

    const addGrocery = grocery => {
      const item = { id: this.state.groceryItems.length + 1, title: grocery };
      // We gebruiken concat, omdat concat een nieuwe array returned.
      // Push methode werkt niet omdat je dan direct de state zou muteren.
      this.setState({ groceryItems: this.state.groceryItems.concat(item) });
    };
      
      
        return (
          
          <div>

            <h1> Boodschappenlijst</h1>
            <GroceryList 
            addGrocery={addGrocery}
            groceryItems={this.state.groceryItems}
            handleClickGroceryItem={ handleClickGroceryItem } 
            />
            
            <h1> Winkelmand</h1>
            <ShoppingCart 
            handleClickEmptyCart={emptyCart}
            props={this.state.shoppingListItems} 
             />
            
            
          </div>
        );
        }
      }
      
      
    
    export default Container;
    
    