//your code here
// Get the textbox and the letter count element
const evaluatedText = document.getElementById('evaluatedText');
const letterCount = document.getElementById('letterCount');

// Add an event listener to the textbox to listen for input events
evaluatedText.addEventListener('input', () => {
    // Get the current value of the textbox
    const text = evaluatedText.value;
    // Update the letter count
    letterCount.textContent = text.length;
});
