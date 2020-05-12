import React from "react"

function InputField(item) {

   
    return (
    <div>
        <form className="groceries-input" onSubmit={item.click}> 
            <input 
            className="input-primary" 
            type="text" 
            name="input" 
            placeholder="Voeg boodschap toe">
                
            </input>
            <button className="button-primary" type="submit"> Voeg toe</button>
        </form> 
    </div>
        )
    
}
 
export default InputField