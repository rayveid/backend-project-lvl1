// функция для завершения игры
export const gameOver = (name, answer, correctAnswer) => {
	console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
	console.log(`Let's try again, ${name}!`);
}

// получение случайного целого числа в диапазоне
export const getRandomInt = (min = 1, max = 100) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

// функция проверки на четность
export const isEven = (number) => {
	if (number % 2 === 0) {
		return 'yes';
	} else {
		return 'no';
	}
}

// получение случайной операции
export const getRadomOperation = () => {
	const possibleOperations = ['*', '-', '+']; // массив из возможных операций
	const index = getRandomInt(0, possibleOperations.length - 1); // получаем случайный индекс
	return possibleOperations[index]; // возвращаем случайное выражение
}