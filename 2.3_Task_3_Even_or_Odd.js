/* Write a simple program to figure out whether a given number is
even or odd.
Hint! You can use modulo (%) to achieve this. */
process.stdout.write("This program can find out whether a number is even or odd. Please, give it a number: ");
process.stdin.on("data", function(inputFromUser)
{
    if ((Number(inputFromUser)%2)==0){
        process.stdout.write(Number(inputFromUser)+" Is even\n");
    }
    else {
        process.stdout.write(Number(inputFromUser)+" Is odd\n");
    }
    process.exit();
})