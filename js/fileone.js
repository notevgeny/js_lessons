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

// for (let i = 0; i < 2; i++){
//   const filmName = prompt('Один из последних просмотренных фильмов?'),
//         filmRate = +prompt('Сколько баллов ему бы дали?');
//   if (filmName != '' && filmName != null && filmRate != '' && filmRate != null && filmName.length < 50){
//     personalMovieDB.movies[filmName]=filmRate;
//   } else i--;
// }


// while 

for (let i = 0; i < 2; i++){
  let filmName = prompt('Один из последних просмотренных фильмов?'),
      filmRate = +prompt('Сколько баллов ему бы дали?');
while (filmName == '' || filmName == null || filmRate == '' || filmRate == null || filmName.length > 50) {
  filmName = prompt('Один из последних просмотренных фильмов?');
  filmRate = +prompt('Сколько баллов ему бы дали?');
}
  personalMovieDB.movies[filmName]=filmRate;
}

if (personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
  console.log('Вы - классический зритель');
} else if (personalMovieDB.count >= 30 ) {
  console.log('Вы - киноман');
} else console.log('Произошла ошибка');

console.log(personalMovieDB);

