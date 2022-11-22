#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { askForName } from '../src/cli.js'
import { gameOver, getRandomInt, isEven } from '../src/index.js'

const printRules = () =>
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
const name = askForName() // спрашиваем и сохраняем имя
let i = 0 // счетчик хода (должен быть до трех включительно)

printRules() // печатаем правила игры

while (i <= 3) {
    if (i === 3) {
        // если дошли до 4й итерации (3 правильных ответа)
        console.log(`Congratulations, ${name}!`)
        break
    }

    const number = getRandomInt() // получаем случайно число
    console.log(`Question: ${number}`) // печатаем вопрос
    const answer = readlineSync.question(`Your answer: `) // записываем ответ
    const correctAnswer = isEven(number) // определяем правильный ответ

    if (answer === correctAnswer) {
        i += 1
        console.log('Correct!') // печатаем и уходим на след. итерацию.
    } else {
        gameOver(name, answer, correctAnswer) // завершаем игру и выходим
        break
    }
}
