
// Opdracht A (niet volledig conform opdracht)

const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]


const findSpiderMan = superheroes.find(hero => {
    return hero.name === "Spiderman";
})

console.log(findSpiderMan);

// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}


/*
const findSpiderMan = function (name) {
   return superheroes.find(hero => { 
       hero.name === name;
   })
}
*/


 // Opdracht B

const ArrayValuesFE = function (array) {
    let nummers = [];
    array.forEach(number => {
        nummers.push(number * 2);
    });
    return nummers;
};

console.log(ArrayValuesFE([10, 20, 30]));

const doubleArrayValues = function (array) {
    return array.map(number => number * 2);
}

console.log(doubleArrayValues([1, 2, 3]));


// Opdracht C 
const containsNumberBiggerThan10 = function (array) {
    return array.some(number => number > 10);
}

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));


// Opdracht D

const isItalyInTheGreat7 = function (array) {
    return array.includes('Italy');
}

console.log(isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']));


// Opdracht E 

const tenfold = function (array) {
    let newarray = [];
    array.forEach(number => newarray.push(number * 10))
    return (newarray);
}

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))

const tenfoldMap = function (array) {
    return array.map(number => number * 10);
}

console.log(tenfoldMap([1, 4, 3, 6, 9, 7, 11]))


// Opdracht F 

const isBelow100 = function (array) {
    return array.every(number =>
        number < 100);
 }
 
console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]));


// Opdracht G 

const bigSum = function (array) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array.reduce(reducer);   

}
console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
