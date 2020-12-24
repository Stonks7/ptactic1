"use srtict";
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ", "");
console.log(numberOfFilms);
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
let movielastone1 = prompt("Один из последних просмотренных фильмов", "");
let scoremovie1 = prompt("Насколько вы его оцените", "");
let movielastone2 = prompt("Второй из последних просмотренных фильмов", "");
let scoremovie2 = prompt("Насколько вы его оцените", "");
personalMovieDB.movies[movielastone1] = scoremovie1;
personalMovieDB.movies[movielastone2] = scoremovie2;
console.log(personalMovieDB.movies);
