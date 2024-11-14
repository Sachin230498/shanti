// const fs = require("fs");

import fs from "fs";

console.log(fs)

// fs.readFile("example.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading the file:", err);
//   } else {
//     console.log("File content:", data);
//   }
// });


// fs.readFile("example.txt", "utf8", (err, data) => {
//   if (err) throw err
// else throw data
// });


// Asynchronous: 
// fs.readFile("file.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Writing to Files
// fs.writeFile("example.txt", "", (err) => {
//     if(err) throw err;
//   console.log("File written successfully!");
// });


// Synchronous:
// const data = fs.readFileSync("example.txt", "utf8");
// console.log(data);

// Writing to Files
// fs.writeFileSync("file.txt", "Hello, MERN!");
// console.log("File written successfully!");



// Appending to Files

// fs.appendFile("file.txt","\n"+ " " + JSON.stringify({ "name":"rahul"}), (err) => {
//   if (err) throw err;
//   console.log("Content appended successfully!");
// });




// Deleting Files
// fs.unlink("file.txt", (err) => {
//   if (err) throw err;
//   console.log("File deleted successfully!");
// });


// Checking File/Directory Existence
// Deprecated: fs.exists


// Renaming Files
// Rename or move a file.


// fs.rename("oldName.txt", "newName.txt", (err) => {
//   if (err) throw err;
//   console.log("File renamed successfully!");
// });