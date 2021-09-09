// Variables

var affirmationSelection = getElementById('affirmation');
var mantraSelection = getElementById('mantra');
var messageBtn = querySelector('.message-btn');


// Event Listeners
messageBtn.addEventListener("click", showMessage);

// Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function showMessage() {
  if (affirmationSelection.checked) {
    
  }
}
