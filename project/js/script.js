/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Побег из Шооушенка",
        "Зеленая миля"
    ]
};
const promo =  document.querySelectorAll(".promo__adv img");
const promofoto =  document.querySelector(".promo__adv ");
const poster = document.querySelector(".promo__bg");
const genreturn = document.querySelector(".promo__genre");
const nameFilm = document.querySelector('.promo__interactive-list');
promo.forEach (item =>{ 
 item.remove();
});
promofoto.insertAdjacentHTML('beforeend','<img src="img/7b7c7f834892699b6eb503c2acbf9d87.jpg" alt="some picture">');
genreturn.textContent = 'Драма';
poster.style.backgroundImage = "url('img/bg.jpg')";

nameFilm.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((film, i) =>{
    nameFilm.innerHTML += 
        `<li class="promo__interactive-item">${i+1}) ${film}
            <div class="delete"></div>
        </li> `;
});

