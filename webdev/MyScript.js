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
