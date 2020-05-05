
function removeItems() {
    const sentence = document.getElementById('averageage');
    sentence.innerHTML = '';
    const emptyList = document.getElementById('result');
    let removeAll = result.lastElementChild;
    while (removeAll) {
        result.removeChild(removeAll);
        removeAll = result.lastElementChild;
    }
}

const getCountries = function () {
    removeItems();
    const list = document.getElementById('result').getElementsByTagName('li');
    let arrayOfCountries = [];

    for (i = 0; i < randomPersonData.length; i++) {
        arrayOfCountries.push(randomPersonData[i].region)

    }
    let sortCountries = [...new Set(arrayOfCountries)];
    sortCountries.sort().forEach(Country => {
        const newLi = document.createElement("li");
        newLi.innerHTML = Country;
        result.appendChild(newLi);
    })
}

const getSteenbok = function () {
    removeItems()
    const list = document.getElementById('result').getElementsByTagName('li');
    const womenGenderAge = randomPersonData.filter(woman =>
        woman.gender === "female").filter(age => age.age > 30);
    const womenGAJan = womenGenderAge.filter(jan => new Date(jan.birthday.mdy)
        .getMonth() == 0 && new Date(jan.birthday.mdy).getDate() < 19);
    const womenGADec = womenGenderAge.filter(dec => new Date(dec.birthday.mdy)
        .getMonth() == 11 && new Date(dec.birthday.mdy).getDate() >= 22)
    const allWomen = womenGADec.concat(womenGAJan).sort();
    for (i = 0; i < allWomen.length; i++) {
        const newLi = document.createElement("li");
        newLi.innerHTML = `${allWomen[i].name} ${allWomen[i].surname}`;
        result.appendChild(newLi);
        //const newImg = document.createElement("img");
        //newImg.src = randomPersonData[i].photo;
        //result.appendChild(newImg);

    }
}

const creditCards = function () {
    removeItems()
    document.getElementById('result').getElementsByTagName('li');
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const cardExpiresNextYear = randomPersonData
        .filter(expiresNY =>
            parseInt(expiresNY.credit_card.expiration.split("/")[1]) + 2000 - currentYear == 1)
        .sort((a, b) => parseInt(a.credit_card.expiration.split("/")[0]) - parseInt(b.credit_card.expiration.split("/")[0]));;
    const cardExpiresThisYear = randomPersonData
        .filter(expiresTY =>
            parseInt(expiresTY.credit_card.expiration.split("/")[1]) + 2000 == currentYear
            && expiresTY.credit_card.expiration.split("/")[0] >= currentMonth)
        .sort((a, b) => parseInt(a.credit_card.expiration.split("/")[0]) - parseInt(b.credit_card.expiration.split("/")[0]));;;
    const allExpires = cardExpiresThisYear.concat(cardExpiresNextYear)
        .filter(age => age.age > 18);

    allExpires.forEach(holder => {
        const newLi = document.createElement("li");
        const newUL = document.createElement("ul");
        const secLi = document.createElement("li");
        newLi.innerHTML = `${holder.name} ${holder.surname}`;
        secLi.innerHTML = `Tel. ${holder.phone}; cardnr. ${holder.credit_card.number};  
            expiredate: ${holder.credit_card.expiration}`;
        result.appendChild(newLi);
        newLi.appendChild(newUL);
        newUL.appendChild(secLi);

    })
}


const peopleInCountries = function () {
    removeItems();
    document.getElementById('result').getElementsByTagName('li');

    let sortByInh = [];
    let arrayOfCountries = [];
    randomPersonData.map(Country => {
        arrayOfCountries.push(Country.region);
    })
    const uniqueCountries = [...new Set(arrayOfCountries)];

    uniqueCountries.forEach((country) => {
        const filterCountry = randomPersonData.filter(
            (inh) => inh.region === country);
        sortByInh.push(`${country} (${parseInt(filterCountry.length)})`)
     
    })

    
   // console.log(sortByInh)

    sortByInh.forEach((country) => {
        const newLi = document.createElement("li");
        newLi.innerHTML = country;
        result.appendChild(newLi);
    })
}

const averageAge = function () {
    removeItems();
    const list = document.getElementById('result').getElementsByTagName('li');

    let listOfCountries = [];
    let arrayOfCountries = [];
    randomPersonData.map(Country => {
        arrayOfCountries.push(Country.region);
    })
    const uniqueCountries = [...new Set(arrayOfCountries)];

    uniqueCountries.forEach((country) => {
        randomPersonData.filter(
            (inh) => inh.region === country);
        listOfCountries.push(`${country}`)

    })
    listOfCountries.sort().forEach((country) => {
        const newButton = document.createElement("button");
        const newP = document.createElement("p");
        newButton.innerHTML = country;
        newButton.onclick = function () {
            const filterCountry = randomPersonData.filter(
                (selectedcountry) => selectedcountry.region === country);
            const totalAge = filterCountry.map((age) => age.age)
                .reduce(function (total, age) { return total + age });
            const sentence = document.getElementById('averageage')
            sentence.innerHTML = `De gemiddelde persoon in ${country.bold()} is ${Math.round(totalAge / filterCountry.length)} jaar oud.`;
        };
        result.appendChild(newButton);
        result.appendChild(newP);

    }
    )
}

