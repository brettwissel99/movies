let movieRatings = [];

function addRating() {
    const movieName = document.getElementById('movie-name').value;
    const movieRating = document.getElementById('movie-rating').value;

    if (movieName && movieRating >= 1 && movieRating <= 10) {
        movieRatings.push({ name: movieName, rating: parseInt(movieRating) });
        updateMovieList();
        generateRecommendations();
    } else {
        alert("Please enter a valid movie name and rating between 1 and 10.");
    }

    // Clear input fields
    document.getElementById('movie-name').value = '';
    document.getElementById('movie-rating').value = '';
}

function updateMovieList() {
    const movieList = document.getElementById('movie-list-items');
    movieList.innerHTML = '';

    movieRatings.forEach(movie => {
        const listItem = document.createElement('li');
        listItem.textContent = `${movie.name} - Rating: ${movie.rating}`;
        movieList.appendChild(listItem);
    });
}

function generateRecommendations() {
    const recommendationList = document.getElementById('recommendation-list');
    recommendationList.innerHTML = '';

    if (movieRatings.length === 0) {
        recommendationList.innerHTML = '<li>No data yet for recommendations.</li>';
        return;
    }

    // Create a simple recommendation logic based on average rating
    const avgRating = movieRatings.reduce((sum, movie) => sum + movie.rating, 0) / movieRatings.length;
    
    const recommendedMovies = [
        { name: "Inception", rating: 9 },
        { name: "The Dark Knight", rating: 10 },
        { name: "Interstellar", rating: 8 },
        { name: "The Matrix", rating: 7 },
        { name: "The Prestige", rating: 8 }
    ];

    const filteredRecommendations = recommendedMovies.filter(movie => movie.rating >= avgRating);

    filteredRecommendations.forEach(movie => {
        const listItem = document.createElement('li');
        listItem.textContent = `${movie.name} (Recommended based on your preferences)`;
        recommendationList.appendChild(listItem);
    });
}
