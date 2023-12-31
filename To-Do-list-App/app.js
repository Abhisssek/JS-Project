// Get a reference to the input field and the to-do list container
const item = document.querySelector("#item");
const todobox = document.querySelector("#to-do-box");

// Add an event listener to the input field for the "keyup" event
item.addEventListener(
    "keyup",
    function(event) {
        // Check if the key pressed is the Enter key
        if (event.key === "Enter") {
            // Call the addtodo function with the input value and clear the input field
            addtodo(this.value);
            this.value = "";
        }
    }
);

// Function to add a new to-do item to the list
const addtodo = (itemText) => {
    // Create a new list item element
    const listitem = document.createElement("li");
    
    // Set the inner HTML of the list item with the input value and a delete icon
    listitem.innerHTML = `${itemText}
    <i class="fas fa-times"></i>`;
    
    // Add a click event listener to the list item to toggle the "done" class
    listitem.addEventListener(
        "click",
        function() {
            // Toggle the "done" class to visually mark the to-do item as completed or not
            this.classList.toggle("done");
        }
    );
    
    // Add a click event listener to the delete icon to remove the list item
    listitem.querySelector("i").addEventListener(
        "click",
        function() {
            // Remove the current to-do item when the delete icon is clicked
            listitem.remove();
        }
    );
    
    // Append the new list item to the to-do list container
    todobox.appendChild(listitem);
};
