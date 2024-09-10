/*Extend the program from previous task to ask for three numbers.*/
process.stdout.write("Please enter 3 numbers with a singular space inbetween them: ");
process.stdin.on("data", function( inputFromUser ){
    let input = inputFromUser.toString().trim().split(" ");
    let a = Math.max(Number(input[0]),Number(input[1]),Number(input[2]))
    process.stdout.write("You entered "+Number(input[0])+","+Number(input[1])+" ,"+Number(input[2])+"\nand the largest number was "+a+"\n");
    process.exit();
})