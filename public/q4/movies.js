document.getElementById("addMovie").addEventListener("click", function(e) {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let year = document.getElementById("year").value;
    let genre = document.getElementById("genre").value;
    let rating = document.querySelector('input[name="rating"]:checked').value;

    let movie = {
        title: title,
        year: year,
        genre: genre,
        rating: rating
    }

    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));

    displayMovies();
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
