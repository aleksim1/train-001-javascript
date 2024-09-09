/*Write a simple program that asks user a simple yes or no question and prints out a
corresponding message. Remember to also handle invalid input */
process.stdout.write("Are you younger than 18?\nPlease, answer Y or N : ")
process.stdin.on("data", function(inputFromUser){
    let answer = inputFromUser.toString().trim().toLocaleLowerCase();
    if (answer === "y"){
        process.stdout.write("You are a grown up\n")
    } else if (answer === "n") {
        process.stdout.write("You are not a grown up yet!\n")
    }
    else {
    process.stdout.write("Please give a valid input: ")
    return
    }
    

process.exit()})