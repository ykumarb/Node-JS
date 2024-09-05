import * as fs from "fs";
// This will allow us to write our code asynchronously

// This will create directory
fs.mkdirSync("C:\\Users\\ykumar\\Desktop\\NODEBOY\\NODE\\1", {recursive: true});
console.log("Directory Created");

// This will remove directory
fs.rmdirSync("C:\\Users\\ykumar\\Desktop\\NODEBOY\\NODE\\1");
console.log("Directory Removed");