
function huiswerkMaken(vak, callback) {
    console.log(`Ok, ok, ik ga nu mijn ${vak}-huiswerk maken.`);
    setTimeout(function () {
        callback();
    }, 3000);
}

function klaarMetHuiswerk() {
    console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
}

huiswerkMaken("wiskunde", klaarMetHuiswerk);

/* Ander voorbeeld

function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
  }
  function alertFinished(){
    alert('Finished my homework');
  }
  doHomework('math', alertFinished);

  */

// Uitwerking van het gebruik van een Promise (aan de hand van Sinterklaas-voorbeeld) 

/*

 const sinterklaasIsGul = true;

// Promise maken (dit hoeven jullie dus niet te leren, dit is aan de API (back-end) kant)
const krijgIkEenNieuweiPhone = new Promise(
    (resolve, reject) => {
        if (!sinterklaasIsGul) {
            const smartphone = {
                merk: 'Apple',
                type: 'iPhone 11'
            };
            resolve(smartphone);
        } else {
            const metWelkeReden = new Error('Je bent stout geweest, geen cadeaus voor jou');
            reject(metWelkeReden);
        }

    }
);
// Promise aanroepen, of "consumeren" (dit zullen je dus wel doen en moeten leren)
const vraagAanSinterklaas = () => {
    krijgIkEenNieuweiPhone
        .then(function (resolved) {
            // yay, je hebt een nieuwe smartphone
            console.log(resolved);
        })
        .catch(function (error) {
            // oeps, geen Sinterklaas cadeau dit jaar
            console.log(error.message);
        });
}

vraagAanSinterklaas();

 */