function searchOMDB(apiKey, movieTitle) {
   const inputTitle = 'Titanik'
    const apiUrl = `https://www.omdbapi.com/?t=${inputTitle}&apiKey=33028d3`;


    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        
        displayMovieInfo(data);
    })
    .catch(error => {
        console.error("Ошибка при обработке запроса:", error);
    });
}

function displayMovieInfo(movieData) {
    
    const outputElement = document.getElementById("movieInfo");

 
    const html = `
        <h2>${movieData.Title}</h2>
        <p><strong>Год выпуска:</strong> ${movieData.Year}</p>
        <p><strong>Режиссер:</strong> ${movieData.Director}</p>
        <p><strong>Актеры:</strong> ${movieData.Actors}</p>
        <p><strong>Описание:</strong> ${movieData.Plot}</p>
        <img src="${movieData.Poster}" alt="${movieData.Title} Poster">
    `;

    outputElement.innerHTML = html;
}


const apiKey = "YOUR_API_KEY_HERE"; 
const movieTitle = "Avatar"; 
searchOMDB(apiKey, movieTitle);
