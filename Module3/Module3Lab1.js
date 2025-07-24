//1
// console.log("" + 1 + 0)  //10
// console.log("" - 1 + 0)  //-1, a negative makes the string zero
// console.log(true + false) //true
// console.log(!true)   //false
// console.log(6 / "3")  //2, a string in multiplication becomes the number
// console.log("2" * "3")//6
// console.log(4 + 5 + "px") //9px
// console.log("$" + 4 + 5) //$45
// console.log("4" - 2) //2
// console.log("4px" - 2) //NaN
// console.log(" -9 " + 5)//-9 5
// console.log(" -9 " - 5) //-14
// console.log(null + 1) //1
// console.log(undefined + 1) //NaN
// console.log(undefined == null) // true
// console.log(undefined === null) //false
// console.log(" \t \n" - 2)  // - 2

//2
// let three = "3"
// let four = "4"
// // let thirty = "30"

// // //what is the value of the following expressions?
// // let addition = three + four //34 - incorrect
// console.log(Number(three) + Number(four)) - correct result of 7

// let multiplication = three * four //12
// console.log(three * four)

// let division = three / four // .75
// console.log(three / four)

// let subtraction = three - four //-1
// console.log(three - four)

// let lessThan1 = three < four //true
// console.log(three < four)

// let lessThan2 = thirty < four //false - incorrect
// console.log( Number(three < four))

// //3
// // if (0) console.log('#1 zero is true') // no print - false
// if ("0") console.log('#2 zero is true') // will print - true
// //if (null) console.log('null is true') // no print - false
// if (-1) console.log('negative is true') // will print - true
// if (1) console.log('positive is true') // will print - true

//4
// let a = 12, b = 3;
// let result = `${a} + ${b} is `;

// console.log( a + b < 10 ? 'answer is true' : 'answer is false' ) // zero is false

// //+- adds a value to the variable result and updates

//5
// function getGreeting(name) {
// return 'Hello ' + name + '!';
// }

//a function expression syntax

// const getGreeting = function(name) {
//     console.log('Hello' + name + '!')
// }

// getGreeting("Neesh")

//arrow function syntax

// const getGreeting = (name) => console.log('Hello' + name + '!')

// getGreeting("Neesh")

//6
// const westley = {
// name: 'Westley',
// numFingers: 5
// }
// const rugen = {
// name: 'Count Rugen',
// numFingers: 6
// }
// const inigo = {
// firstName: 'Inigo',
// lastName: 'Montoya',
// greeting(person) {
//   let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName} `;
//   console.log(greeting + this.getCatchPhrase(person));
// },
// getCatchPhrase(person) {
//   return 'Nice to meet you.';
// }
// }
// inigo.greeting(westley)
// inigo.greeting(rugen)

// const westley = {
//   name: "Westley",
//   numFingers: 5,
// };

// const rugen = {
//   name: "Count Rugen",
//   numFingers: 6,
// };

// const inigo = {
//   firstName: "Inigo",
//   lastName: "Montoya",
//   greeting(person) {
//   let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName} `;
//   console.log(greeting + this.getCatchPhrase(person));
// }, 
// // getCatchPhrase(person) {
// //     if (person.numFingers == 6) {
// //     return "You killed my father. Prepare to die.";
// //   }
// //     return "Nice to meet you.";
// // }
// }
// const getCatchPhrase = (person.numFingers != 6) => console.log("Nice to meet you.")
// const getCatchPhrase = (person.numFingers == 6) => console.log("You killed my father. Prepare to die.")

// // 
// // console.log( 0 ? 'zero is true' : 'zero is false' ) // zero is false

// inigo.greeting(westley)
// inigo.greeting(rugen)