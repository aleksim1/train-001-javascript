/**Create a program that asks user for number and
calculates the average for them. Numbers will be asked
till the user enters a letter.
Hint! You can check whether a value is numeric with
isNaN(). */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const userArray = [];

function getAverage(array) {
    let average = 0
    for (i=0; i < array.length;i++){
     average += array[i] 
}
    return average / userArray.length;
}

function askForNumber() {
rl.question('Enter a number: ',(answer) => {
    if (isNaN(answer)){
        process.stdout.write(`The average is ${getAverage(userArray)}\n`);
        console.table(userArray)
        rl.close();
    } else {
    userArray.push(Number(answer));
    askForNumber();
    }
}
)};

process.stdout.write("This program calculates the mean value of\nthe numbers you enter from the keyboard.\nThe program stops when you enter a letter")
askForNumber()