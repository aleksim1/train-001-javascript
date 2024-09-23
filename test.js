/*const fruits = ['banana','apple','kiwi','orange']
console.log('first item in the array is '+ fruits[0])
for(let i = fruits.length - 1; i >= 0;i--){
    console.log(fruits[i])
}
fruits.unshift('grapefruit')
console.log(fruits[0])
fruits.push('watermelon')
console.log(fruits.join(' '))
fruits.sort();
console.log(fruits)
fruits.reverse()
fruits.forEach((array)=> {
    console.log(array);
})*/
let phonebook = [
    ["John doe","123456"],
    ["John deer","512236"],
    ["Mike ross","964456"],
    ["Harvey Specter","163456"],
    ["Matti virtanen","654456"],
    ["Mika Häkkinen","525323"],
];
for (let i = 0; i < phonebook.length; i++) {
    process.stdout.write(`${i+1}`)
    for (let j = 0; j < phonebook[i].length; j++){
    process.stdout.write(`\t${phonebook[i][j]}`)
} process.stdout.write("\n")
}
