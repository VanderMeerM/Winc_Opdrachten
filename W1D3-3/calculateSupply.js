const maxAge = 90;
function calculateSupply(amount,age) {
    let total = (amount*365) * (maxAge-age);
    return (`You will need ${total} cups to last you until the ripe old age of ${maxAge}.`);
}

console.log(calculateSupply(30,25));
console.log(calculateSupply(10,50));
console.log(calculateSupply(20,70));