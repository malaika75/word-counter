#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count words:",
    }
]);
const words = answer.sentence.trim().split(" ");
console.log(words);
const letters = answer.sentence.trim().replace(/\s+/g, "");
console.log(letters);
console.log(`Number of letters: ${letters.length}`);
console.log(`Number of  words :  ${words.length}`);
