import fs from 'fs';

/* 1. Blocking code */
console.log("Start");
let data = fs.readFileSync("./content.txt");
console.log(data.toString());
console.log("End");

console.log("----------------------------");

/* 2. Non-Blocking code */
console.log("Start");
fs.readFile("./content.txt", (err, data) => {
  if (err) throw error;
  console.log(data.toString());
});
console.log("End");