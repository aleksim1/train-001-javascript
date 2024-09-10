/*Create a simple program in which the user is asked to give two numbers and then
your program prints out which one of them is largest.*/
process.stdout.write("Please enter 2 numbers with a singular space inbetween them: ")
process.stdin.on("data", function( inputFromUser ){
    let input = inputFromUser.toString().split(" ")
    let input1 = Number(input[0]);
    let input2 = Number(input[1]);
    if (input1 > input2){
        process.stdout.write("The larger number is "+input1+"\n");
    }
    else {
        process.stdout.write("The larger number is "+input2+"\n");
    }
    process.exit();
})