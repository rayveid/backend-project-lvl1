// функция для завершения игры
export const gameOver = (name, answer, correctAnswer) => {
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
  );
  console.log(`Let's try again, ${name}!`);
};

// получение случайного целого числа в диапазоне
export const getRandomInt = (min = 1, max = 100) => {
  const normalMin = Math.ceil(min);
  const normalMax = Math.floor(max);
  return Math.floor(Math.random() * (normalMax - normalMin)) + normalMin; // Максимум не включается, минимум включается
};

// функция проверки на четность
export const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

// получение случайной операции
export const getRandomOperation = () => {
  const possibleOperations = ['*', '-', '+']; // массив из возможных операций
  const index = getRandomInt(0, possibleOperations.length - 1); // получаем случайный индекс
  return possibleOperations[index]; // возвращаем случайное выражение
};
