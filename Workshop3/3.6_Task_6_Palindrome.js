/**Ask the user to give a string and then check if it’s a palindrome
(a word, phrase, or sequence that reads the same backwards
as forwards, e.g. madam or nurses run) or not. Use loops to
solve this.
Note: What happens if madam was spelt with a capital letter? */

process.stdout.write("Please enter a string to check if it's a palindrome: ")
process.stdin.on("data",function(inputFromUser){
    let input = inputFromUser.toString().trim().toUpperCase().replace(/\s+/g, '')
    for (i=0; i < (input.length/2); i++){
        if (input[i]!=input[input.length-1-i]){
            process.stdout.write(inputFromUser()+" Is not a palindrome\n");
            process.exit()
        }

   }
   process.stdout.write(inputFromUser.toString()+" Is a palindrome\n")
   process.exit()
})
/* let inputback = input.split('').reverse().join('')
    if (input == inputback){
        process.stdout.write(input.toLocaleLowerCase()+" is a palindrome\n")
    } else {
        process.stdout.write(input.toLocaleLowerCase()+" isn't a palindrome\n")
    }*/
