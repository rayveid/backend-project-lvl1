import readlineSync from 'readline-sync';
import { askForName } from '../src/cli.js';
import { gameOver, getRandomInt } from '../src/index.js';

// greeting();
const name = askForName(); // запрашиваем имя и сохраняем

const mapping = { // сопоставляем возможные значения 
	'*': (a, b) => parseInt(a * b),
	'-': (a, b) => parseInt(a - b),
	'+': (a, b) => parseInt(a + b),
}

console.log('What is the result of the expression?') // выводим правила
let i = 0; // вводим счетчик

while (i <= 3) {
	if (i === 3) { // если дошли до 4й итерации (3 правильных ответа)
		console.log(`Congratulations, ${name}!`)
		break;
	}

	const num1 = getRandomInt(); // получаем числа для дальнейшей работы
	const num2 = getRandomInt();
	const operation = getRadomOperation(); // получаем случайную операцию
	console.log(`Question: ${num1} ${operation} ${num2}`); // печатаем вопрос
	const answer = parseInt(readlineSync.question(`Your answer: `)); // записываем ответ
	const correctAnswer = mapping[operation](num1, num2) // определяем правильный ответ

	if (answer === correctAnswer) {
		i += 1;
		console.log('Correct!'); // печатаем и уходим на след. итерацию.
	} else {
		gameOver(name, answer, correctAnswer); // завершаем игру и выходим
		break;
	}
}


