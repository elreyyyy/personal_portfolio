document.addEventListener("DOMContentLoaded", function() {
    var flashingImage = document.getElementById("profile_picture");
    var isVisible = true;

    // Function to toggle image visibility
    function toggleVisibility() {
        isVisible = !isVisible;
        flashingImage.style.visibility = isVisible ? "visible" : "hidden";
    }

    // Set interval to toggle visibility every 500 milliseconds (half a second)
    var flashingInterval = setInterval(toggleVisibility, 500);

    // Optional: Stop the flashing after a certain duration (e.g., 5 seconds)
    setTimeout(function() {
        clearInterval(flashingInterval); // Stop the flashing
        flashingImage.style.visibility = "visible"; // Ensure the image is visible after flashing stops
    }, 5000); // 5000 milliseconds = 5 seconds
});