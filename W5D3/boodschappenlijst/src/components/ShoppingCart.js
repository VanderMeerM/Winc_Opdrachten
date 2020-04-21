import React from 'react'; 
import List from "./List.js"


 function ShoppingCart(props) {
        return(
        <div>
            <button className="button-primary" onClick={props.handleClickEmptyCart}>
        Leeg de winkelmand 
        </button>
        <List items={props.props} click={props.onClick}/>
        </div>
    )}

 export default ShoppingCart

 
