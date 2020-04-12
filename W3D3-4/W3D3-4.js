
//Deel 1, opdracht 1

const API_KEY = "761781b5436fd1cf26c1a07b2f8b1cc3";

const getData = async function () {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    try {
        const res = await fetch(apiUrl, { method: 'GET' });
        const data = await res.json();
        genres = data.genres;
        const list = document.getElementById('genrelist').getElementsByTagName('li');
        const genreWithLi = genres.map(genre => {
        const newLi = document.createElement("li");
        newLi.innerHTML = `genre naam: ${genre.name}, id: ${genre.id}`;
        genrelist.appendChild(newLi);
        })
        
     }
    catch (error) {
            console.log(error)}   
        
        
        }

getData();


const getTitanic = async function () {
    const TitanicURL = `https://api.themoviedb.org/3/find/tt0120338?api_key=761781b5436fd1cf26c1a07b2f8b1cc3&external_source=imdb_id`;
    const res = await fetch (TitanicURL, { method: 'GET'});
    const resJson = await res.json();
    console.log(resJson);
    const TitleTitanic = resJson.movie_results[0].title;
    const favTitle = document.getElementById('favtitel');
    favTitle.innerHTML= `${TitleTitanic}`;
   }
    
getTitanic();

/* Opdracht 2

The Lion King (2019): 
https://api.themoviedb.org/3/find/tt6105098?api_key=761781b5436fd1cf26c1a07b2f8b1cc3&external_source=imdb_id

Joker (2019): 
https://api.themoviedb.org/3/find/tt7286456?api_key=761781b5436fd1cf26c1a07b2f8b1cc3&external_source=imdb_id

Toy Story 4 (2019): 
https://api.themoviedb.org/3/find/tt1979376?api_key=761781b5436fd1cf26c1a07b2f8b1cc3&external_source=imdb_id

*/ 


// Opdracht 3

const getTopRated = async function () {
    
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
    try {
        const res = await fetch(apiUrl, { method: 'GET' });
        const data = await res.json();
        for (i=0; i < 10; i++) { 
        const list = document.getElementById('toprated').getElementsByTagName('li');
        const newLi = document.createElement("li");
        newLi.innerHTML = `${data.results[i].title}`;
        toprated.appendChild(newLi);
        
    }
     }
    catch (error) {
            console.log(error)}   
        
        
        }

getTopRated();

// Opdracht 4 

const getTopGenreMovies = async function () { 

    const apiUrl =  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=vote_average.desc`;
    try {
        const res = await fetch(apiUrl, { method: 'GET' });
        const data = await res.json();
        for (i=0; i < data.results.length; i++) { 
            const list = document.getElementById('topaction').getElementsByTagName('li');
            const newLi = document.createElement("li");
            newLi.innerHTML = `${data.results[i].title}`;
            topaction.appendChild(newLi);
        
    }
}
    catch (error) {
            console.log(error)}   
        
    }   
    getTopGenreMovies();

// Opdracht 5 

const getMovies75 = async function () { 

    const apiUrl =  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&year=1975`;
    try {
        const res = await fetch(apiUrl, { method: 'GET' });
        const data = await res.json();
        for (i=0; i < data.results.length; i++) { 
            const list = document.getElementById('movies1975').getElementsByTagName('li');
            const newLi = document.createElement("li");
            newLi.innerHTML = `${data.results[i].title}`;
            movies1975.appendChild(newLi);
        
    }
}
    catch (error) {
            console.log(error)}   
        
    }   
    getMovies75();


    // Deel 2 +3 (uitgevoerd in Postman met POST-method (deel 2) en met DELETE-method (deel 3))
    //https://api.themoviedb.org/3/movie/597/rating?api_key=761781b5436fd1cf26c1a07b2f8b1cc3&Content-Type=application/json;charset=utf-8&value=9&session_id=a6ec49eaa8bce84e95cea962152305cbf6e23d7f
        

