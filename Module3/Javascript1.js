// console.log('hello'); console.log('world');
// console.log('hello'); console.log('world'); //this is a comment

// const integer = 123 // integer - whole number
// const float = 12.345 // floating point - decimal number

// console.log(1/0) // division by zero = Infinity
// console.log(-1/0) // negative division by zero = -Infinity
// console.log("not a number" / 1) // invalid mathematical operation = NaN


// Data Types

// let one = 1;
// let two = 2;
// let three = 3;


// console.log(one + two - three * two / one); // -3

// to increment by one (all the same):
// one = one + 1; // new value of one is previous value + 1
// one += 1; // shorthand - add 1 to previous (also *=)
// one++; // increment previous value (by 1)

// // to decrement by one (all the same):
// two = two - 1; // new value of two is previous value - 1
// two -= 1; // shorthand - minus 1 from previous (also /=)
// two--; // decrement previous value (by 1)

// const backTicks = `String that can include variables - ${singleQuotes}` use is you are calling a script in yur string

// console.log backTicks

// let isChecked = false;
// let isToggleOn = true;

// isChecked = !isChecked;
// console.log(isChecked); // true


// let location; // no value is assigned with the = operator
// console.log(location); // undefined

// let location ; // no value is assigned with the = operator
// console.log(location); // undefined

// let location; // no assigned value, therefore undefined
// let age = null; // explicitly assigned null value

// console.log(`${location} == ${age} ? ${location == age}`) // true (uses == to check value equivalence)
// console.log(`${location} === ${age} ? ${location === age}`) // false (uses === to check type equality)

// const tv = { // object starts here
// brand: "Sony Bravia", // key-value pair. brand is the key, "Sony Bravia" is the value
// size: "55-inch", // values can be any data type
// model: 2023, // multiple key-value pairs are separated by commas
// resolution: "4K" // the comma on the last key-value pair can be omitted
// } // object ends here. All data is stored in tv variable.

// console.log(tv);

// console.log(tv.model)

// console.log(typeof undefined); // undefined
// console.log(typeof 0); // number
// console.log(typeof 10n); // bigint
// console.log(typeof true); // boolean
// console.log(typeof 'text'); // string
// console.log(typeof Symbol('id')) // symbol
// console.log(typeof Math); // object
// console.log(typeof null); // object
// console.log(typeof console.log); // function

// console.log( String(false) ) // false - string form of boolean

// console.log( "1" + 2 + 3 ) // 123 - string ‘1’ is concatenated with number 2 then number 3

// console.log( 1 + 2 + "3" ) // 33 - number 1 is added to number 2 then concatenated with string ‘3’

// console.log( Number(" 4 ") ) // 4 - trims spaces
// console.log( Number(null) ) // 0 - intentionally empty value converts to 0
// console.log( Number(undefined) ) // NaN - non-existent value is unknown
// console.log( Number(false) ) // 0 - false converts to 0
// console.log( Number(true) ) // 1 - true converts to 1
// console.log( Number("") ) // 0 - empty string converts to 0
// console.log( Number("not a number") ) // NaN - non-empty strings beginning with chars

// console.log("6" / "2") // 3
// console.log("6" * "2") // 12
// console.log("6" - "2") // 4
// console.log(+"6") // 6

// console.log( Boolean("") ) // false - empty string
// console.log( Boolean(0) ) // false - zero value
// console.log( Boolean(null) ) // false - no value
// console.log( Boolean(undefined) ) // false - unknown value
// console.log( Boolean(NaN) ) // false - not a number
// console.log( Boolean("false") ) // true - non-empty string
// console.log( Boolean(-1) ) // true - non-zero number

// if (1==1) console.log('empty string is true') // implicit "" conversion to false - won't print msg
// if (undefined) console.log('undefined is true') // implicit conversion to false - won't print msg

// console.log( NaN ? 'NaN is true' : 'NaN is false' ) // NaN is false
// console.log( 0 ? 'zero is true' : 'zero is false' ) // zero is false
// console.log( "hello" ? 'hello is true' : 'hello is false' ) // hello is true

// console.log( !undefined ) // true - convert value to boolean then negate it (opposite)
// console.log( !!"" ) // false - convert value to boolean then negate/toggle twice

// console.log('apple' < 'banana'); // true - because a is less than b (rule 2)
// console.log('eat' < 'eaten'); // true - because all characters are the same but eaten is longer (rule 5)
// console.log('chose' < 'crisp'); // true - because all characters are the same but eaten is longer (rule 5)

// console.log("2" > 1) // true - converts to 2 > 1
// console.log("2" != 1) // true - converts to 2 is not equal to 1
// console.log("02" == 2) // true - converts to 2 == 2
// console.log(true == 1) // true - true converts to 1
// console.log(false == 0) // true - false converts to 0
// console.log(null == undefined) // true - both convert to 0

// function helloWorld() // we can include parameters inside the () as function variables
// { // function body is enclosed with curly brackets (braces)
// console.log('hello world'); // can be one or multiple statements inside the function
// }

// helloWorld(); // once the function is defined, we need to call it to make it run/execute

// // function checkAge returns a value when called


// function checkAge(age) {
// if (age >= 22) {
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

// // sayHiExpression(); // error - cannot access before initialization
// sayHiDeclaration(); // works - can be hoisted

// // const sayHi = function() {
// // console.log('Hi');
// // }

// function sayHiDeclaration() {
// console.log('Hi');
// }

// const sayHiArrow = () => console.log('Hi') // arrow function syntax, more concise

// const subtract1 = (a, b) => a - b; // most concise version of the below


// const subtract2 = (a, b) => { return a - b }; // does the same thing as above

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
// }

// sayHiDeclaration() // [Arguments] {}
// sayHiExpression() // [Arguments] {}
// sayHiArrow() // ReferenceError: arguments is not defined

// const user = { // user object contained within curly braces
// name: 'joe', // string property with key 'name' and value 'joe'
// age: 20, // numeric property with key 'age' and value 20
// 'has a dog': true // multi-word property key 'has a dog' with boolean value true

// }

// console.log(user.name); // get object property called name and log it
// let dogOwner = user['has a dog']; // get value of property 'has a dog' and assign to new variable
// console.log(dogowner)
// user.age = 21; // set (or assign) new value to object property called age
// console.log(user)
// user.location = 'NSW'; // create new object property called location and set (assign) a value
// console.log(user)
// delete user.location; // delete property of user object called location
// console.log(user)

// const object = {
// 2: 'value of numeric property',
// '2': 'value of string property'
// }

// console.log(object) // { '2': 'value of string property' } since 2 and ‘2’ are same

// const phone = {
// model: 'iPhone 11',
// colour: 'black',
// storage: '1kg'
// }

// if (phone.colour) console.log(`My ${phone.model} is ${phone.colour}`) // prints message
// if (phone.storage) { // undefined counts as false, so the below won't print
// console.log(`My ${phone.model} has ${phone.storage}GB`);
    
// }

// let goal = 5;
// for (let i = 0; i < goal; i++) {
// console.log(`Iteration ${i} of ${goal}`)

// }

// const phone = {
// model: 'iPhone 11',
// colour: 'black',
// storage: 64
// }

// for (let listItem in phone) { // iterates over each property in the phone object, stores in ‘key’ variable
// console.log('key: ' + listItem); // prints each object property name (key) in turn
// console.log('value: ' + phone[listItem]); // prints each object value in turn
// }

// let person1 = { name: 'Anna' }; // object - stored by reference
// let person2 = person1; // person2 points to same memory location as person1
// person1.name = 'Brian';
// console.log(person2.name); // Brian, even though we changed person1.name
// let person3 = 'Carly'; // string - stored by value
// let person4 = person3; // person4 points to separate memory location than person3, but both store same
// value
// person3 = 'David';
// console.log(person4); // still Carly, since person3 and person4 are string primitives and store
// independent values


// const user = { name: 'Elliot', age: 27 };

// const userClone = {}; // empty object, refers to different memory location

// for (let key in user) { // iterate over user properties
// userClone[key] = user[key]; // re-create them in userClone
// }

// console.log(userClone); // { name: 'Elliot', age: 27 }

// const userClone = {...user}; // spread or unpack user properties into new object
// console.log(userClone); // { name: 'Elliot', age: 27 }

// const userClone = {...user, age: 28, location: 'New Zealand'};
// console.log(userClone); // { name: 'Elliot', age: 28, location: 'New Zealand' }

// const vehicle = { make: 'Toyota', model: 'Camry'};
// const mergedUser = {...user, ...vehicle};
// console.log(mergedUser); // { name: 'Elliot', age: 27, make: 'Toyota', model: 'Camry' }

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

// const user = {
// name: 'Bilbo Baggins',
// sing: function() { // method of user object
// console.log('Roads go ever ever on');
// },
// sing2() { // shorthand method syntax, does same as above
// console.log('Over rock and under tree');
// }
// }
// user.sing(); // Roads go ever ever on
// user.sing2(); // Over rock and under tree


// const user = {
// name: 'Bilbo Baggins',
// printGreeting() {
// console.log(`Hello, I'm ${this.name}`) // 'this' is the current object
// }
// }
// // 'user' is before the dot, provides the context where 'this' comes from
// user.printGreeting(); // Hello, I'm Bilbo Baggins


// const user = {            //user is the object
// name: 'Bilbo Baggins',
// printThis() {
// console.log(this); // 'this' is the current object
// return this; // if we return it, we can 'chain' object methods together
// },
// printGreeting() {
// console.log(`Hello, I'm ${this.name}`); // 'this' is the current object
// }
// }
// user.printThis().printGreeting(); // methods chained together, works because printThis returns this


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
// user.printThis().printGreeting(); // methods chained together, works because printThis returns this


// function User(first, last) { // constructor function
// this.first = first;
// this.last = last;
// this.hasShortName = () => this.first.length <= 3;
// }

// // we can create multiple users with different names
// let user1 = new User('Tim', 'Smith'); // need to use 'new'
// console.log(user1); // User { first: 'Tim', last: 'Smith' }
// console.log(user1.hasShortName()); // true

class User {
constructor(first, last) {
this.first = first;
this.last = last;
}

hasShortName() {
return this.first.length >= 3
}
}

let user2 = new User('Tina', 'Smith') // need to use 'new'
console.log(user2) // User { first: 'Tina', last: 'Smith' }
console.log(user2.hasShortName()) // false


