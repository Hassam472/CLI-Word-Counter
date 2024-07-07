#! /usr/bin/env node
import inquirer from "inquirer";
const answer = {
    Sentence: String
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Write something so that, I will count the number of words in it"
    }
]);
const words = answer.Sentence.trim().split(" ");
console.log(words);
console.log(`The sentence you wrote contains ${words.length} words`);
