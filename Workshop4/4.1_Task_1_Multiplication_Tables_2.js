/**Print out multiplication tables for numbers 1-10 using a loop. Use nested for
loops. */
for (let i=1;i<10;i++){
    
    process.stdout.write("Multiplication table for "+i+"\n");
    process.stdout.write("*".repeat(26)+"\n");
    for (let y = 1;y <= 10; y++){
        let table =(`${i.toString()}*${y}=${(i*y).toString()}`);
        process.stdout.write("*"+table.padStart(15)+"*".padStart(10)+"\n");
        
    }
    process.stdout.write("*".repeat(26)+"\n");
    
}   process.exit()