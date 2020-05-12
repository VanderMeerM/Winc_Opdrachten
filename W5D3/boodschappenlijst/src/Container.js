
import React, { Component } from 'react';
import ShoppingCart from './components/ShoppingCart.js'
import GroceryList from './components/GroceryList.js'


class Container extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      shoppingListItems: [
        { id: 1, title: "Brood", amount: 1 },
        { id: 2, title: "Bier", amount: 3 },
        { id: 3, title: "Kaas", amount: 1 },
        { id: 4, title: "Tandpasta", amount: 2 }
      ],
      groceryItems: [
        { id: 1, title: "Zalm", amount: 1, readonly: true },
        { id: 2, title: "Tomaten", amount: 5, readonly: true },
        { id: 3, title: "Vlees", amount: 1, readonly: true },
        { id: 4, title: "Bouillonblokjes", amount: 2, readonly: true }
      ]
    }

  }

  render() {
    
    const addAmountToItem = itemTitle => {
      // We maken een copy van de state, want je kunt de state niet direct muteren.
      const groceryList = [...this.state.groceryItems];
      const newList = groceryList.map(groceryItem => {
        if (groceryItem.title === itemTitle.target.innerText) {
          groceryItem.amount++;}
        return groceryItem;
      });
      this.setState({ groceryItems: newList });
          } 

    const addNewShoppingItem = event => {
      event.preventDefault();
      
      const newShoppingItem = {
        id: this.state.shoppingListItems.length + 1,
        title: event.target.input.value, 
        amount: 1
      };
      this.setState(prevState => {
        const newList = prevState.shoppingListItems.concat(newShoppingItem);
        return {
          shoppingListItems: newList
        };
      });
    
  };

    const emptyCart = () => {
      this.setState({ groceryItems: [] });
    };

    const addGrocery = grocery => {
     // console.log(grocery.target.innerText)
     
      const currentGroceryList = this.state.groceryItems;
      const groceryItem = currentGroceryList.filter(
         item => item.title === grocery.target.innerText
       );
      
         (groceryItem.length === 0) ? 
        addItem(grocery): 
        addAmountToItem(grocery)
      };
      
const addItem = grocery => {
    
      const item = {
        id: this.state.groceryItems.length + 1,
        title: grocery.target.innerText, amount: 1, readonly: true
      };

      // We gebruiken concat, omdat concat een nieuwe array returned.
      // Push methode werkt niet omdat je dan direct de state zou muteren.
      this.setState({ groceryItems: this.state.groceryItems.concat(item) });

    }
    
     return (
      <div className="container">
        
        <div className="groceries-list basket">
        <h1> Boodschappenlijstje</h1>
        <ShoppingCart
          addGrocery={addGrocery}
          shoppingListItems={this.state.shoppingListItems}
          addNewShoppingItem={addNewShoppingItem}
        />
      </div>   
      <div className="groceries-list groceries">
          <h1> Winkelmand</h1>
          <GroceryList
            groceryItems={this.state.groceryItems}
            handleClickEmptyCart={emptyCart}
           
          />
        </div>
      </div>       
          
        );
  }
}



export default Container;

