// let goal = 5;
// for (let i = 0; i < goal; i++) {
// console.log(`Iteration ${i} of ${goal}`)
// }


// For In Loop - note "in" going through the object phone
// const phone = {
// model: 'iPhone 11',
// colour: 'black',
// storage: 64
// }

// for (let key in phone) { // iterates over each property in the phone object, stores in ‘key’ variable
// console.log('key: ' + key); // prints each object property name (key) in turn 
// console.log('value: ' + phone[key]); // prints each object value in turn [] means it tries to find the key you want, then gives the value of the key
// }

// console.log(phone ['model'])

// // For of Loop - sway "in" for "of" 
// const phone = {
// model: 'iPhone 11',
// colour: 'black',
// storage: 64
// }

// const arr1 = [1,2,3] 

// for (let element of arr1) { // iterates over each property in the phone object, stores in ‘key’ variable
// console.log('element: ' + element); // prints each object property name (key) in turn 

// }

// console.log("Hello")
// console.log(typeof console.log)
// console.log(typeof "hello")
// console.log(typeof 100)

// console.log(typeof "hello")

// let location; // no assigned value, therefore undefined
// let age = null; // explicitly assigned null value
// console.log(`${location} == ${age} ? ${location == age}`) // true (uses == to check value equivalence)
// console.log(`${location} === ${age} ? ${location === age}`) // false (uses === to check type equality)
// console.log(typeof let)

// const tv = { // object starts here
// brand: "Sony Bravia", // key-value pair. brand is the key, "Sony Bravia" is the value
// size: "55-inch", // values can be any data type
// model: 2023, // multiple key-value pairs are separated by commas
// resolution: "4K" // the comma on the last key-value pair can be omitted
// } // object ends here. All data is stored in tv variable.

// console.log(typeof true)


// console.log("2" > 1) // true - converts to 2 > 1
// console.log("2" != 1) // true - converts to 2 is not equal to 1
// console.log("02" == 2) // true - converts to 2 == 2
// console.log(true == 1) // true - true converts to 1
// console.log(false == 0) // true - false converts to 0
// console.log(null == undefined) // true - both convert to 0

// function helloFriend(age) // we can include parameters inside the () as function variables
// { // function body is enclosed with curly brackets (braces)
// console.log('Neesh Ellis ' + age); // can be one or multiple statements inside the function
// }

// helloFriend(56)

// function checkAge(age) {
// if (age >= 18) {
// return 'adult'; // if the condition is true, return this string and exit
// }
// return 'non-adult'; // if the condition was false, return this string and exit
// }

// console.log( checkAge(21) ) // adult
// console.log( checkAge(13) ) // non-adult

// const sayHi = function() { // function expression syntax for creating a function
// console.log('Hi')
// }

// sayHi()

 
// sayHiDeclaration(); // works - can be hoisted

// const sayHiExpression = function() {
// console.log('Hi');
// }

// function sayHiDeclaration() {
// console.log('Hi');
// }

// sayHiExpression(); // error - cannot access before initialization

// const sayHiArrow = () => console.log('Hi') // arrow function syntax, more concise

// sayHiArrow()

// const subtract1 = (a, b) => a - b; // most concise version of the below

// const subtract2 = (a, b) => { return a - b };

// // console.log(2, 1)// does the same thing as above
// // // subtract2(10, 5)

// console.log(subtract1(2, 1))


// const sayHiExpression = function() {
// console.log('Hi');
// console.log(arguments);
// }

// function sayHiDeclaration() {
// console.log('Hi');
// console.log(arguments);
// }

// const sayHiArrow = () => {
// console.log('Hi');
// console.log(arguments);


// // sayHiDeclaration() // [Arguments] {}
// // sayHiExpression() // [Arguments] {}
// sayHiArrow() // ReferenceError: arguments is not defined

// 

// const object = {
// 2: 'value of string property',
// '2': 'value of numeric property'
// }

// console.log(object) // { '2': 'value of string property' } since 2 and ‘2’ are same

// const phone = {
// model: 'iPhone 11',
// colour: 'black',
// storage: '4GB',
// }

// if (phone.colour) console.log(`My ${phone.model} is ${phone.colour}`) // prints message
// if (phone.storage) { // undefined counts as false, so the below won't print
// console.log(`My ${phone.model} has ${phone.storage}GB`);
// }

// 
// function greet(name) {  // 'name' is a parameter
//   console.log(`Hello, ${name}`);
// }

// greet('Al')

// 
// const phone = {
// model: 'iPhone 11',
// colour: 'black',
// storage: 64
// }

// for (let key in phone) { // iterates over each property in the phone object, stores in ‘key’ variable
// // console.log('key: ' + key); // prints each object property name (key) in turn
// console.log('value: ' + phone[key]); // prints each object value in turn
// }
// const box1 = {
// weight: '20kg',
// dimensions: { // nested object property
// width: '30cm',
// height: '10cm'
// }
// }
// const box2 = {...box1}; // shallow clone
// box1.dimensions.height = '12cm'; // change box1 nested object property
// console.log(box2); // box2 references box1 dimensions and picks up height change

// let car =  {
//     make: "Volvo",
//     color: function(){
//         console.log('black')
//     }
//     }
// car.color()

// const user = {
// name: 'Bilbo Baggins',
// printThis() {
// console.log(this); // 'this' is the current object
// return this; // if we return it, we can 'chain' object methods together
// },
// printGreeting() {
// console.log(`Hello, I'm ${this.name}`); // 'this' is the current object
// }
// }
// user.printThis().printGreeting();// methods chained together, works because printThis returns this

// function User(first, last) { // constructor function
// this.first = first;
// this.last = last;
// this.hasShortName = () => this.first.length <= 3;
// }

// // we can create multiple users with different names
// let user1 = new User('Tim', 'Smith'); // need to use 'new'
// let user2 = new User('Jane', 'Lloyd');
// // console.log(user1); // User { first: 'Tim', last: 'Smith' }
// console.log(user2, user1);
// // console.log(user1.hasShortName()); // true

//FIRST EXAMPLE USING A CLASSES INSTEAD OF THE TRADITIONAL CONSTRUCTOR FUNCTION
class User {
constructor(first, last) {
this.first = first;
this.last = last;
}

hasShortName() {
return this.first.length >= 3
}
}

let user1 = new User('Tina', 'Smith') // need to use 'new'
console.log(user1) // User { first: 'Tina', last: 'Smith' }
console.log(user1.hasShortName()) // false

// end of JS FUNDAMENTALS