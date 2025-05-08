// For validation connection
// alert("Hello World");

// A group of instructions/procedures
// This function will be excuted when the button is clicked
function sayHello() {
    alert("Hello World");
}

function greetings() {
    // Ge ement/tag of id ""name", retrieve its value and set it as name
    // getter mean to retrieve the value
    const name = document.getElementById("name").value;
    // const age = document.getElementById("age").value;
    // alert( `Hello ${name}!`);

    // Get the element/tag of id "message"
    // Set its innerHTML, add in between <><> = "Hello Tay"

    // setter mean to the value
    document.getElementById("message").innerHTML = `Hello ${name}!`;
    // lefy part = setter = set back the inpit to '' /reset the input say hello
    document.getElementById("name").value = "";
}

const testbutton = document.getElementById("test-button");
testbutton.addEventListener("click", function (e) {
    alert("Hello World! But this time not using attribute onClick!");
})

function addNewItem(){
    const itemName = document.getElementById("item-name").value;
    // Create a new <li></li> element
    const newLi = document.createElement("li");
    // Put "This is Item 1" in between li = <li>This is item 1</li>
    newLi.innerHTML = itemName;
   
    // Retrieve the <ul> element with id "item-list"
    const itemUL = document.getElementById("item-list");
    // Add the li, between ul = <ul><li>This is item 1</li></ul>
    itemUL.appendChild(newLi);
    // Reset back the input
    document.getElementById("item-name").value = "";

    // Add a button at the end of an li
    const newButton = document.createElement("button");
    // Set the button innerHTML to be "Delete" <button>Delete</button>
    newButton.innerHTML = "Delete";
    //<li> This is item 1 <button>Delete</button></li>

    newButton.addEventListener("click", function(e){
        itemUL.removeChild(newLi);
    })
    newLi.appendChild(newButton);
    console.log("Button is clicked!");
    document.getElementById("add-item-btn").setAttribute("disabled", "true");
}

// On input changed("input")
// e -> refer to the caller of this method -> e.target refers to the input
// e.target.value refers to the value of the input
document.getElementById("item-name").addEventListener("input", function(e){
    console.log(e.target.value);
    const userInput = e.target.value;
    if(userInput === ""){
        document.getElementById("add-item-btn").setAttribute("disabled", "true");
    }
    else{
        document.getElementById("add-item-btn").removeAttribute("disabled");
    }
});