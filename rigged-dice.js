
const prompt = require('prompt-sync')({sigint: true});

let input =Number(prompt ("Choose a side of side to be rigged 1-6: "))

dice=(Math.ceil(Math.random()*7))

    if (dice === 7) {
        console.log(input)
    }
    else if (dice <= 6)
        console.log(dice)