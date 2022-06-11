
const prompt = require('prompt-sync')({sigint: true});

let input =Number(prompt ("How many sides would you like the dice to have?"))


console.log(Math.ceil(Math.random() * input))
