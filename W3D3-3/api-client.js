
const API_KEY = "761781b5436fd1cf26c1a07b2f8b1cc3";

const getData = async function () {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    try {
    const res = await fetch(apiUrl, {method: 'GET'}); 
    console.log("The response from the API in getData function ", res);
    const data = await res.json();
    console.log("The data in getData function ", data);
    return data;
    } catch (error) {
        console.log(error)
    }
}

