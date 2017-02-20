var list = new Array(1, 2, 3);
var list = [1, 2, 3];

var object = new Object();
var object = {};

function drink() {
    return 'drank';
}

var waterBottle = {
    isFull: false,
    oz: 16,
    drink: drink
};

var Array = {
    length: 15,
    pop: function() {}
};


console.log(waterBottle.oz)
console.log(waterBottle.isFull)
console.log(waterBottle.drink())

fetch('http://swapi.co/api/films/1/')
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data);
});

var movies = [
    'Pulp Fiction',
    'Frozen',
    'Ex Machina',
    'The Goonies'
];

console.log(movies);
console.log(movies.length);

console.log(movies[0].toUpperCase());

movies[1] = 'Wall-E';
console.log(movies);

console.log(movies.pop());
console.log(movies);

var emailAddress = 'collin@theironyard.com';
var domainName = emailAddress.split('@').pop();
console.log(domainName);

console.log(movies.slice(1));



for (var i = 0; i < movies.length; i++) {
    // console.log(i);
    var movieTitle = movies[i].title;
    // console.log(movieTitle);
}

movies.forEach(function(movie) {
    console.log(movie);
    console.log(movie.title);
    console.log(movie.year);
});

movies.forEach(logMovie);

function logMovie(movie) {
    console.log(movie);
    console.log(movie.title);
    console.log(movie.year);
}


var total = 0;

prices.forEach(showPrices);

function showPrices(price) {
    total += price;
}

console.log(total);

var prices = [12.54, 12.68, 12.78, 12.00];

var total = getTotal(prices);

function getTotal(prices) {
    return prices.reduce(function(first, second) {
        return first + second;
    }, 0);
}

console.log(total);



var movieTitles = [];

movies.forEach(function(x) {
    movieTitles.push(x.title);
});

console.log(movieTitles);

var movies = [
    {title: 'Pulp Fiction', year: 1996},
    {title: 'Frozen', year: 2014},
    {title: 'Ex Machina', year: 2015},
    {title: 'The Goonies', year: 1986}
];

var movieYears = getMovieYears(movies);

function getMovieYears(listOfMovies) {
    return listOfMovies.map(function(movie) {
        return {
            movieTitle: movie.title.toUpperCase(),
            movieYear: movie.year
        };
    }); 
}

console.log(movieYears);

var names = ['Bart', 'Hemor', 'Morty'];
var searchTerm = 'o';

var matches = names.filter(function(name) {
    return name.toLowerCase().includes(searchTerm.toLowerCase());   
});

console.log(matches);



var music = [
    {
        artist: 'Yotto',
        genre: 'Deep House',
        songTitle: 'Owls'
    },
    {
        artist: 'Erykah Badu', 
        genre: 'R&B',
        songTitle: 'Bag Lady'
    },
    {
        artist: 'Sublime',
        genre: 'Dub Rock',
        songTitle: 'Garden Grove'
    },
    {
        artist: 'Kendrick Lamar',
        genre: 'Hip-Hop',
        songTitle: 'Backseat Freestyle'
    }
]

var songTitles = [];

music.forEach(function(title) {
    songTitles.push(title.songTitle);
});

console.log(songTitles);
