/**Create a program with the following arrays:
1. an integer array with five items: 5, 7, 32, 31 and 8.
2. a double array with three items: 12.4, -13.55 and 67.44,
3. a string array with four items: “Helsinki”, “Lissabon”,
“New York” and “Shanghai”.
Then print out the following:
- “The value in the index number 3 is: “ and the value from the string array.
- “The fourth item in the int array is: “ and the value from the int array.
- “In the double array there are xx items” where xx is the size of the array.
- The whole content of the integer array with a loop.
- The whole content of the double array from the last item to the first.
- Lastly, in a loop go through the string array and set all the values to be “empty” and print it out as a
comma separated string. */
let x = [5, 7, 32, 31, 8];
let y = [12.4, -13.55, 67.44];
let z = ["Helsinki", "Lissabon", "New York", "Shanghai"]
console.log("The value in the index number 3 is: "+z[3])
console.log("The fourth item in the int array is: "+x[3])
console.log("In the double array there are "+y.length+" items")
console.log("Integger array contents:")
for (i=0; i<x.length;i++){
    process.stdout.write(`${x[i]}\n`)
}
console.log("Double array contents last to first")
for (let j=(y.length)-1; j>=0;j--){
    process.stdout.write(`${y[j]}\n`)
}
for(i = 0; i<z.length;i++){
    z[i]="empty"
}
console.log("New string array: "+z)