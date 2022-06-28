"use strict";


let numberOfFilms;

function start(){
  numberOfFilms = +prompt('Сколько фильмов вы посмотрели?');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?');
  }
}

start();


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

console.log(personalMovieDB.count);


// do .. while 

// for (let i = 0; i < 2; i++){
//   let filmName = '',
//       filmRate = '';
//   do {
//     filmName = prompt('Один из последних просмотренных фильмов?');
//     filmRate = +prompt('Сколько баллов ему бы дали?');
//   }
//   while (filmName == '' || filmName == null || filmRate == '' || filmRate == null || filmName.length > 50);
  
//   personalMovieDB.movies[filmName]=filmRate;
// }

// if .. else



function rememberMyFilms(){
  for (let i = 0; i < 2; i++){
    const filmName = prompt('Один из последних просмотренных фильмов?'),
          filmRate = +prompt('Сколько баллов ему бы дали?');
    if (filmName != '' && filmName != null && filmRate != '' && filmRate != null && filmName.length < 50){
      personalMovieDB.movies[filmName]=filmRate;
    } else i--;
  }
}

rememberMyFilms();


// while 

// for (let i = 0; i < 2; i++){
//   let filmName = prompt('Один из последних просмотренных фильмов?'),
//       filmRate = +prompt('Сколько баллов ему бы дали?');
// while (filmName == '' || filmName == null || filmRate == '' || filmRate == null || filmName.length > 50) {
//   filmName = prompt('Один из последних просмотренных фильмов?');
//   filmRate = +prompt('Сколько баллов ему бы дали?');
// }
//   personalMovieDB.movies[filmName]=filmRate;
// }

function showMyDB(hidden){
  if (!hidden) console.log(personalMovieDB);
}
showMyDB(personalMovieDB.private);


function writeYourGenres(){
  for (let i = 1; i < 4; i++){
    let genre = prompt(`Ваш любимый жанр под номером ${i}`);
    while (genre == '' || genre == null || genre.length > 50) {
      i--;
      genre = prompt(`Ваш любимый жанр под номером ${i}`);
    }
    personalMovieDB.genres[i - 1] = genre;
  }
}

writeYourGenres();


function detectFilmLevel(){
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
    console.log('Вы - классический зритель');
  } else if (personalMovieDB.count >= 30 ) {
    console.log('Вы - киноман');
  } else console.log('Произошла ошибка');
  
}

detectFilmLevel();