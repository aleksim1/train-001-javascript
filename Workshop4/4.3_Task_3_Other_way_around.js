/**Create a program that asks the user for a string and then
prints it out from the last letter to the first. Use a for loop. */
process.stdout.write("Please enter a string: ")
process.stdin.on("data", function(inputFromUser){
    process.stdout.write("The word backwards is: ")
    const input = inputFromUser.toString().trim()
    for (let i = Number(input.length); i >= 0; i--){
        process.stdout.write(`${input.charAt(i)}`)
    }
    
    process.stdout.write("\n")
    process.exit();
})