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
const animals = ['Tiger', 'Giraffe'];
animals.push('Lion', 'Leopard');
animals.unshift('Cheetah')
animals.sort()


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

const css = ['margin-left', 'margin-right', 'font-color', 'font-background']

function camelCase(cssPro) {

//    Map 
//    Split using -
//    capitalise first letter after split
//    remove the lower case character and - (try replace function)
//    turn it back into a string - join

// in each Array identify the first letter in each after the '-'
let firstletterSecondword = 

// capitalise this letter proceeding '-'
function makeCapital(firstletterSecondword)

//remove the '-'
function 
css.forEach(css) = forEach.css.splice( '-', )

console.log(camelCase('margin-left')) 
}

// marginLeft console.log(camelCase('background-image')) 
// // backgroundImage console.log(camelCase('display')) // display