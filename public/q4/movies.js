document.getElementById("addMovie").addEventListener("click", function(e) {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let year = document.getElementById("year").value;
    let genre = document.getElementById("genre").value;
    let rating = parseInt(document.querySelector('input[name="rating"]:checked').value);

    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    let existingMovieIndex = movies.findIndex(movie => movie.title.toLowerCase() === title.toLowerCase());
    
    if (existingMovieIndex !== -1) {
        let existingMovie = movies[existingMovieIndex];
        let oldRating = parseInt(existingMovie.rating);
        let newRating = Math.round((oldRating + rating) / 2);
        
        movies[existingMovieIndex] = {
            title: title,
            year: year,
            genre: genre,
            rating: newRating
        };
    } else {
        let movie = {
            title: title,
            year: year,
            genre: genre,
            rating: rating
        }
        movies.push(movie);
    }
    
    localStorage.setItem("movies", JSON.stringify(movies));
    displayMovies();
    
    document.getElementById("form").reset();
});


function displayMovies() {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];

   let output = "";

   for (let i = 0; i < movies.length; i++) {
       let stars = "★".repeat(movies[i].rating);
       output += "<p>" + movies[i].title + " (" + movies[i].year + ") - " + movies[i].genre + " - " + stars + "</p>" + "<button class='delete-btn' onclick='deleteMovie(" + i + ")'>Delete</button>";
   }
    document.getElementById("movieList").innerHTML = output;
}


function deleteMovie(index) {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.splice(index, 1);
    localStorage.setItem("movies", JSON.stringify(movies));
    displayMovies();
}

displayMovies();
