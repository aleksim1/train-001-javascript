/**Print out multiplication tables for numbers 1-10 using a loop. Use nested for
loops. */
for (let i=1;i<10;i++){
    process.stdout.write("***************************\n")
    process.stdout.write("Multiplication table for "+i+"\n")
    for (let y = 1;y <= 10; y++){
        process.stdout.write(`*${i.toString().padStart(11)}*${y}=${(i*y).toString().padEnd(11)}*\n`)
    }
}   