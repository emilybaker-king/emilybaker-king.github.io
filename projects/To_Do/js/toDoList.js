
/*
    * make references to the Html elements that we want to interact with through JS
    * Add in the ability to add a new list item
    * add in the ability to remove a list item
    * add in the ability to mark a list item as done
*/

var submitButton = document.getElementById("submit");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul"); //querySelector gets the first instance of a particular element type. Since we only have one ul, this will create a reference to that ul

function createListElement() {
    //Create a new li element
    var li = document.createElement("li");
    //add content to it
    li.innerHTML = input.value;
    //add it to our ul
    ul.appendChild(li);
    //clear out the text input after the user makes a list item
    input.value = "";

    //function to handle showing a list item as complete
    function markDone() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", markDone);

    //Create the delete button that will be added to our list item
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    li.appendChild(deleteButton);

    //Function will be called whenever the delete button is clicked
    function deleteListItem() {
        li.classList.add("delete");
    }

    deleteButton.addEventListener("click", deleteListItem);
}

//This is going to create a list element when the submit button is tapped
function createListItemSubmitButton() {
    //check to make sure our input actually has text. An empty string will have a length of 0
    if (input.value.length > 0) {
        createListElement();
    }
}

//This is going to be used to create a list element when the enter key is pressed
function createListItemEnterKey(event) {
    console.log(event.keyCode);

    //create a new list item if there is text in the input field and the enter key is pressed
    if (input.value.length > 0 && event.keyCode === 13) {
        createListElement();
    }
}

//Make it so that when the submit button is clicked, the createListItemSubmitButton function is called
submitButton.addEventListener("click", createListItemSubmitButton);

//This event listner will detect when keys are pressed while the input is active
input.addEventListener("keypress", createListItemEnterKey);