const maxBottles = (N, K) => {
  let [result, empty, full] = [0, 0, N];

  while (full > 0) {
    // console.log('Выпиваем все бутылки, их:', full)
    result += full;
    // console.log('Итого можем выпить:', result);
    empty += full;
    console.log('Пьем бутылки, становится пустых:', empty);

    full = Math.floor(empty / K);
    // console.log('Полных:', full)
    empty = empty % K;
    console.log('Пустых осталось:', empty);
  }
  return result;
};

console.log(maxBottles(22, 3));