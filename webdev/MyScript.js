console.log("Hello World");

let name = "Muhaiza";
console.log("Hello " + name);

name = "Abu";
console.log("Hello " + name);
            
const myName = "TAY"
console.log(myName)

// This value is not changable bcause is constant
// myName = "He"

//data type
//String
const message = "Hello World"//String can be word, sentence, character, pharagraph etc
console.log(message);

//Number
const a = 10
const b = 3

//Operation
const sum = a+b
console.log(sum);

const minus = a-b;
console.log(minus);

const powerOf = a**b;
console.log(powerOf);

const modulo = a%b; //Remainder of division operation 10/3 = 3 with 1 remainder
console.log(modulo);

//Spring opretion
//USe '' or "" or, ``
const greetings = "Hello" + name;
console.log(greetings);

//String interpolation
const goodbye = `Goodbye ${name}`;
console.log(goodbye);

//Boolean
const hungry = true;
const tired = false;
console.log(hungry & tired); // Both
console.log(hungry || tired); // One of
console.log(!hungry); //reverse of

if(hungry){
  console.log("I am hungry")
}else{
  console.log("I am not hungry")
}

//If-else statement
const age = 17
const withParent = true
if(age<13) {
  console.log("You cannot watch the moview")
} else if (age<18) {
  console.log("You can watch the movie with parent")
} else {
  console.log("You can watch the movie")
}

if(age < 12 || (age < 18 && !withParent)){
  console.log("You cannot watch the moview")
}else{
  console.log("You can watch the movie")
}


console.log(age == "17") //value equality -> it only check the value
console.log(age === "17") //strict equality -> i check the type and value

console.log(true == 1) //truthy value, with == it checks truthy value(Truthy and falsy value)
console.log(true === 1)
console.log(true == "Hello World")
console.log(true == "0")


//from 0 to 10, every iteration add by one
for (let i = 0; i < 10; i++){
  console.log(i);
}

for (let i = 10; i > 0; i--){
  console.log(i);
}

// from 1 to 10, every iteration add by 2
for(let i =1; i < 10; i += 2){
  console.log(i);
}

// Array - A collection of items
// Declaring an Array
let scores = [70,90,100,80,60];

// Ad an item at the end of array
scores.push(85);
console.log(scores);

//Remove an item from the end of array
scores.pop();
console.log(scores);

// Retrieving an item from the array
console.log(scores[1]); // index start from 0

// Normal for loop
for (let i = 0; i < scores.length; i++){
  console.log(scores[i]);
}

// Length of the array
console.log(scores.length);

// Removing an item at the particular index
// Remove from index 2, one item
console.log(scores);
scores.splice(2,1);
console.log(scores);

// Object
// Key value type of collection
const info = {"name":"Alice", "age":25, "professional": "Admin"};
console.log(info.name);
console.log(info.age);
console.log(info.professional);
            
// Ex: Array of object
// Key value type if collection
// In JS, for Object, the "" on the left part(key) is not compulsory
// When we are communicate with the Server (JSON), the "" is compulsory
const employees = [
  {"name":"Alice", "age":25, "professional": "Admin"},
  {"name":"Karchoon", "age":26, "professional": "Support"},
  {"name":"Meiqi", "age":26, "professional": "Java Developer"},
  {name:"Thinesh", age:28, professional: "TF Support"}
]

for (let i = 0; i < employees.length; i++){
  console.log(employees[i]["name"] + " is a " + employees[i]["professional"]);
  console.log(`${employees[i]["name"]} from ${employees[i]["professional"]} department`);
}