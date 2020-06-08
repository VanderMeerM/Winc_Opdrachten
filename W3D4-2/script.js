
document.querySelector('img').addEventListener('mouseover', function () {
  document.getElementById('image').play();
}

);

document.querySelector('button').addEventListener('click', getTrumpQuote);

async function getTrumpQuote() {

  const otherQuotes = document.getElementById('otherquotes');
  while (otherQuotes.lastChild) {
    otherQuotes.removeChild(otherQuotes.lastElementChild);
    otherQuotes.lastElementChild
  }

  let apiUrl = `https://tronalddump.io/random/quote`
  //https://tronalddump.io/quote/Il_bY0K2QkWWaQIQHzcCtw`

  try {
    const res = await fetch(apiUrl, { method: 'GET' });
    const data = await res.json();

    document.getElementById('quote').innerHTML = data.value;
    const link = document.getElementById('link');

    while (link.lastChild) {
      link.removeChild(link.lastElementChild);
      link.lastElementChild
    }

    const newA = document.createElement('a');
    newA.innerHTML = 'Zie originele bron/tweet';
    newA.href = data._embedded.source[0].url;
    link.appendChild(newA);


    async function getMoreQuotes() {

      try {
        const res = await fetch(`https://tronalddump.io/search/quote/?tag=${data.tags}`, { method: 'GET' });
        const quotes = await res.json();

        const currentQuote = document.getElementById('quote').innerHTML;

        while (otherQuotes.lastChild) {
          otherQuotes.removeChild(otherQuotes.lastElementChild);
          otherQuotes.lastElementChild
        }

        let restQuotes = quotes._embedded.quotes.filter(p => p.value !== currentQuote);
        if (restQuotes.length < 1) { console.log('Geen quotes meer voor huidige tag') };

        let foundQuote = quotes._embedded.quotes.filter(p =>
          p.value !== currentQuote).map(x => {
            const newP = document.createElement("p");
            const line = document.createElement("hr");
            newP.innerHTML = x.value;
            otherQuotes.appendChild(newP);
            newP.appendChild(line);
          }
          )

      }

      catch (error) {
        console.log(error)
      }
    }


    if (data.tags != '') { showButton() }
    else { document.getElementById('button').style.visibility = "hidden" }

    function showButton() {
      const button = document.getElementById('button')
      button.style.visibility = "visible";
      button.removeChild(button.childNodes[0]);

      const newButton = document.createElement("button");
      newButton.innerHTML = `Meer quotes lezen over ${data.tags}?`;
      newButton.onclick = getMoreQuotes;
      button.appendChild(newButton);
    }

  }

  catch (error) {
    console.log(error)
  }

}

getTrumpQuote();

