function tellFortune(numofchildren, namepartner, location, job) {
    return (`You will be a ${job} in ${location}, and married to ${namepartner} with ${numofchildren} kids.`);
}

console.log(tellFortune(4, 'Ester', 'Nijmegen', 'doctor'));
console.log(tellFortune(3, 'Wendy', 'Amsterdam', 'coder'));
console.log(tellFortune(2, 'Maria', 'Maastricht', 'plumber'));