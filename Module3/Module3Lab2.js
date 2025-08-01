// 1

// const sentence = 'los angeles';

// function startCapital(str) {
// let splitArray = str.split(' ') // splits strings where there is a space
// console.log(splitArray)

// let sliceArray = splitArray.map(answer => answer.slice(1,answer.length))
// let getUppercharacters = splitArray.map(answer => answer.charAt(0).toUpperCase() + answer.slice(1,answer.length))
// return getUppercharacters

// }

// console.log(startCapital(sentence))

// 2
// created a variable called statement which is equal to 'This text will be truncated if it is too long';

// const statement = 'This text will be truncated if it is too long';

// function truncate(str, max) {
//     if (str.length > max) {
//         return str.slice(0, max - 1) + "...";
//     }
// return str;

// }

// console.log(truncate('This text will be truncated if it is too long', 25))

// function truncate(str, max) {
//     if (str.length = max) {
//         return str.slice(0, max - 1) + "...";
//     }

// return str;

// }
// console.log(truncate('Merry Christmas', 15))

//3 a-c)
// const animals = ['Tiger', 'Giraffe'];
// animals.push('Lion', 'Leopard');
// animals.unshift('Cheetah')
// animals.sort()

// d)

// const newValue = animals.splice(2, 1, "Snake");
// console.log(animals)
// function replaceMiddleAnimal(newValue)  {

//  newValue = animals.splice(2, 1, "Snake");
// console.log(animals)
// }

// //  e)
// function findMatchingAnimals(beginsWith)  {

//     return animals.filter(animal => animal[0]== beginsWith.toUpperCase())

// }
// console.log(findMatchingAnimals("l"))

// 4
// function camelCase(cssProp) {
//     // console.log(cssProp)
//     let words = cssProp.split('-'); // splitting string into array
//     // console.log(words)
//     let camelString = '' // has a length of 0
//     words.forEach(
//         word => {//first word is margin, second is left
//             if (camelString.length == 0 ) {//camelstring length is 0 so true
//                 camelString = word
//             }
//             else {//camelstring is now margin, length not 0
//                 camelString += word.charAt(0).toUpperCase() //concat margin
//                 + word.substring(1) //with capital l and concat word - lowercase l
//             }
//         }
//     )
//     return camelString //return camelcased word
// }
//  console.log(camelCase('margin-left'))
// console.log(camelCase('background-image'))
// console.log(camelCase('margin-top'))


//  for loop 
// function camelCase(cssProp) {
//     let csswords = cssProp.split('-');   
//     let camelString = '';

//     for (let i = 0; i < csswords.length; i++) {
//         if (i === 0) {
//             camelString += csswords[i];
//         } else {
//             camelString += csswords[i][0].toUpperCase() + csswords[i].slice(1);
//         }
//     }

//     return camelString;
// }

// console.log(camelCase('margin-left'))
// console.log(camelCase('background-image'))
// console.log(camelCase('margin-top'))

//  for/of loop 

// function camelCase(cssProp) {
 
//   let words = cssProp.split('-');   
 
//   let camelString = '';

//   let isFirst = true;

//   for (let word of words) {
//     if (isFirst) {
//       camelString += word;
//       isFirst = false;
//     } else {
//       camelString += word[0].toUpperCase() + word.slice(1);
//     }
//   }

//   return camelString;
// }
// console.log(camelCase("margin-left"));
// console.log(camelCase("background-image"));
// console.log(camelCase("margin-top"));




5. 
// let twentyCents = 0.20 
// let tenCents = 0.10 
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`) // 0.2 + 0.1 = 0.30000000000000004


let twentyCents = 0.20 
let tenCents = 0.10 

let fixedTwenty = twentyCents.toFixed(2); 
let fixedTen = tenCents.toFixed(2); 
console.log(fixedTen)

// // console.log(fixedTwenty + fixedTen) //why is this not working?

// //because the fixed function is making the two decimals behave as strings

// function currencyAddition(float1, float2) {
//   let newNum1 = float1 * 100;
//   let newNum2 = float2 * 100;
// // return (newNum1 + newNum2)/100
// }
// console.log(currencyAddition(fixedTen, fixedTwenty))


function currencyOperation (float1, float2, operation)  {

    let newNum1 = float1 * 100;
    let newNum2 = float2 * 100;
    let result = 0
switch (operation) {
    case "+":
     result = newNum1 + newNum2
        break;
    case "-":
        result = newNum1 - newNum2
        break;
    case "/":
        result = newNum1 / newNum2
        break;
    // case "multiplication"
    // break;
    default:
        console.log("no match");
}
return result/100
} 
console.log(currencyOperation(0.1, 0.2, "+"))
console.log(currencyOperation(0.1, 0.2, "-"))
console.log(currencyOperation(0.1, 0.2, "/"))

// console.log('the answer to the math is ${expr}.');
// console.log(0.3 == currencyOperation(0.1, 0.2, '+'))