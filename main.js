// Variables

var affirmationSelection = document.getElementById('affirmation');
var mantraSelection = document.getElementById('mantra');
var messageBtn = document.querySelector('.message-btn');
var message = document.querySelector('.message');

// Event Listeners
messageBtn.addEventListener("click", showMessage);

// Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function showMessage() {
  if (affirmationSelection.checked) {
    message.innerText = affirmations[getRandomIndex(affirmations)];
  }
}

function randomAffirmation() {

}
