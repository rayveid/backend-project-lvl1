import readlineSync from 'readline-sync';
import { greeting, askForName } from '../src/cli.js';

greeting();
const name = askForName(); // функция возвращает имя пользователя

const isEven = (number) => {
	if (number % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

// const brainEven = (name) => {

// };