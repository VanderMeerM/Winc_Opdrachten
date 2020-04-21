
import React from "react"
import ListItem from "./ListItem"

function List (props) {
  
 
    console.log(`Uit Grocery`, props.items)
    console.log(`Uit Grocery`, props.click)

    console.log(props.grocerylist)
    
    return (
        <div>
            <ul>
                <li>{props.items.map(Item => {
                return <ListItem 
                key={Item.id}
                value = {Item.title} 
                click ={props.click}/>})}</li>
          
        </ul> 
        </div>
           
    )}

    
          {/*
            
            {this.props.shopping.map(Item => 
                <ListItem key={Item.id} value={Item.title} />)}
            
            {this.state.groceryItems.map(Item => { 
            return <ListItem  
            key={Item.id} 
            className="list-item" 
            onClick={clickItem}
          value={Item.title} />})} */}
    
        

       
         
export default List