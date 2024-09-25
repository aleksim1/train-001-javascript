/*Create a program that finds specific items in an array.
1. Create an array with the following items: 55, 23,
6456, 324, 21, 234, 72, 21
2. Ask the user what they want to search for in the
integer array.
3. Loop through the array and compare the values with the input given by the user.
4. If the item is found, print out in which index the value was found.
5. If the item is not found, print out a message saying item was not found.*/
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const userArray = [55, 23, 6456, 324, 21, 234, 72, 21];
let x = 0;
function lookForNumber(){
    for(let i = 0; i < userArray.length;i++){
        if (userArray[i]===x){
            return `${x} Was found in index ${i}`
}
} return `${x} Was not found`
}

function askForNumber(){
rl.question("The number you'd like to search: ", (answer)=>{
    if (!isNaN(answer)){
        x += Number(answer)
        process.stdout.write(`${lookForNumber()}\n`);
        rl.close();
    } else {
    askForNumber();
    }
}
)}
askForNumber()