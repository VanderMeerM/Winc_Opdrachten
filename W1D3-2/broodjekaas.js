/* broodjekaas() 
    take a roll;
    put butter onto the roll;
    add cheese;
}
*/ 

function broodjekaas() {
    console.log('take a roll');
    console.log('put butter onto the roll');
    console.log('add cheese');
}

broodjekaas();

function makeSandwich(topping) { 
    console.log('take a roll and cut it open');
    console.log(`put butter and ${topping} onto the roll`);
    console.log('close the roll');
     console.log(`There you go, a sandwich with ${topping}`); // declaratie 
   
}
makeSandwich('tomatoes'); 
makeSandwich('cumcumber'); //call 

function calculateDiscountedPrice(totalAmount, discount) {
    return Math.round(totalAmount-discount); 
}

console.log(calculateDiscountedPrice(10,4.2));

function kortingTot25Euro (totalAmount, discount) {
    if (totalAmount > 25) {
        return Math.round(totalAmount-discount); 
    } else {
        return Math.round(totalAmount);
    } 
}

console.log(kortingTot25Euro(25.5,10));