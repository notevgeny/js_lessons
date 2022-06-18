"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

console.log(personalMovieDB.count);

for (let i = 0; i < 2; i++){
 const filmName = prompt('Один из последних просмотренных фильмов?'), 
       filmRate = +prompt('Сколько баллов ему бы дали?');
 personalMovieDB.movies[filmName]=filmRate;
}

console.log(personalMovieDB);

