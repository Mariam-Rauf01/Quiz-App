#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_01",
        type: "list",
        message: chalk.bold.italic
            .yellow `What does TypeScript offer that JavaScript does not?`,
        choices: [
            "a) Optional static typing",
            "b) Dynamic typing",
            "c) No typing system",
            "d) Strongly-typed variables",
        ],
    },
    {
        name: "question_02",
        type: "list",
        message: chalk.bold.italic
            .yellow `Which keyword is used to declare a variable with a specific type in TypeScript?`,
        choices: ["a) let", "b) var", "c) type", "d) const"],
    },
    {
        name: "question_03",
        type: "list",
        message: chalk.bold.italic
            .yellow `What is the purpose of interfaces in TypeScript?`,
        choices: [
            "a) To define object types",
            "b) To create classes",
            "c) To import modules",
            "d) To handle exceptions",
        ],
    },
    {
        name: "question_04",
        type: "list",
        message: chalk.bold.italic
            .yellow `What is the key benefit of using TypeScript over JavaScript?`,
        choices: [
            "a) Faster runtime performance",
            "b) Better compatibility with older browsers",
            "c) Enhanced code readability and maintainability",
            "d) Access to more built-in functions",
        ],
    },
    {
        name: "question_05",
        type: "list",
        message: chalk.bold.italic
            .yellow `How can you define an array of numbers in TypeScript?`,
        choices: [
            "a) let numbers: array = [1, 2, 3];",
            "b) let numbers: number[] = [1, 2, 3];",
            "c) let numbers: numbers = [1, 2, 3];",
            "d) let numbers: array<number> = [1, 2, 3];",
        ],
    },
    {
        name: "question_06",
        type: "list",
        message: chalk.bold.italic
            .yellow `What does the 'readonly' keyword do in TypeScript?`,
        choices: [
            "a) Allows variables to be modified after initialization",
            "b) Prevents variables from being modified after initialization",
            "c) Makes variables accessible globally",
            "d) Specifies a variable as a constant",
        ],
    },
    {
        name: "question_07",
        type: "list",
        message: chalk.bold.italic
            .yellow `Which operator is used for type assertion in TypeScript?`,
        choices: ["a) ::", "b) ||", "c) as", "d) >>"],
    },
    {
        name: "question_08",
        type: "list",
        message: chalk.bold.italic
            .yellow `How do you install TypeScript globally using npm?`,
        choices: [
            "a) npm install -g typescript",
            "b) npm typescript --global",
            "c) npm global add typescript",
            "d) npm add typescript --global",
        ],
    },
    {
        name: "question_09",
        type: "list",
        message: chalk.bold.italic
            .yellow `What is the file extension for TypeScript files?`,
        choices: ["a) .ts", "b) .js", "c) .tsc", "d) .txt"],
    },
    {
        name: "question_10",
        type: "list",
        message: chalk.bold.italic
            .yellow `What does the 'strictNullChecks' flag in tsconfig.json do?`,
        choices: [
            "a) Allows null values in all variables",
            "b) Enforces strict null checking for variables",
            "c) Disables null checking",
            "d) Has no effect on null checking",
        ],
    },
]);
let score = 0;
switch (quiz.question_01) {
    case "a) Optional static typing":
        console.log(chalk.green.bold.italic `01. Correct!`);
        ++score;
        break;
    default:
        console.log(chalk.red.bold.italic `01. Incorrect!`);
}
switch (quiz.question_02) {
    case "c) type":
        console.log(chalk.green.bold.italic `02. Correct!`);
        ++score;
        break;
    default:
        console.log(chalk.red.bold.italic `02. Incorrect!`);
}
switch (quiz.question_03) {
    case "d) To handle exceptions":
        console.log(chalk.green.bold.italic `03. Correct!`);
        ++score;
        break;
    default:
        console.log(chalk.red.bold.italic `03. Incorrect!`);
}
switch (quiz.question_04) {
    case "c) Enhanced code readability and maintainability":
        console.log(chalk.green.bold.italic `04. Correct!`);
        ++score;
        break;
    default:
        console.log(chalk.red.bold.italic `04. Incorrect!`);
}
switch (quiz.question_05) {
    case "b) let numbers: number[] = [1, 2, 3];":
        console.log(chalk.green.bold.italic `05. Correct!`);
        ++score;
        break;
    default:
        console.log(chalk.red.bold.italic `05. Incorrect!`);
}
switch (quiz.question_06) {
    case "b) Prevents variables from being modified after initialization":
        console.log(chalk.green.bold.italic `06. Correct!`);
        ++score;
        break;
    default:
        console.log(chalk.red.bold.italic `06. Incorrect!`);
}
switch (quiz.question_07) {
    case "c) as":
        console.log(chalk.green.bold.italic `07. Correct!`);
        ++score;
        break;
    default:
        console.log(chalk.red.bold.italic `07. Incorrect!`);
}
switch (quiz.question_08) {
    case "a) npm install -g typescript":
        console.log(chalk.green.bold.italic `08. Correct!`);
        ++score;
        break;
    default:
        console.log(chalk.red.bold.italic `08. Incorrect!`);
}
switch (quiz.question_09) {
    case "a) .ts":
        console.log(chalk.green.bold.italic `09. Correct!`);
        ++score;
        break;
    default:
        console.log(chalk.red.bold.italic `09. Incorrect!`);
}
switch (quiz.question_10) {
    case "b) Enforces strict null checking for variables":
        console.log(chalk.green.bold.italic `10. Correct!`);
        ++score;
        break;
    default:
        console.log(chalk.red.bold.italic `10. Incorrect!`);
}
if (score == 10) {
    console.log(chalk.bold.italic.green(`\nCongratulations! You got a perfect score!`));
    console.log(chalk.bold.italic.yellow(`Your score is: ${score} /10 `));
}
else if (score >= 6) {
    console.log(chalk.bold.italic.green(`\nCongratulations! You got a high score!`));
    console.log(chalk.bold.italic.yellow(`Your score is: ${score} /10 `));
}
else {
    console.log(chalk.bold.italic.red(`\nYou need to work on your quiz!`));
    console.log(chalk.bold.italic.yellow(`Your score is: ${score} /10 `));
}
