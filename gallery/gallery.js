const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const enlargedPhoto = document.querySelector("#enlarged-photo");
const closeButton = document.querySelector("#close-button");

// Add click event listeners to the gallery items
gallery.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        // Show the overlay and display the clicked image
        overlay.style.display = "block";
        enlargedPhoto.src = event.target.src;
    }
});

// Add event listener for the "Escape" key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        // Hide the overlay when the "Escape" key is pressed
        overlay.style.display = "none";
    }
});

// Add click event listener to close button
closeButton.addEventListener("click", () => {
    // Hide the overlay when the close button is clicked
    overlay.style.display = "none";
});