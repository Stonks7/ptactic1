"use srtict";
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ", "");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ", "");
    }
}
start();
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (numberOfFilms; numberOfFilms > 0; numberOfFilms--) {
        let movielastone = prompt("Как называется этот фильм", "");
        let scoremovie = +prompt("Насколько вы его оцените", "");
        if (
            movielastone != null &&
            scoremovie != null &&
            movielastone != "" &&
            scoremovie != "" &&
            movielastone.length < 50
        ) {
            personalMovieDB.movies[movielastone] = scoremovie;
            console.log("You win");
        } else {
            console.log("You broked");
            numberOfFilms++;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10 && personalMovieDB.count >= 0) {
        console.log(" Вы посмотрели слишком мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log(" Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log(" Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectPersonalLevel();

function showMyDB(hidden) { 
    if (hidden == false) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();


// Это еще два вариана цикла:
// if (personalMovieDB.count < 10) ? console.log(" Вы посмотрели слишком мало фильмов") : console.log("");
// if (personalMovieDB.count > 10 && personalMovieDB.count < 30) ?: console.log(" Вы классический зритель");
// if (personalMovieDB.count > 30) ?: console.log(" Вы киноман");

// switch (personalMovieDB.count) {
//     case 0:
//         console.log(" Вы посмотрели слишком мало фильмов");
//         break;
//     case 10 - 30:
//         console.log(" Вы классический зритель");
//         break;
//     case (30 - 2) ^ 50:
//         console.log(" Вы киноман");
//         break;
// }