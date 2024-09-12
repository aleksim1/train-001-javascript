process.stdout.write("Please enter a number: ");
process.stdin.on("data", function ( inputFromUser){
    let x = Number(inputFromUser);
    switch ( x ){
        case 0:
        process.stdout.write("You entered a zero\n")
        break;  
    default: 
        process.stdout.write("You entered something else than a zero\n")
    }
    process.exit();
})