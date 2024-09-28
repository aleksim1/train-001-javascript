/**Create a 5x5 Battleship game using a multidimensional array. Use asterisks to mark the ships. Ask the user
for coordinates to shoot and give feedback to the user whether they hit a ship or not. Keep asking for as
long as there are ships left. Keep count of how many shots the player needed. */
const { stringify } = require("querystring");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const ShipsArray = [
    [0,0,1,0,1],
    [0,0,1,0,0],
    [1,0,0,1,0],
    [0,1,0,0,1],
    [1,0,0,0,1],
];
let shots = 0
function FindIfShipsLeft(){
    let result = 0
    for (let i = 0; i < ShipsArray.length; i++){
        for (let j = 0; j < ShipsArray[i].length; j++){
            result += Number(ShipsArray[i][j])
            }
        }
        if (result!=0){
            askForCoordinates()
        } else {
            console.log(`No ships left you win!\n you needed ${shots} shots`)
            process.exit()
        }
    }

function askForCoordinates(){
    rl.question("Enter x and y coordinates x being the first one: ",(answer) => {
        let userArray = Array.from(answer.toString().replace(/\s+/g, ''))
        shots++
        let x = userArray[0]
        let y = userArray[1]
       if (ShipsArray[x][y]===1){
            ShipsArray[x][y]=0
            console.log("You Hit a ship!")
            FindIfShipsLeft();
        } else{
            console.log("You missed!")
            FindIfShipsLeft()
        }
        
    })
}

askForCoordinates()