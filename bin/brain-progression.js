#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { askForName } from '../src/cli.js';
import { gameOver, getRandomInt } from '../src/index.js';

const name = askForName(); // запрашиваем имя и сохраняем
console.log('What number is missing in the progression?'); // выводим правила

// функция возвращающая прогрbессию-массив чисел
const generateProgression = () => {
  const step = getRandomInt(1, 10); // шаг прогрессии
  const length = getRandomInt(5, 15); // длина прогресии
  const progression = []; // массив для хранения прогрессии

  for (let i = 0; i < length; i += 1) {
    // i текущий индекс элемента
    if (progression.length === 0) {
      // первый шаг обрабатывается по отдельной логике
      const num = getRandomInt(1, 10);
      progression.push(num);
    } else {
      const prevNum = progression[i - 1]; // находим предыдущее число
      const num = prevNum + step;
      progression.push(num);
    }
  }

  return progression;
};

// ф-я извлекающая рандомный элемент из прогрессии, возвращает массив [элемент, индекс]
const getElement = (progression) => {
  const index = getRandomInt(0, progression.length - 1);
  return [progression[index], index];
};

// ф-я возвращающая элемент с замененным на .. индексом
const shredProgression = (progression, index) => {
  const shreddedProgression = progression.map((element) => element);
  shreddedProgression[index] = '..';
  return shreddedProgression;
};

let i = 0;

while (i <= 3) {
  if (i === 3) {
    // если дошли до 4й итерации (3 правильных ответа)
    console.log(`Congratulations, ${name}!`);
    break;
  }

  const progression = generateProgression();
  const element = getElement(progression);
  const shredded = shredProgression(progression, element[1]);

  console.log(`Question: ${shredded.join(' ')}`); // печатаем вопрос
  const answer = parseInt(readlineSync.question('Your answer: '), 10); // записываем ответ
  const correctAnswer = parseInt(element[0], 10); // определяем правильный ответ

  if (answer === correctAnswer) {
    i += 1;
    console.log('Correct!'); // печатаем и уходим на след. итерацию.
  } else {
    gameOver(name, answer, correctAnswer); // завершаем игру и выходим
    break;
  }
}
