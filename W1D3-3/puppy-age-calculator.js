function calculateDogAge(agepuppy, humanage) {
    return (`Your doggie is ${agepuppy * 7} years old in dog years! The human age of ${humanage} is the age of ${Math.round(humanage / 7)} in dogyears.`);
}

console.log(calculateDogAge(5, 42));
console.log(calculateDogAge(7, 49));
console.log(calculateDogAge(12, 90));