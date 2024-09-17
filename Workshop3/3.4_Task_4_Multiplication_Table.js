/**Ask the user to enter a number and then print out corresponding multiplication
table using a loop.
Optional: Try to make printing according to screenshot on the right. You might use
util.format, padStart() and padEnd() to achieve this. */
process.stdout.write("Please enter a number: ");
process.stdin.on("data", function (inputFromUser) 
{   
    if (isNaN(inputFromUser)){
        process.stdout.write("Please enter a number! ")
        return;}
    const util = require( "util" ) ;

    process.stdout.write("Multiplication table for "+inputFromUser)
    process.stdout.write("###############################\n")
    for (let i = 1; i <= 10; i++){
        let y = i * inputFromUser
        process.stdout.write(util.format("%s %s * %s = %s%s\n",
            "*",
            i.toString().padStart(10),
            Number(inputFromUser),
            y.toString().padEnd(10),
            "*",))
    }
    process.stdout.write("###############################\n")
    process.exit()
})