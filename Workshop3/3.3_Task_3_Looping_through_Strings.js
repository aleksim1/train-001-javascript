/*Create a program with the following functionality:
1. Ask the user to enter a string.
2. Loop through the string and print out the string letter by letter saying “1.
character is [first letter of given string.]”
Hint! You might need the following String methods: charAt() and trim() and
property length. Check them out in documentation. */
process.stdout.write("Please enter a string ");
process.stdin.on("data", function (inputFromUser) 
{
    const x = inputFromUser.toString().trim();
    for (let i = 0; i <= x.length-1; i++){
        process.stdout.write(`${i+1}. Character is ${x.charAt(i)}\n`)
    }
    process.exit()
})