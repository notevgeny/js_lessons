"use strict";


const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,

  start: function(){
    personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?');
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
      personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?');
    }
  },

  toggleVisibleMyDB: function(){
    const isDBHidden = personalMovieDB.private ? false : true;
    console.log(isDBHidden);
  },

  rememberMyFilms: function(){
    for (let i = 0; i < 2; i++){
      const filmName = prompt('Один из последних просмотренных фильмов?').trim(),
            filmRate = +prompt('Сколько баллов ему бы дали?', '').trim();
      if (filmName != '' && filmName != null && filmRate != '' && filmRate != null && filmName.length < 50){
        personalMovieDB.movies[filmName]=filmRate;
      } else i--;
    }
  },

  showMyDB: function(hidden){
    if (hidden) console.log(personalMovieDB);
  },

  writeYourGenres: function(){
    // for (let i = 1; i < 4; i++){
    //   let genre = prompt(`Ваш любимый жанр под номером ${i}`).trim();
    //   while (genre == '' || genre == null || genre.length > 50) {
    //     i--;
    //     alert('Нужно корректно ввести ответ');
    //     genre = prompt(`Ваш любимый жанр под номером ${i}`).trim();
    //   }
    //   personalMovieDB.genres[i - 1] = genre;
      
    // }

    for (let i = 1; i < 2; i++){
      let genres = prompt(`Введите ваши любимые 3 жанра через запятую`).toLowerCase().trim();
      if (genres === '' || genres === null){
        alert('Нужно корректно ввести ответ');
        i--;
      } else {
        personalMovieDB.genres = genres.split(', ');
        personalMovieDB.genres.sort();
      }
    }

    personalMovieDB.genres.forEach((element, index) => {
      console.log(`Любимый жанр #${index + 1} - это ${element}`);
    });
  },

  detectFilmLevel: function(){
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
      console.log('Вы - классический зритель');
    } else if (personalMovieDB.count >= 30 ) {
      console.log('Вы - киноман');
    } else console.log('Произошла ошибка');
    
  },

};



personalMovieDB.start();

// console.log(personalMovieDB.count);


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



personalMovieDB.toggleVisibleMyDB();
personalMovieDB.rememberMyFilms();


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



personalMovieDB.showMyDB(personalMovieDB.private);

personalMovieDB.writeYourGenres();
personalMovieDB.detectFilmLevel();