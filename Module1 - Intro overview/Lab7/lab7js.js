console.log("Hello World"); //output string "Hello World" in console

// Write the Code
function add(a, b) {
  return a + b;
}
console.log(add(5, 1)); //declaring the values of a and b)

//create the Test
if (add(5, 1) != 6) {
  throw new Error("Test failed");
}

//create the Test
if (add(5, 3) != 8) {
  throw new Error("Test failed");
}

//create the Test
if (add(5, 10) != 15) {
  throw new Error("Test failed");
}

console.log("All tests passed.");

// function subtract(c, d) {
//   //declaring a function of c - d
//   console.log(c - d); //output the result in console
// }
// subtract(10, 5); //declaring the values of c and d

// Write the Code
function subtract(c, d) {
  return c - d;
}
console.log(subtract(10, 5)); //declaring the values of c and d)

//create the Test
if (subtract(10, 5) != 5) {
  throw new Error("Test failed");
}

//create the Test
if (subtract(5, 3) != 2) {
  throw new Error("Test failed");
}

//create the Test
if (subtract(8, 4) != 4) {
  throw new Error("Test failed");
}

console.log("All tests passed.");

// function multiply(e, f) {
//   //declaring a function of e * f
//   console.log(e * f); //output the result in console
// }
// multiply(7, 7); //declaring the values of e and f

// Write the Code
function multiply(e, f) {
  return e * f;
}
console.log(multiply(10, 5)); //declaring the values of e and f)

//create the Test
if (multiply(10, 5) != 50) {
  throw new Error("Test failed");
}

//create the Test
if (multiply(5, 3) != 15) {
  throw new Error("Test failed");
}

//create the Test
if (multiply(8, 0) != 32) {
  throw new Error("Test failed");
}

console.log("All tests passed.");

function division(g, h) {
  //declaring a function of g / h
  console.log(g / h); //output the result in console
}
division(100, 10); //declaring the values of g and h

function combine(name) {
  //declaring a function of combining with name
  console.log("Hello " + name); //output the result name with the string "Hello" in console
}
combine("Neesh"); //declaring the value of name
