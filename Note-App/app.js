// Select the "Add Note" button and the main container
const addbtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

// Event listener for the "Add Note" button click
addbtn.addEventListener(
    "click",
    function(){
        addNote(); // Call the function to add a new note
    }
);

// Function to save notes to localStorage
const saveNotes = () => {
    // Select all notes' textareas
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];

    // Iterate through each note and store its value in the 'data' array
    notes.forEach(
        (note) => {
            data.push(note.value);
        }
    );

    // Check if there are no notes, remove 'notes' from localStorage
    if(data.length === 0){
        localStorage.removeItem("notes");
    }
    // Otherwise, store the 'data' array in localStorage after converting to JSON
    else {
        localStorage.setItem("notes", JSON.stringify(data));
    }
}

// Function to add a new note
const addNote = (text = "") => {
    // Create a new note element
    const note = document.createElement("div");
    note.classList.add("note");
    // Set the HTML content of the note with save and trash icons and a textarea
    note.innerHTML = `<div class="tool">
                        <i class="fas fa-save"></i>
                        <i class="fas fa-trash"></i>
                    </div>
                    <textarea>${text}</textarea>`;
    
    // Event listener for the trash icon to remove the note and save the notes
    note.querySelector(".fa-trash").addEventListener(
        "click",
        function(){
            note.remove();
            saveNotes();
        }
    );
    
    // Event listener for the save icon to save the notes
    note.querySelector(".fa-save").addEventListener(
        "click",
        function(){
            saveNotes();
        }
    );

    // Event listener for the textarea on focusout to save the notes
    note.querySelector("textarea").addEventListener(
        "focusout",
        function(){
            saveNotes();
        }
    );

    // Append the note to the main container and save the notes
    main.appendChild(note);
    saveNotes();
}

// Immediately Invoked Function Expression (IIFE) to load notes from localStorage on page load
(
    function(){
        // Retrieve notes from localStorage and parse the JSON
        const isNote = JSON.parse(localStorage.getItem("notes"));

        // If there are no notes, add an empty note
        if(isNote === null){
            addNote();
        }
        // Otherwise, iterate through each note and add it to the page
        else {
            isNote.forEach(
                (isNote) => {
                    addNote(isNote);
                }
            );
        }
    }
)();
