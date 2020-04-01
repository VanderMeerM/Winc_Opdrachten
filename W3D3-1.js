

// Functie 1 

function sum (x,y) {
    return x+y
}

const cijfers = [1,2];
   
console.log(sum (...cijfers));


// Functie 2 

function optellen (...allecijfers) { 
    return allecijfers.reduce (function (prev,curr) {
        return prev+curr;
    })
}

console.log(optellen (1,2,3,4));
console.log(optellen (1,3,4,5,67,8,4,2));


