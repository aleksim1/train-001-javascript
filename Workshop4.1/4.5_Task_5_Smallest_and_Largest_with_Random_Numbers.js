const randomArray = Array(100).fill().map(() => Math.round(Math.random() * 1000));
function findLargestNumber (array){
    let largest = array[0];
for (let i = 0; i < array.length; i++){
    if (largest<array[i]){
    largest = array[i];
    } 
} process.stdout.write(`${largest} Is the largest number.\n`);
}
function findSmallestNumber (array){
    let smallest = array[0];
for (let i = 1; i < array.length; i++){
    if (smallest>array[i]){
    smallest = array[i];
    } 
} process.stdout.write(`${smallest} Is the smallest number.\n`);
}
findLargestNumber(randomArray);
findSmallestNumber(randomArray);