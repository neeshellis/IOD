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
//     let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName} `;
//     console.log(greeting + this.getCatchPhrase(person));
//   },
//   getCatchPhrase(person) {
//     if (person.numFingers == 6) {
//       return "You killed my father. Prepare to die.";
//     }
//     return "Nice to meet you.";
//   }
// };

// inigo.greeting(westley)
// inigo.greeting(rugen)

// const getCatchPhrase = (person) => console.log(person.numFingers == 6 ? "You killed my father. Prepare to die." : "Nice to meet you.");

// 7

// const basketballGame = { 
//   score: 0, 
//   freeThrow() { 
//     this.score++; 
//     return this;
//   }, 
//   basket() { 
//    this.score += 2; 
//    return this;
//   }, 
//   threePointer() { 
//     console.log('This score is '+this.score);
//     this.score += 3; 
    
//     return this;
//   }, 
//   halfTime() { 
//     console.log('Halftime score is '+this.score); 
//     return this;
//   } 
// } 


// basketballGame.freeThrow().basket().threePointer().halfTime();

// //modify each of the above object methods to enable function chaining as below: basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
// //8

// const sydney = { 
//   name: 'Sydney', 
//   population: 5_121_000, 
//   state: 'NSW', 
//   founded: '26 January 1788', 
//   timezone: 'Australia/Sydney' 
// }

// for (let key in sydney) {
//   console.log('key: ' + key);
//   console.log('value: ' + sydney[key]);
// }

// const london = { 
//   name: 'London', 
//   population: 70_121_000, 
//   state: 'London City', 
//   founded: '1000 BC', 
//   timezone: 'London/GMT' 
// }

// for (let key in london) {
//   console.log('key: ' + key);
//   console.log('value: ' + london[key]);
// }


//9
// let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
// let dog1 = 'Bingo';
// const cat1 = { name: 'Fluffy', breed: 'Siberian' };


// // let moreSports2 = [teamSports] 
 

// let moreSports2 = [...teamSports];
//  moreSports2.push( "Lacrosse" , "Football");
//  moreSports2.unshift( "Rugby");


// let dog2 = dog1;
// dog2 = "Billie";

// let cat2 = {...cat1}; 
// cat2.name = "Jerry"


// console.log(teamSports,dog1,cat1) //teamSports is now equal to moreSports2, cat1 is now Jerry, 
// console.log(cat2.name)
// console.log(moreSports2)


function Person(name, age) { 
    this.name = name; 
    this.age = age; 
    this.human = true; 
    this.canDrive = () => console.log(this.age >= 18 ? 'Can drive': "Can't drive");
    }

let person1 = new Person('John', '50');
person1.canDrive() 

let person2 = new Person('Jane', '17');
person2.canDrive()



class PersonClass {
 constructor(name, age) {
   this.name = name;
   this.age = age;
 }
canDrive() {
   return this.age >= 18 ? 'Can drive': "Can't drive"

}
}
let person3 = new PersonClass('Jimmy', '90')

console.log(person3.canDrive())




