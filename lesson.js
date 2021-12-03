const {getFullName} = require("./lib.js")
const fs = require("fs")

const arr ={
     name: "John",
     lastname: "Doe",
     age: 42
 }

//getFullName(arr)
fs.writeFile("./personal.json", JSON.stringify(arr),() =>{

} )