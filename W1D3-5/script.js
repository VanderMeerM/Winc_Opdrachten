let colors = ['yellow', 'blue', 'red', 'orange'];
let x = 0;
while (x <= 3) {
    console.log(colors[x]);
    x++
}

for (x = 0; x < colors.length; x++) {
    console.log(colors[x]);
}

colors.forEach(color => console.log(color));

/*

1. De for-loop neemt drie regels in beslag (tot sluitende }).
2. De forEach-methode is een regel code.
3. Het is overzichtelijker en minder foutgevoelig. Meer weet ik niet direct.
4. Volgens mij is hasOwnProperty(key) een methode, al googelend kwam ik op onderstaande wat ook werkt.
Mijns inziens is dat vanwege de for ook een iteratie.

let test = {"a": "ditisA", "b":"ditisb","c":"ditisC"};
let propValue;
for (let propName in test) {
    propValue = test[propName]
console.log(propName, propValue);
}

 */
