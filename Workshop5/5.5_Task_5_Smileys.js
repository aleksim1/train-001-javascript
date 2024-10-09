/**Create a program that has the following functionality:
1. Ask the user for a string and store it in a variable.
2. replaceSmileys(text): Finds smileys in text and replaces them with corresponding text as
shown in the table below.
3. replaceSmileysWithReplacer(text, replacer): Finds smileys in text and replaces them
with replacer. You can use regular expression (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) for this */
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function replaceSmileys(text){
   text = text.toString().replace(":)", "Smiley")
    
}

rl.question("Please enter a string: ", (answer)=> {
    process.stdout.write(`${replaceSmileys(answer)}`)
})