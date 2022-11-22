#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { askForName } from '../src/cli.js'
import { gameOver, getRandomInt } from '../src/index.js'

const name = askForName() // запрашиваем имя и сохраняем

const findGcd = (num1, num2) => {
    // рекурсивная функция для нахождения GCD
    if (!num2) {
        return num1
    }

    return findGcd(num2, num1 % num2)
}

console.log('Find the greatest common divisor of given numbers?') // выводим правила
let i = 0

while (i <= 3) {
    if (i === 3) {
        // если дошли до 4й итерации (3 правильных ответа)
        console.log(`Congratulations, ${name}!`)
        break
    }

    const num1 = getRandomInt() // получаем случайно число
    const num2 = getRandomInt() // получаем случайно число
    console.log(`Question: ${num1} ${num2}`) // печатаем вопрос
    const answer = parseInt(readlineSync.question(`Your answer: `), 10) // записываем ответ
    const correctAnswer = parseInt(findGcd(num1, num2), 10) // определяем правильный ответ

    if (answer === correctAnswer) {
        i += 1
        console.log('Correct!') // печатаем и уходим на след. итерацию.
    } else {
        gameOver(name, answer, correctAnswer) // завершаем игру и выходим
        break
    }
}
