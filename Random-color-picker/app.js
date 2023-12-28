// Function to generate a random color and update the background color and display the color code
const getcolor = () => {
    // Generate a random number between 0 and 16777215 (decimal equivalent of FFFFFF in hexadecimal)
    const randomnumber = Math.floor(Math.random() * 16777215);

    // Convert the random number to hexadecimal and prepend '#' to create a valid color code
    const randomcode = "#" + randomnumber.toString(16);

    // Set the background color of the document body to the generated color
    document.body.style.backgroundColor = randomcode;

    // Display the generated color code in an element with the ID "color-code"
    document.getElementById("color-code").innerText = randomcode;
}

// Add a click event listener to the element with the ID "btn" to trigger the getcolor function
document.getElementById("btn").addEventListener("click", getcolor);

// Call the getcolor function initially to set a random color when the page loads
getcolor();
