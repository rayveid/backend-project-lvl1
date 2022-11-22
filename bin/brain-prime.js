#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { askForName } from '../src/cli.js';
import { gameOver, getRandomInt } from '../src/index.js';

const name = askForName(); // запрашиваем имя и сохраняем
console.log('Answer "yes" if given number is prime. Otherwise answer "no".'); // выводим правила

// определение простоты числа
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

let i = 0;

while (i <= 3) {
  if (i === 3) {
    // если дошли до 4й итерации (3 правильных ответа)
    console.log(`Congratulations, ${name}!`);
    break;
  }

  const num = getRandomInt();
  console.log(`Question: ${num}`); // печатаем вопрос
  const answer = readlineSync.question('Your answer: '); // записываем ответ
  const correctAnswer = isPrime(num) ? 'yes' : 'no'; // определяем правильный ответ

  if (answer === correctAnswer) {
    i += 1;
    console.log('Correct!'); // печатаем и уходим на след. итерацию.
  } else {
    gameOver(name, answer, correctAnswer); // завершаем игру и выходим
    break;
  }
}
