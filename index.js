// Maximum allowed characters
const MAX_CHAR = 50;

// Function to update character count and remaining characters
function updateCount() {
    const textInput = document.getElementById('textInput');
    const totalSpan = document.getElementById('total');
    const remainSpan = document.getElementById('remain');

    const currentLength = textInput.value.length;
    totalSpan.textContent = currentLength;
    remainSpan.textContent = MAX_CHAR - currentLength;

    // Optional: Prevent typing beyond MAX_CHAR
    if (currentLength > MAX_CHAR) {
        textInput.value = textInput.value.substring(0, MAX_CHAR);
        totalSpan.textContent = MAX_CHAR;
        remainSpan.textContent = 0;
    }
}

// Initialize the counter on page load
window.onload = function() {
    updateCount();
};