// Select the toggle button
const toggleModeBtn = document.getElementById('toggleModeBtn');

// Track current mode (default is light mode)
let isDarkMode = false;

// Add event listener to toggle button
toggleModeBtn.addEventListener('click', () => {
    if (isDarkMode) {
        // Switch to Light Mode
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        toggleModeBtn.textContent = 'Switch to Dark Mode';
    } else {
        // Switch to Dark Mode
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        toggleModeBtn.textContent = 'Switch to Light Mode';
    }

    // Toggle the mode state
    isDarkMode = !isDarkMode;
});
