/**Write a simple program that asks user for three numbers and create
the following logic:
▪ If all three numbers are equal print out “You entered three matching numbers”.
▪ If all three numbers are different print out “You entered three different numbers”.
▪ If first two are the same, but the third one is different, print out “Third one doesn’t fit”.
▪ If any of the numbers is 2, enter “You entered the magic number 2!”. */

process.stdout.write("Please, enter three numbers seperated by a singular space ")
process.stdin.on("data",function(inputFromUser){
    let input = inputFromUser.toString().trim().split(" ");
    if (input[0]==input[1]&&input[1]==input[2]){
        process.stdout.write("You entered three matching numbers!\n");
    } else if (input[0]!==input[1]&&input[1]!==input[2]&&input[0]!==input[2]) {
        process.stdout.write("You entered three different numbers!!\n");
    } else if ((input[0]==input[1]&&input[1]!==input[2])||(input[1]==input[2]&&input[0]!==input[2])||(input[0]==input[2]&&input[1]!==input[0])) {
        process.stdout.write("One of the numbers doesnt fit!\n");        
    } else {
    return;
    }
    if (input[0]==2||input[1]==2||input[2]==2){
        process.stdout.write("You entered the magic number 2!\n");
    }
    process.exit();
})