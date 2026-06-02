//assignment
const arr=[10,20,30,40,50]
function getElementAtIndex(arr,index){
if(index<10||index>=arr.length){
    throw new Error(`invalid-index${index}`);
}
return arr[index];
}
try{
    let value=getElementAtIndex(numbers,10);
    console.log("value:",value);
}
catch(error){
    console.log(error.message);
}
finally{
    console.log("access attempt finished");
}
//exercise
//1
try{
    let num=5;
    let result=num+2;
    console.log("result is:",result)
}
catch(error){
    console.log("varaible is not defined");
}
try{
let str=null;
console.log(str.length)
}
catch(error){
console.log("null doesnot have length")
}
try{
    let arr=newArray(-5)
    console.log(newArray);
}
catch{
    console.log("array range should not be negative and should not represented in ()")
}
try{
    let code=decodeURIComponent('%');
    console.log(code);
}
catch(error){
   console.log("invalid url component")
}
//2
//function submitForm(data){
  //  if(data.age<0){
    //    throw "regular errror"
    //}
//    if(!data.name){
  //      throw("name is required")
   // }
    //console.log(data)
//}
//try{
  //  let ageData={age:-5}
    //submitForm(ageData);
//}
//catch(error){
// console.log("validation failed")
//}
//better 
//2
 class validationError extends Error{
    constructor(message){
        super(message);
        this.name="validationError";
    }
 }
 function sumbitForm(data){
    if(!data.name){
        throw new validationError("name is required")
    }
    if(data.age<0){
        throw new Error("age cant be negaitve")
    }
    console.log("form sumit successfull:",data);
 }
 try{
    let ageData={
        age:-4
    };
    sumbitForm(ageData)
 }
 catch(error){
    if(error instanceof validationError){
        console.log("validation failed:",error.message)
    }
    else{
        console.log("validation failed:",error.message)
    }
 }
 //3
const fs=require("fs");

function loadConfig(path) {
  try {
    const fileContent = fs.readFileSync(path, "utf-8");
    return JSON.parse(fileContent);

  } catch (error) {

    if (error.code === "ENOENT") {
      throw "Missing config file";
    }
    if (error instanceof SyntaxError) {
      console.log("Invalid JSON format. Using default config.");
      return { theme: "light", language: "en" };
    }
    throw error;
  }
}
try {
  const config = loadConfig("./config.json");
  console.log("Loaded config:", config);
} catch (error) {
  console.log("Error loading config:", error);
}
//4
const readlineSync = require("readline-sync");

function askAge() {
  try {
    let input = readlineSync.question("What is your age? ");
    let age = Number(input);
    if (!input || isNaN(age) || age < 0) {
      throw new Error("Invalid age entered");
    }
    console.log(`✅ Thank you! Your age is: ${age}`);
  } catch (error) {
    console.log("❌ Error:", error.message);
  }
}
askAge();

