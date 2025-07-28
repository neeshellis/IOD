let goal = 5;
for (let i = 0; i < goal; i++) {
console.log(`Iteration ${i} of ${goal}`)
}


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

const arr1 = [1,2,3] 

for (let element of arr1) { // iterates over each property in the phone object, stores in ‘key’ variable
console.log('element: ' + element); // prints each object property name (key) in turn 

}


