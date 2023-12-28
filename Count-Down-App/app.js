// Set the end date for the countdown timer
const endDate = "29 December 2023 12:00 PM";

// Display the end date on the HTML element with the ID "end-date"
document.getElementById("end-date").innerText = endDate;

// Select all input elements on the page
const inputs = document.querySelectorAll("input");

// Function to update the countdown clock
function clock() {
    // Create Date objects for the end date and the current date and time
    const end = new Date(endDate);
    const now = new Date();

    // Calculate the time difference in seconds between the end date and the current date
    const diff = (end - now) / 1000;

    // If the countdown has reached or passed the end date, return and stop updating
    if (diff < 0) return;

    // Update the input fields with the remaining days, hours, minutes, and seconds
    inputs[0].value = Math.floor(diff / 3600 / 24);       // Days
    inputs[1].value = Math.floor(diff / 3600) % 24;        // Hours
    inputs[2].value = Math.floor(diff / 60) % 60;          // Minutes
    inputs[3].value = Math.floor(diff) % 60;               // Seconds
}

// Call the clock function initially to set the initial countdown values
clock();

// Log the input elements to the console for debugging or inspection
console.log(inputs);

// Update the countdown clock every second using setInterval
setInterval(() => {
    clock();
}, 1000);
