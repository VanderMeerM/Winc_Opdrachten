
//Opdracht A

const arrayWithWords = ["nice", "awesome", "tof"]
const addTheWordCool = function (array) {
    arrayWithWords.push("cool");
    return (arrayWithWords);
}

console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));


// Opdracht B 

const amountOfElementsInArray = function (array) {
    return array.length;
}

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));


// Opdracht C 

const selectBelgiumFromBenelux = function (array) {
    return array[0];

}

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));


// Opdracht D 

const lastElementInArray = function (array) {
    return array[array.length - 1];
}

const lastElementInArrayPop = function (array) {
    return array.pop();
}

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
console.log(lastElementInArrayPop(["Haas", "Cavia", "Kip", "Schildpad"]));


// Opdracht E

const presidents = ["Trump", "Obama", "Bush", "Clinton"]

const impeachTrumpSlice = function (array) {
    return array.slice(1, 4);
}
const impeachTrumpSplice = function (array) {
    return array.splice(1, 3);
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(presidents); // Vanwege Splice blijft alleen Trump nog over, bij slice blijven alle vier de presidenten in de array presidents behouden. 


// Opdracht F 

const stringsTogether = function (array) {
    return array.join(' ');
}

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))


// Opdracht G

const combineArrays = function (array1, array2) {
    return array1.concat(array2);
}

console.log(combineArrays([1, 2, 3], [4, 5, 6]));
