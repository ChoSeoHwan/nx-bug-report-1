import { input } from "@inquirer/prompts";

console.log('Executor ran for MyTest');

const data = await input({ message: 'input text...' });
console.log(data);
