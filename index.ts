#!/usr/bin/env node
import inquirer from 'inquirer';
console.log("******Welcome To My Word Counter Project******");

const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);

const words = answers.Sentence.trim().split(" ");

console.log(words);

console.log(`Your sentence word count is ${words.length}`);