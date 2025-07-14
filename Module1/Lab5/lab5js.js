let oceans = ["Indian", "Pacific", "Atlantic", "Adriatic", "Arctic"];
console.log(oceans[0]);
console.log(oceans[1]);
console.log(oceans[2]);
console.log(oceans[3]);
console.log(oceans[4]);

oceans[1] = "Antartic";
console.log(oceans);

oceans[4] = "Indian";
console.log(oceans);

console.log(oceans);
oceans.push("Blue");
console.log(oceans);

let lastOcean = oceans.pop();
console.log(lastOcean); // Blue
console.log(oceans);

