const fs = require("fs"); // get from node.js
const path = require("path"); // get from node.js

// callback function that is used with readFile
const printText = function (err, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
};

const getFile = (file) => {
  fs.readFile(file, "utf8", printText); // async
  console.log("(01) Inside getFile");
};

const text1_path = path.join(__dirname, "text_files", "text1.txt");
const text2_path = path.join(__dirname, "text_files", "text2.txt");

console.log("(02) Start Reading files...");

getFile(text1_path);
console.log("(03) Finished reading text1");

getFile(text2_path);
console.log("(04) Finished reading text2");

// What is the order of events?
// (02) Start Reading files...
// (01) Inside getFile
// (03) Finished reading text1
// (01) Inside getFile
// (04) Finished reading text2
// This is text file #2...
// This is text file #1...
