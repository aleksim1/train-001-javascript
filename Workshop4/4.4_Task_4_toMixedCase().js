/**
 Create a program that asks the user for a string and then
prints it out so that all odd characters are in uppercase
and all even characters are in lower case. Use a for loop.
 */
process.stdout.write("Please enter a string: ")
process.stdin.on("data", function(inputFromUser){
    process.stdout.write("The word in mixed case is: ")
    let result = "";
    const input = inputFromUser.toString().trim()
    for (let i = 0; i <=input.length; i++){
        if (i % 2 === 0){
            result += input.charAt(i).toUpperCase();
        } else{
            result += input.charAt(i).toLowerCase();
        }
        
    }
    process.stdout.write(result)
    process.stdout.write("\n")
    process.exit();
})