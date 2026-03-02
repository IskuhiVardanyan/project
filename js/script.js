"use strict";
 
// console.log(2);

// const result  = alert("Hello!");
// const result  = confirm("Hello!");

    let numberOfFilms = prompt("how many movies have you watched", '');
    let lastFilm1 = prompt("last watched film", '');
    let filmPoint1 = prompt("which point", '');
    let lastFilm2 = prompt("last watched film", '');
    let filmPoint2 = prompt("which point", '');
    let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };
    personalMovieDB.movies[lastFilm1] = filmPoint1;
    personalMovieDB.movies[lastFilm2] = filmPoint2;

    console.log(personalMovieDB.movies);
    console.log(personalMovieDB);