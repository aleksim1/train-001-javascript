/**Create a program that keeps asking the user to input
numbers. These numbers are stored in an array. Keep asking
till zero is entered. After that the numbers are printed out in
a reverse order. Don’t use array methods for this but only
simple loops. */
const userArray = [];
let x = 1
process.stdout.write("This program reads numbers you input in.\nAfter receiving a zero it prints the numbers out in a reverse order.\nPlease start entering numbers.\nENTER 0 TO STOP: ")
process.stdin.on("data", function(inputFromUser){
    const input = inputFromUser.toString().trim()
    const number = parseFloat(input)
    if (!isNaN(number)){
        if (number === 0) {
                process.stdout.write("Reverse order is: ")
            for (let i = userArray.length-1;i>=0;i--) {
                process.stdout.write(`${userArray[i]} `)
            }
            process.exit();
        } else {
            userArray.push(number)
            process.stdout.write(`${x++} Enter a number: `)
        }
    }  else {
        console.log("Please enter a valid number")
    }
})