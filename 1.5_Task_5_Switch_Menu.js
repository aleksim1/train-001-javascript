/**Create a program with a simple menu and following
functionality:
1. Print hello
2. Print current date
3. End program
Remember to check invalid input, too.
Hint! Use switch for this. */
process.stdout.write("Please select what you want to do\n1 - Print out hello\n2 - Print out current date & time\n0 - Exit?\n")
process.stdin.on("data", function (inputFromUser){
    let input = inputFromUser.toString().trim()
    if (isNaN(input)||input<0||input>2){
        process.stdout.write("Please give a correct value!\n");
        return;
    }
    switch (input){
        case "1":
            process.stdout.write("Hello!\n");
            break;
        case "2":
            console.log("Current date & time: "+new Date());
            break;
        default:
            process.exit();
    }
})