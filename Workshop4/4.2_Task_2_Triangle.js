/*
 Create a program that prints a triangle. Program asks the
user for the height of the triangle and then prints out a
triangle.
 */
process.stdout.write("Please enter a size of triangle: ")
process.stdin.on("data", function(inputFromUser){
    if (isNaN(inputFromUser)){
        return;
}
    for (let i = 1; i <=inputFromUser; i++)
        process.stdout.write("*".repeat(i)+"\n")
    process.exit();
});
