import readlineSync from 'readline-sync';
import { greeting, askForName } from '../src/cli.js';

const printRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (number) => { // функция проверки на четность
	if (number % 2 === 0) {
		return 'yes';
	} else {
		return 'no';
	}
}

// функция для завершения игры
const gameOver = (name, answer, correctAnswer) => {
	console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
	console.log(`Let's try again, ${name}!`);
}

const getRandomInt = (min = 1, max = 100) => { // получение случайного целого числа в диапазоне
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

greeting(); // спрашиваем имя

const name = askForName(); // спрашиваем и сохраняем имя
let i = 1; // счетчик хода (должен быть до трех включительно)

printRules(); // печатаем правила игры

while (i <= 4) {

	if (i === 4) { // если дошли до 4й итерации (3 правильных ответа)
		console.log(`Congratulations, ${name}!`)
		break;
	}

	const number = getRandomInt(); // получаем случайно число
	console.log(`Question: ${number}`); // печатаем вопрос
	const answer = readlineSync.question(`Answer: `); // записываем ответ
	const correctAnswer = isEven(number); // определяем правильный ответ

	if (answer === correctAnswer) {
		i += 1;
		console.log('Correct!'); // печатаем и уходим на след. итерацию.
	} else {
		gameOver(name, answer, correctAnswer); // завершаем игру и выходим
		break;
	}
}