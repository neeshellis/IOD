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


// let twentyCents = 0.20 
// let tenCents = 0.10

// let fixedTwenty = twentyCents.toFixed(2); 
// let fixedTen = tenCents.toFixed(2); 
// console.log(fixedTen)

// // console.log(fixedTwenty + fixedTen) //why is this not working?

// //because the fixed function is making the two decimals behave as strings

// function currencyAddition(float1, float2) {
//   let newNum1 = float1 * 100;
//   let newNum2 = float2 * 100;
// // return (newNum1 + newNum2)/100
// }
// console.log(currencyAddition(fixedTen, fixedTwenty))


// function currencyOperation (float1, float2, operation)  {

//     let newNum1 = float1 * 100;
//     let newNum2 = float2 * 100;
//     let result = 0
 
//     // numDecimals { }
    

// // switch (operation) {
//     case "+":
//      result = newNum1 + newNum2
//         break;
//     case "-":
//         result = newNum1 - newNum2
//         break;
//     case "/":
//         result = newNum1 / newNum2
//         break;
//     case "*":
//         result = newNum1 * newNum2
//     case "decimals":
//         break;
//     default:
//         console.log("no match");
// }
// return result/100
// } 
// console.log(currencyOperation(0.1, 0.2, "+"))
// console.log(currencyOperation(0.1, 0.2, "-"))
// console.log(currencyOperation(0.1, 0.2, "/"))

// // console.log('the answer to the math is ${expr}.');
// console.log(0.3 == currencyOperation(0.1, 0.2, '+'))

// function currencyOperation2 (float1, float2, operation, numDecimals)  {

//     let factor = 10**numDecimals;
//     let newNum1 = float1 * factor;
//     let newNum2 = float2 * factor;
//     let result = 0

// switch (operation) {
//     case "+":
//      result = newNum1 + newNum2
//         break;
//     case "-":
//         result = newNum1 - newNum2
//         break;
//     case "/":
//         result = newNum1 / newNum2
//         break;
//     case "*":
//         result = newNum1 * newNum2
//     case "decimals":
//         break;
//     default:
//         console.log("no match");
// }
// return Math.round(result)/factor
// } 

// console.log(currencyOperation2(0.1005, 0.2, "+", 3))
// console.log(currencyOperation2(0.123456, 0.2, "-", 4))
// console.log(currencyOperation2(0.1, 0.2, "/", 5))

// 6

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
const testArray = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow', 55, 84, 97, 63, 55, 32, 84, 91, 55, 43]


const duplicateArrays = colours.filter((colour, index) => colours.indexOf(colour) === index);
console.log(duplicateArrays)

function unique(duplicateArray) {
    return duplicateArray.filter((colour, index) => duplicateArray.indexOf(colour) === index);
}

console.log(unique(colours))
console.log(unique(testScores))
console.log(unique(testArray))
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
// const duplicateScores = testScores.filter((testScore, index) => testScores.valueOf(testScore) === index);

console.log(testScores)

const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

// 7
// a
// const books = [ { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }, 
//     { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }, 
//     { id: 3, title: '1984', author: 'George Orwell', year: 1949 }, 
//     { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }, 
//     { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }, ];


   
// function getBookTitle(bookId) {
//     return bookId.id === 1;
// }

// console.log(books.find(getBookTitle));

// // b

// function getOldBooks(books,year)  {
//    return books.filter(function(book) {
//     return book.year < year; });
//    }
//    const oldBooks = getOldBooks(books,1950);
// console.log(oldBooks)
    
// c

// function addGenre(books, newElement, newValue)  {

//     const newArray = books.map(function(book) {
//         return {
//             ...book,
//             [newElement]: newValue
//         };
//     });
//     return newArray;
// }

// const newBookList = addGenre(books, "genre", "classic");


// 8
// const phoneBookABC = new Map();   //an empty map to begin with
// phoneBookABC.set('Annabelle', '0412312343');
// phoneBookABC.set('Barry', '0433221117');
// phoneBookABC.set('Caroline', '0455221182');

// console.log(phoneBookABC)
// // a
// const phoneBookDEF = new Map()

// // b
 
// phoneBookDEF.set('David', '043125589') 
// phoneBookDEF.set('Elizabeth', '043218888') 
// phoneBookDEF.set('Fred', '041112222')

// console.log(phoneBookDEF)

// // c

// phoneBookABC.set('Caroline', '044444444');
//  console.log(phoneBookABC, phoneBookDEF)

// // d


// function printPhoneBook(contacts) {
  
//     contacts.forEach(function(number, name)  {
//       console.log(name + ':' + number); })
//      }

// printPhoneBook(phoneBookABC)


// //   e

 
// const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
// console.log(phoneBook)

// //  f

// function printPhoneBook(updates) {
  
//     updates.forEach(function(phoneNumber, name)  {
//       console.log(name + ':' + phoneNumber); })
//      }

// printPhoneBook(phoneBook)


// 9

let salaries = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
};

// a

function sumSalaries(salaries)  {

  let totalSum = 0

  for (const key in salaries) {
  
    totalSum = totalSum + salaries[key]
        // console.log(`${key}: ${salaries[key]}`);
    }

return totalSum;
}

console.log(sumSalaries(salaries))

// b

function topEarner(salaries)  {

let highestSalary = 0

let highestPerson = ""

for (const key in salaries) {
  if (salaries[key] > highestSalary) {
    highestSalary = salaries[key];
   
    highestEarner = key;
}
}
return highestEarner
}

console.log (topEarner(salaries))




// 10

// const today = new Date();
// console.log('Current time is ' + today.toLocaleTimeString())
// console.log(today.getHours() + ' hours have passed so far today')