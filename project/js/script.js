'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
            "Побег из Шоушенка",
            "Зеленая миля"
        ]
    };
    const adv = document.querySelectorAll(".promo__adv img");
    const promofoto = document.querySelector(".promo__adv ");
    const poster = document.querySelector(".promo__bg");
    const genre = document.querySelector(".promo__genre");
    const movieList = document.querySelector('.promo__interactive-list');
    const addForm = document.querySelector('form.add');
    const addInput = addForm.querySelector('.adding__input');
    const checkbox = addForm.querySelector('[type="checkbox"]');


    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.cheked;
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
        if( favorite) {
            console.log("Добавляется либимый фильм");
        }
            movieDB.movies.push(newFilm);
            sortArray(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }
        event.target.reset();
    });


    //Удаление рекламы справа
    function deleteElements(advvv) {
        advvv.forEach(item => {
            item.remove();
        });
    }
    //Замена жанра
    //Замена картинки марсианина
    //Добавление обычной картинки в промо
    const makeChanges = () => {
        promofoto.insertAdjacentHTML('beforeend',
            '<img src="img/7b7c7f834892699b6eb503c2acbf9d87.jpg" alt="some picture">');
        genre.textContent = 'Драма';
        poster.style.backgroundImage = "url('img/bg.jpg')";
    };

    //Метод сортировки
    const sortArray = (arr) => {
        arr.sort();
    };


    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArray(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1} ${film}
                    <div class="delete"></div>
                </li>`;
                
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(movieDB.movies, movieList);

            });
        });
    }
    createMovieList(movieDB.movies, movieList);
    deleteElements(adv);
    makeChanges();
});