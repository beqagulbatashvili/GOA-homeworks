async function getMovies() {
    try {
        const response = await fetch("https://www.omdbapi.com/?apikey=4a3b711b&s=batman");
        const data = await response.json();

        const container = document.getElementById("movie-container");
        data.Search.forEach(movie => {
        const div = document.createElement("div");
        div.classList.add("movie");
        div.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
        `;
        container.appendChild(div);
        });
    } catch (error) {
        console.log("დაფიქსირდა შეცდომა:", error);
    }
}

getMovies();
