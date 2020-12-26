"use srtict";
let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели ", "").toLowerCase();
        while (
            personalMovieDB.count == "" ||
            personalMovieDB.count == null ||
            isNaN(personalMovieDB.count)
        ) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели ", "").toLowerCase();
        }
    },
    rememberMyFilms: function () {
        for (personalMovieDB.count; personalMovieDB.count > 0; personalMovieDB.count--) {
            let movielastone = prompt("Как называется этот фильм", "").toLowerCase();
            let scoremovie = +prompt("Насколько вы его оцените", "").toLowerCase();
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
                personalMovieDB.count++;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count <= 10 && personalMovieDB.count >= 0) {
            console.log(" Вы посмотрели слишком мало фильмов");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log(" Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log(" Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (hidden == false) {
            console.log(personalMovieDB);
        }
    },
    toogleVisibleMyDB: function () {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();
            while (personalMovieDB.genres[i - 1] == "" ||
                personalMovieDB.genres[i - 1] == null ||
                personalMovieDB.genres[i - 1] == isNaN(personalMovieDB.genres)) {
                personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toogleVisibleMyDB();