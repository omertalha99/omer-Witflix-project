function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function myFunction2() {
    var element = document.body;
    // Burada istediğiniz sınıfı toggle içinde belirtmelisiniz
    element.classList.toggle("other-mode");
}

// Film listesi
const movies = [
    {
        title: "The Batman",
        poster: "https://i.ebayimg.com/images/g/Dl0AAOSwmKBjwKdO/s-l1200.jpg",
        rating: "7.8",
        director: "Matt Reeves",
        trailerUrl: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
        time: "2h 21 min",
        age: "18+",
        starring: "Robert Pattinson",
        moviegenre: "Action",
        tags: "Mystery",
        time2: "2h 22 min",
        age2: "19+"
    },
    {
        title: "Chase",
        poster: "https://i.ytimg.com/vi/W1D0puderfs/maxresdefault.jpg",
        rating: "8.6",
        director: "Michael Matteo Rossi",
        trailerUrl: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
        time: "2h 22 min",
        age: "19+",
        starring: "Aeron Eokhard",
        moviegenre: "Action",
        tags: "Thriller, Action",
        time2: "2h 22 min",
        age2: "19+"
    },
    {
        title: "Avatar",
        poster: "https://m.media-amazon.com/images/I/71W6Yi0j5VL.jpg",
        rating: "7.5",
        director: "James Cameron",
        trailerUrl: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
        time: "2h 90 min",
        age: "16+",
        starring: "Sam Worthington",
        moviegenre: "Adventure",
        tags: "Life, Adventure",
        time2: "2h 22 min",
        age2: "19+"
    },
    {
        title: "Heat",
        poster: "https://www.inkandcinema.com/cdn/shop/articles/Script_Library_-_Heat.jpg?v=1695333494&width=3200",
        rating: "8.6",
        director: "Michael Man",
        trailerUrl: "https://www.youtube.com/watch?v=0xbBLJ1WGwQ",
        time: "2h 30 min",
        age: "18+",
        starring: "Al Pacino",
        moviegenre: "Action",
        tags: "Robbery, Bank",
        time2: "2h 22 min",
        age2: "19+"
    }
];
// Rastgele film seçme fonksiyonu
function getRandomMovie() {
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
}

// Sayfa yüklendiğinde rastgele afişi göster
window.onload = function() {
    const randomMovie = getRandomMovie();

    document.getElementById('poster').src = randomMovie.poster;
    document.getElementById('movieTitle').textContent = randomMovie.title;
    document.getElementById('movieRating').innerHTML = getStarRating(randomMovie.rating) + " (" + randomMovie.rating + ")";

    document.getElementById('time').textContent = randomMovie.time;
    document.getElementById('age2').textContent = randomMovie.age;
    document.getElementById('starring').textContent = randomMovie.starring;
    document.getElementById('moviegenre').textContent = randomMovie.moviegenre;
    document.getElementById('tags').textContent = randomMovie.tags;

    // Yeni eklenen öğeler: time2 ve age2
    document.getElementById('time2').innerHTML = randomMovie.time2 || "Zaman yok"; // Değer boşsa
    document.getElementById('age2').innerHTML = randomMovie.age2 || "Yaş yok"; // Değer boşsa

    // Play butonuna tıklanınca fragman sayfasına git
    document.getElementById('playButton').onclick = function() {
        window.open(randomMovie.trailerUrl, "_blank");
    }
}

// Yıldız derecelendirmesi hesaplama fonksiyonu
function getStarRating(rating) {
    const maxStars = 5;
    const starCount = Math.round((rating / 10) * maxStars);
    let stars = '';
    for (let i = 0; i < maxStars; i++) {
        stars += (i < starCount) ? '★' : '☆';
    }
    return stars;
}
