// const n = 1.23456; // primitive floating point number
// console.log(n.toFixed(2)) // 1.23 - fixed to 2 decimal places
// console.log(n.toPrecision(10)) // 1.234560000 - fills or rounds to the exact number of digits

// const hello = 'hello worlds' // primitive string
// console.log(hello.toUpperCase()) // HELLO WORLD
// console.log(hello.endsWith('worlds')) // true



// const user = {
// name: 'John',
// toString() {
// return this.name; // custom string value
// }
// }
// console.log("User: " + user); // User: John


// const apple = {
// name: 'Apple',
// category: 'Granny Smith',
// price: 1.2,
// valueOf() { // without this special function, we can’t multiply the object below
// return this.price;
// }
// }

// console.log(apple * 2) // 2.4

// const billion1 = 1000000000 // 9 zeros - hard to read
// const billion2 = 1_000_000_000 // easier to read,underscores ignored
// const billion3 = 1e9 // exponential format

// console.log(billion1 === billion2) // true
// console.log(billion2 === billion3) // true

// const microSecs1 = 0.000001 // 6 decimal places - hard to read
// const microSecs2 = 0.000_001 // easier to read, underscores ignored
// const microSecs3 = 1.e-6 // exponential format

// console.log(microSecs1 === microSecs2) // true
// console.log(microSecs2 === microSecs3) // true

// const r = 0xff;
// const g = 0xff;
// const b = 0xff;

// const white = `rgb(${r}, ${g}, ${b})`
// console.log(white) // rgb(255, 255, 255)

// const mobile = 041234567
// console.log(mobile) // 8730999 - decimal equivalent

// const binary = 0b11111111 // binary form of 255
// const octal = 0o377 // octal form of 255

// console.log(binary) // 255
// console.log(binary === octal) // true

// const ff = 255
// const ee = 238
// const dd = 221
// console.log(ff.toString(16)) // ff

// //convert from rgb colour code to hexadecimal
// console.log(`#${ff.toString(16)}${ee.toString(16)}${dd.toString(16)}`) // #ffeedd


// const toobig = 1e350 // 1 * 10350 - overflows storage

// console.log(toobig) // Infinity
// console.log(Number.MAX_VALUE) // 1.7976931348623157e+308

// const point1 = 0.1; const point2 = 0.2;
// console.log(`${point1} + ${point2} = ${point1 + point2}`) // 0.1 + 0.2 = 0.30000000000000004

// Numeric literals with absolute values equal to 2^53 or greater are too large to be representedaccurately as integers.
// console.log(9_999_999_999_999_999) // 16 digits, prints as 10000000000000000
// console.log(Number.MAX_SAFE_INTEGER) // 9_007_199_254_740_991


// console.log(isNaN(NaN)) // true
// console.log(NaN == NaN) // false

// console.log(isFinite(1/3)) // true, regular number
// console.log(isFinite("string")) // false, because converts to NaN
// console.log(isFinite(Infinity)) // false, because represents infinite number

// console.log( +"100px" ) // NaN - 100px is not a valid number

// console.log( parseInt("150px") ) // 150 - stops at 'px'
// console.log( parseFloat("2.5em") ) // 2.5 - stops at 'em'
// console.log( parseFloat("12.34.56") ) // 12.34 - stops at second invalid decimal
// console.log( parseInt("a123") ) // NaN - can't parse the 'a' so stops

// const guestList = `Guests: \n\t- John \n\t- Pete \n\t- Mary`
// console.log(guestList)

// console.log( 'Z'.codePointAt(0) ) // 90

// console.log( String.fromCodePoint(89) )


// const string = 'I could be anything you like'

// console.log(string.length) // 28 - string is 28 characters long
// console.log(string.indexOf('anything')) // 11 - starting at 0 for 'I'
// console.log(string.substring(20)) // 'you like' - substring starting at position 20
// console.log(string.toUpperCase()) // I COULD BE ANYTHING YOU LIKE
// console.log(string + ' plus more') // I could be anything you like plus more

// const sentence = 'The quick brown fox jumps over the lazy dog.';

// console.log(sentence.startsWith('The')) // true - case sensitive
// console.log(sentence.endsWith('dog')) // false - needs the full stop
// console.log(sentence.split(' ')) // splits into multiple strings using the given separator
// // ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']
// console.log(sentence.slice(4, 10)) // quick - gets the section between chars 4 and 10
// console.log(sentence.replace('fox', 'cat')) // The slow brown fox jumps over the lazy dog.
// console.log(" extra spaces ".trim()) // extra spaces - trims whitespace from start and end


// const arr1 = new Array(1,2,3); // constructor, not often used
// const arr2 = [1, 2, 3]; // array literal, much more common

// console.log(arr1); // [ 1, 2, 3 ] - both do the same
// console.log(arr2); // [ 1, 2, 3 ] - both do the same

// const fruits = ['Apple', 'Orange', 'Pear']
// const lastFruit = fruits.pop() // removes and returns the last item
// console.log(lastFruit); // Pear
// console.log(fruits); // [ 'Apple', 'Orange' ]

// fruits.push('Banana') // adds to the end of the array
// console.log(fruits); // [ 'Apple', 'Orange', 'Banana' ]


// const fruits = ['Apple', 'Orange', 'Pear']
// const firstFruit = fruits.shift() // removes and returns the first item
// console.log(firstFruit) // Apple
// console.log(fruits) // [ 'Orange', 'Pear' ]

// fruits.unshift('Kiwi') // adds to the beginning of the array
// console.log(fruits) // [ 'Banana', 'Orange', 'Pear' ]

// const fruits1 = ['Apple', 'Orange', 'Pear']
// const fruits2 = fruits1 // refers to same memory location

// fruits1.push('Banana') // add new item to the end of fruits1
// console.log(fruits2) // [ 'Apple', 'Orange', 'Pear', 'Banana' ]
// // fruits2 reflects the same change made to fruits1 since they both reference the same memory location

// console.log('fruit at index 0: ' + fruits1[0]) // Apple - accessed using numeric index 0
// console.log('fruit at index 1: ' + fruits1[1]) // Orange - accessed using numeric index 1

// const matrix = [ // 3x3 matrix
// [1, 2, 3], // row 0
// [4, 5, 6], // row 1
// [7, 8, 9] // row 2
// ]

// console.log(matrix[1][1]) // 5, the value in row 1, column 1


// const numbers = [1, 2, 3]
// const strings = ["one", "two", "three"]
// const empty = []

// console.log('Numbers: ' + numbers) // Numbers: 1,2,3
// console.log('Strings: ' + strings) // Strings: one,two,three
// console.log('Empty: ' + empty) // Empty:


// const sliceArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
// const sliced = sliceArray.slice(0, 3) // start at the beginning, get items up to index 3
// const endSliced = sliceArray.slice(-3) // start at the end, get last 3 items

// console.log(sliced) // [ 'red', 'orange', 'yellow' ]
// console.log(endSliced) // [ 'blue', 'indigo', 'violet' ]
// console.log(sliceArray) // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']


// const spliceArray = ["I", "study", "JavaScript", "right", "now"]
// const removed = spliceArray.splice(0, 3, "Let's", "dance")

// console.log(removed) // [ 'I', 'study', 'JavaScript' ] - 3 elements starting at index 0 are removed
// console.log(spliceArray) // [ "Let's", 'dance', 'right', 'now' ] - 2 new elements are inserted




// const array1 = [1,2,3]
// const array2 = [4,5,6]
// const array3 = [7,8,9]

// const combined = array1.concat(array2, array3)
// console.log(combined) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// console.log(combined.concat(10, 11)) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

// const marks = ['A+', 'C+', 'B-', 'D', 'B+', 'C+', 'B-']

// let bIndex = marks.indexOf('B-')
// let eIndex = marks.indexOf('E')

// // first index is always 0
// console.log(marks[bIndex] + ' is at index: ' + bIndex) // B- is at index: 2
// console.log(eIndex) // -1, since not found

// page 32 Index Of  & lastIndex Of

// const marks = ['A+', 'C+', 'B-', 'D', 'B+', 'C+', 'B-']

// let bIndexFirst = marks.indexOf('B-')
// let bIndexLast = marks.lastIndexOf('B-')

// console.log(marks[bIndexFirst] + ' is first at: ' + bIndexFirst) // B- is first at: 2
// console.log(marks[bIndexLast] + ' is last at: ' + bIndexLast) // B- is last at: 6

// // page 34 arr.join(separator) Join Method returns Array items, using a comma is the seperator is ommited, joins array into string

// const elements = ['Wind', 'Water', 'Fire', 'Air']

// console.log( elements.join() ) // Wind,Water,Fire,Air
// console.log( elements.join(' ') ) // Wind Water Fire Air
// console.log( elements.join('; ') ) // Wind; Water; Fire; Air

// //  page 35 FOR Each - arr.forEach(function(item, index,array) {}) This function can take 3 parameters (named as
// // needed): the array item, the array index, and the array itself. We always use the item,

// const hobbits = ['Bilbo', 'Frodo', 'Samwise', 'Merry', 'Pippin']
// hobbits.forEach((hobbit, index) => { // usually we use an arrow function here
// console.log(`#${index}: ${hobbit}`) // runs once for every item in array
// })

// // Page 35 FIND Method - Array the function is passed on each array, if true the array is returned

// const products = [
// { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
// { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
// { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' }
// ]
// // we usually use an arrow function - runs once for each array element until
// // condition is true
// let jeans = products.find(product => product.title == 'Denim Jeans') // returns
// // matching item
// let shirt = products.find(product => product.category == 'Shirts') // returns
// // matching item
// console.log(jeans) // { id: 3, title: 'Denim Jeans', price: 49.95, category:
// // 'Pants' 
// console.log(shirt) // { id: 1, title: 'Sleeveless Tee', price: 23.95, category:
// // 'Shirts' }


// // page 36 ARAYS - Map Method


// const result = arr.map(function(item, index, array) {
// // // return the new value instead of item
// });

// let titles = products.map(product => product.title)
// let h2titles = products.map(product => '<h2>'+product.title+'</h2>')
// let raisedPrices = products.map(product => ({...product, price: product.price + 5}) )
// console.log(titles) // [ 'Sleeveless Tee', "Men's Hoodie", 'Denim Jeans', 'Ladies Tee' ]
// console.log(h2titles) // [ '<h2>Sleeveless Tee</h2>', "<h2>Men's Hoodie</h2>", '<h2>Denim Jeans</h2>', '<h2>Ladies
// // Tee</h2>' ]
// console.log(raisedPrices)

// page 38 sort method for Arrays.  sorts the array in place changing its element order

// products.sort( (product1, product2) => product1.price - product2.price )
// console.log(products) // original array is modified to new low-high price sorting order: 1,4,3,2
// products.sort( (p1, p2) => p1.title > p2.title ? 1 : -1 )
// console.log(products) // original array is modified to new title sorting order: 3,4,2,1

// const numbers = [4,8,1,5,66,23,41]
// console.log( numbers.sort() ) // [ 1, 23, 4, 41, 5, 66, 8 ] : string comparisons
// console.log( numbers.sort((num1, num2) => num1 - num2) ) // [ 1, 4, 5, 8, 23, 41, 66 ]

// page 39 Comparison function sort method Arrays

// const stringNums = ["1", "81", "41", "102", "35", "1004"]
// console.log( stringNums.sort() ) // [ '1', '1004', '102', '35', '41', '81' ] : string comparisons
// console.log( stringNums.sort((a, b) => a - b) ) // [ '1', '35', '41', '81', '102', '1004' ]

// const stringNums = ["1", "81", "41", "102", "2000", "35", "1004"]
// const sortedNums = [...stringNums].sort()
// console.log(stringNums) // [ '1', '81', '41', '102', '35', '1004' ]
// console.log(sortedNums) // [ '1', '1004', '102', '35', '41', '81' ]

// //  page 40 Reverse method - ARRAYS arr.reverse();

// const elements = ['Wind', 'Water', 'Fire', 'Air']
// const reversed1 = elements.reverse() // modifies the original
// const reversed2 = [...elements].reverse() // clone first to preserve the original

// console.log(elements) // [ 'Air', 'Fire', 'Water', 'Wind' ]
// console.log(reversed2) // [ 'Wind', 'Water', 'Fire', 'Air' ] (reversed twice)

// //  page 41 reduce method arr.reduce(function(accumulator, item, index, array) {})

// const products = [
// { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts', quantity: 2 },
// { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter', quantity: 3 },
// { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants', quantity: 5 }
// ] // initial (below) should be 0 for reliability in calculating totals
// const totalPrice = products.reduce((currentTotal, currentProduct) => currentTotal + currentProduct.price, 0)
// const totalQty = products.reduce((currentQty, currentProduct) => currentQty + currentProduct.quantity, 0)
// console.log(totalPrice) // 128.85000000000002
// console.log(totalQty) // 10

// page 42 combined Array methods, chaining together

// const products = [
// { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts', quantity: 2 },
// { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter', quantity: 3 },
// { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants', quantity: 5 }
// ]
// // get the titles of all products over $25:
// const over25Titles = products.filter(prod => prod.price > 25).map(prod => prod.title)
// console.log(over25Titles) // [ "Men's Hoodie", 'Denim Jeans' ]

// // list product ids and titles in descending order of price:
// const hiloProducts = [...products].sort((p1, p2) => p1.price - p2.price).reverse()
// .map(prod => ({id: prod.id, title: prod.title}))
// console.log(hiloProducts)
//         // [ {id: 2, title: "Men's Hoodie"}, {id: 3, title: 'Denim Jeans'}, {id: 1, title: 'Sleeveless Tee'} ]


// //  page43 Iterable Objects are special objects such as Arrays can use for..of loop to step through array

// const animalsArr = ['tiger', 'lion', 'elephant', 'giraffe']
// for (let animal of animalsArr) { console.log(animal); } // prints each animal in turn, animal is the element

// const animalObj = { name: 'tiger', genus: 'panthera', class: 'mammal' }
// for (let property of animalObj) { console.log(property); } // TypeError: animalObj is not iterable


// // Static Method Array.from - used for removing duplicates

// console.log( Array.from("string") ) // [ 's', 't', 'r', 'i', 'n', 'g' ]
// console.log( Array.from(new Set(['cat', 'bat', 'sat', 'cat', 'bat'])) ) // [ 'cat', 'bat', 'sat' ]
// console.log( Array.from(new Map([[1, 'one'], [2, 'two'], [3, 'three']])) )
// // [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]

// function makeArray() {
// return Array.from(arguments);
// }
// console.log( makeArray(1, 2, 3) ); // [ 1, 2, 3 ]

//  Maps page 45 - collection of keyed data items, that can be string,numbers etc
// const exampleMap = new Map() // create new empty map object
// exampleMap.set(1, 'number one') // 'set' adds a new key-value pair to the map
// exampleMap.set('1', 'string one') // maps support keys of different types
// exampleMap.set(true, 'true') // can have boolean keys
// exampleMap.set({name: 'John'}, {phone: '0412345678'}) // object keys also valid
// exampleMap.set('1', 'second string one') // overwrites previous value if key exists
// console.log(exampleMap.size) // 4 - number of items in the map
// console.log(exampleMap)
// Map(4) { 1 => 'number one', '1' => 'second string one', true => 'true',
// { name: 'John' } => { phone: '0412345678' } }

// map.get(key): returns the value with the matching key, or undefined if key doesn’t exist in map
// map.has(key): returns true if the key exists, false otherwise
// map.delete(key): removes the value with the matching key
// map.clear(): removes everything from the map

// console.log( exampleMap.get('1') ) // second string one - gets value for matching key
// console.log( exampleMap.get(2) ) // undefined - key doesn't exist so no value
// console.log( exampleMap.has(1) ) // true - key does exist
// console.log( exampleMap.delete(true) ) // true - removes item and returns true if successful

// exampleMap.clear() // removes all items from map
// console.log( exampleMap ) // Map(0) {}

// page 47
// const recipeMap = new Map([
// ['flour', '1 cup'],
// ['milk', '1/2 cup'],
// ['eggs', 2],
// ['butter', '50g']
// ])
// for (let ingredient of recipeMap.keys()) {
// console.log(ingredient) // flour, milk, eggs, butter
// }
// for (let quantity of recipeMap.values()) {
// console.log(quantity) // 1 cup, 1/2 cup, 2, 50g
// }
// for (let item of recipeMap) { // same as recipeMap.entries()
//     console.log(item) // ['flour', '1 cup'], (and so on)
// }

//  page 49 conversion with Object Object.from Entries
// eg Map object defined as an array.  Converts Object.arrays to Objects

// const priceMap = new Map([
// ['banana', 1],
// ['pineapple', 2],
// ['watermelon', 5]
// ])

// const priceObject = Object.fromEntries(priceMap)
// console.log(priceObject) // { banana: 1, pineapple: 2, watermelon: 5 }

//  page 49 conversion of Object.entries to Map Object

// const priceObject = { banana: 1, pineapple: 2, watermelon: 5 } //here we have created an Object in curly brackets

// const priceMap = new Map( Object.entries(priceObject) ) 
// console.log(priceMap) // Map(3) { 'banana' => 1, 'pineapple' => 2, 'watermelon' => 5 }
// console.log(priceMap.get('banana')) // 1 - means you can now use the 'Get' function

// for Sets and Maps you can use 'has' 'delete' 'pushes'

// page 52 Caching using Maps - helpful for retrieving and storing data on your local computer

// // Simulate fetching external data, which can be slow
// function fetchExternalData(id) {
// console.log(`Fetching data for ID: ${id}`);
// const data = `Data for ID: ${id}`; // Simulated data
// return data;
// }

// Create a Map for caching - when fetching or keeping Data from an external database
// Simulate fetching external data, which can be slow
function fetchExternalData(id) {
console.log(`Fetching data for ID: ${id}`);
const fetchedData = `Data for ID: ${id}`; // Simulated data
return fetchedData;
}
// Create a Map for caching
const cache = new Map();
function getCachedData(id) {

// Check if data is already in the cache
if (cache.has(id)) {
return cache.get(id); // return cached value, no expensive lookup
}

// If not in cache, fetch "external" data and store in cache for next time
const fetchedData = fetchExternalData(id);
cache.set(id, fetchedData);
return fetchedData;
}
// Example usage
console.log('#1: ' + getCachedData(4)); // First time: fetches "external" data and caches result
console.log('#2: ' + getCachedData(4)); // Other times: can fetch result from cache, much faster


































