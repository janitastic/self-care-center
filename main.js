// Variables

var affirmationRadio = document.getElementById('affirmation');
var mantraRadio = document.getElementById('mantra');
var messageBtn = document.querySelector('.message-btn');
var messageBox = document.querySelector('.message');
var messageDisplay = document.getElementById('message-display');
var buttonDisplay = document.getElementById('button-display');
var clearBtn = document.getElementById('clear');

// Event Listeners
messageBtn.addEventListener("click", showMessage);
clearBtn.addEventListener("click", clearMessage);

// Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function showMessage() {
  if (affirmationRadio.checked) {
    displayAffirmation();
    affirmationRadio.checked = false;
  } else if (mantraRadio.checked) {
    displayMantra();
    mantraRadio.checked = false;
  } else {
    showErrorMessage();
  }
}

function displayAffirmation() {
  messageDisplay.innerText = affirmations[getRandomIndex(affirmations)];
  buttonDisplay.classList.remove("hidden");
}

function displayMantra() {
  messageDisplay.innerText = mantras[getRandomIndex(mantras)];
  buttonDisplay.classList.remove("hidden");
}

function showErrorMessage() {
  if (!affirmationRadio.checked & !mantraRadio.checked) {
    messageBox.innerHTML = `<p class="error">Oops! Please make a selection.</p>`;
  }
}

function clearMessage() {
  messageDisplay.innerHTML = `<img src="assets/meditate.svg" alt="Meditate bell">`;
  buttonDisplay.classList.add("hidden");
}
