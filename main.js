// Variables

var affirmationRadio = document.getElementById('affirmation');
var mantraRadio = document.getElementById('mantra');
var messageBtn = document.querySelector('.message-btn');
var messageBox = document.querySelector('.message');
var messageDisplay = document.getElementById('message-display');
var buttonDisplay = document.getElementById('button-display');
var clearBtn = document.getElementById('clear');
var errorMessage = document.getElementById('error');

// Event Listeners
messageBtn.addEventListener("click", showMessage);
clearBtn.addEventListener("click", clearMessage);
affirmationRadio.addEventListener("click", hideErrorMessage);
mantraRadio.addEventListener("click", hideErrorMessage);

// Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function showMessage() {
  if (affirmationRadio.checked) {
    displayAffirmation();
    // hideErrorMessage();
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
  // buttonDisplay.classList.remove("hidden");
  show(buttonDisplay);
}

function displayMantra() {
  messageDisplay.innerText = mantras[getRandomIndex(mantras)];
  // buttonDisplay.classList.remove("hidden");
  show(buttonDisplay);
}

function showErrorMessage() {
  if (!affirmationRadio.checked && !mantraRadio.checked) {
    show(errorMessage);
  }
}

function clearMessage() {
  messageDisplay.innerHTML = `<img src="assets/meditate.svg" alt="Meditate bell">`;
  // buttonDisplay.classList.add("hidden");
  hide(buttonDisplay);
}

//Helper Functions
function hide(element) {
  element.classList.add('hidden')
}

function show(element) {
  element.classList.remove('hidden')
}

function fade(element) {
  element.classList.toggle('hidden')
}

function hideErrorMessage() {
  if (affirmationRadio.checked || mantraRadio.checked) {
    hide(errorMessage);
  }
}
