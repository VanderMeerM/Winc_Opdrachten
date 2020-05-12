
import React from "react"
import ListItem from "./ListItem"

class List extends React.Component {
 
 render() {
    
    return (
        <div>
                
            <ul> 
                {this.props.items.map(item => 
                 <ListItem
                 key ={item.id}
                 item = {item}
                 value = {item.title}
                 amount = {item.amount}
                 readonly={item.readonly}
                 addGrocery = {this.props.addGrocery}
                 
                  /> 
                 
                )}
               
                      
        </ul> 
        </div>
           
    )}
                }
            

    
          /*

          <ul>
                <li>{props.items.map(Item => {
                return <ListItem 
                key={Item.id}
                value = {Item.title} 
                click ={props.click}/>})}</li>
          
        </ul> 
            
            {this.props.shopping.map(Item => 
                <ListItem key={Item.id} value={Item.title} />)}
            
            {this.state.groceryItems.map(Item => { 
            return <ListItem  
            key={Item.id} 
            className="list-item" 
            onClick={clickItem}
          value={Item.title} />})} */
    
        

       
         
export default List