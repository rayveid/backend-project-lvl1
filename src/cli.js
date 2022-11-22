import readlineSync from 'readline-sync';

export const greeting = () => console.log('Welcome to the Brain Games!');

export const askForName = () => {
  greeting();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name; // возращаем имя пользователя
};
