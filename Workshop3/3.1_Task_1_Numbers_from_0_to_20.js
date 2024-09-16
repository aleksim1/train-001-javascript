/*Create a code that prints out numbers from 0 to 20. Use
while loop.*/
process.stdout.write("Numbers from 0 to 20 are the following: \n")
let i = 0
while (i <= 20) {
process.stdout.write(i.toString()+" ")
i++
}
process.exit()