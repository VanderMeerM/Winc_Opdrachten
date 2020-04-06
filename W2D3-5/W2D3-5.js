
const superheroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
]


// Opdracht 1 

const names = superheroes.map (name => {
    return name.name});
    console.log(names);

// Opdracht 2 

const LightWeighters = superheroes.filter (LightWeight => {
    parseInt(LightWeight.weight); 
    return LightWeight.weight < 190});
    
console.log (LightWeighters);
    

// Opdracht 3 

const HeavyWeighters = superheroes.filter (HeavyWeighter => {
    parseInt(HeavyWeighter.weight);
    return HeavyWeighter.weight == 200}).map(Names => {
        return Names.name});

    console.log(HeavyWeighters);
    

// Opdracht 4 

const Comics = superheroes.map (comic => {
    return comic.first_appearance;})

console.log(Comics);



// Opdracht 5 

const DCHeroes = superheroes.filter (DCHero => {
    return DCHero.publisher === "DC Comics"}).map(Names => {
        return Names.name});

    console.log(`Superhelden van DC Comics: ${DCHeroes}`);

const MarvelHeroes = superheroes.filter (MarvelHero => {
        return MarvelHero.publisher === "Marvel Comics"}).map(Names => {
            return Names.name});
    
        console.log(`Superhelden van Marvel Comics: ${MarvelHeroes}`);

     

// Opdracht 6 

const TotalWeightDCHeroes = superheroes.filter (DCHero => {
        return DCHero.publisher === "DC Comics"}).map(Weight => {
        return parseInt(Weight.weight);
        })
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(TotalWeightDCHeroes.reduce(reducer));

 
// Opdracht 7 

const TotalWeightMarvelHeroes = superheroes.filter (MarvelHero => {
    return MarvelHero.publisher === "Marvel Comics"}).map(Weight => {
    return parseInt(Weight.weight)}).filter(isNumber => {
    return !isNaN(isNumber)})
 
//const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(TotalWeightMarvelHeroes.reduce(reducer));

// Opdracht 8

const HeaviestHero = superheroes.map (Weight => {
    return parseInt(Weight.weight)}).filter(isNumber => {
        return !isNaN(isNumber)}).sort();

    console.log(`De zwaartste hero weegt ${HeaviestHero[0]} kilo.`);


    


