/**Create a program that calculates the circumference of a circle when radius is given (circumference = 2 * π *
radius). Call this method three times with different parameters and print out the results. */
function circumference(radius){
    result = radius * 2 * Math.PI
    process.stdout.write(`Circumference of a circle with a ${radius} is ${result}\n`)
}
circumference(5)
circumference(15)
circumference(50)
