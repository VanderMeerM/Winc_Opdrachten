const getSucceedingPromise = (message, ms) => {
    // Maak hier je functie die een succeeding Promise retourneert
   const success = new Promise((resolve, reject) => {
       setTimeout( function() {
           resolve(
               console.log(message);
               return (success);    
}, ms)
 })
    

const getFailingPromise = (errorMessage, ms) => {
    // Maak hier je functie die een failing Promise retourneert
   const nosuccess = new Promise((resolve, reject) => {
        setTimeout( function() {
            reject(errorMessage)    
 }, ms)
  })
};

const getRandomSucceedingOrFailingPromise = () => { 
    // This randomly resolves to true or false
    let randomValues = [true, false];
    let index = randomValues[Math.round(Math.random())];
    let promiseShouldSucceed = () => {
    return index;
    }

    // This gets some semi-random amount of seconds under the 5seconds:
    let randomMillisecond = schrijfjecodehier => {
        let seconds = Math.round(Math.random()*5);
        return seconds;
    }
    

    if (promiseShouldSucceed) {
        return getSucceedingPromise(
            `Promise ${id} succeeded in ${randomMillisecond} ms.`,
            randomMillisecond
        );
    } else {
        return getFailingPromise(
            `Promise ${id} failed in ${randomMillisecond} ms.`,
            randomMillisecond
        );
    }
};

const createPromiseElement = promise => {
    const div = document.createElement("div");
    div.classList = promise.state;
    div.innerHTML = `Promise: ${promise.id}`;
    return div;
};

const showPromises = promises => {
    console.log("I get called every time a Promise rejects or resolves")
    const promisesDiv = document.querySelector(".promises");
    promisesDiv.innerHTML = "";
    const promisesElements = promises.map(createPromiseElement);
    promisesElements.forEach(element => promisesDiv.appendChild(element));
};

const add50Promises = () => {
    let i = 0;
    const allPromises = [];
    // fill the allPromises array with 50 objects that will soon be Promises. 
    // they all have an ID
    while (i <= 50) {
        let id = i;
        allPromises.push({
            id
        });
        consumePromise(allPromises, id);
        i++;
    }
    // Put the inital pending Promises in the DOM:
    showPromises(allPromises);
};

const consumePromise = function (allPromises, id) {
    const promise = getRandomSucceedingOrFailingPromise(id);
    //consumeer hier je Promise
    success.then((resolved) => {
        console.log(resolved);
        allPromises[id].state = "resolved";
    })
};


const registerEventHandlers = () => {
    document.querySelector("button").addEventListener("click", add50Promises);
};

document.addEventListener("DOMContentLoaded", () => {
    registerEventHandlers();
});
}
