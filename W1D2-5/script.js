const age = 20;
const isFemale = true;
const driverStatus = 'bob';
const name = 'Marcel';
const totalAmount = 70;

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Welkom en bestel een drankje bij de bar!");
}

/* if (isFemale) {
    console.log("Komt u binnen, madame!");
} else {
    console.log("Sorry meneer, dit is een ladiesnight.");
    }

    if (driverStatus=='bob') {
        console.log("Je mag rijden.");
    } else {
        console.log("Je bent geen bob, dus mag niet rijden.");
    } */

if (name == 'Bram' || name == 'Sarah') {
    console.log('Wij bestaan - net als jij - 50 jaar, dus je hebt recht op een gratis biertje!')
} else {
    console.log(`We hopen dat je je hier vermaakt vanavond, ${name}!`);
}

if (totalAmount >= 100) {
    console.log('Je hebt recht op een gratis fles champagne!');
} else if (totalAmount > 50) {
    console.log('Je hebt recht op een portie gratis nachos!');
} else if (totalAmount > 25) {
    console.log('Je hebt recht op een gratis portie (vega)bitterballen!');
} else {
    console.log('Vergeet niet iets te bestellen')
}

