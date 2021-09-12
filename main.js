// Variables

var affirmationRadio = document.getElementById('affirmation');
var mantraRadio = document.getElementById('mantra');
var messageBtn = document.querySelector('.message-btn');
var message = document.querySelector('.message');

// Event Listeners
messageBtn.addEventListener("click", showMessage);

// Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
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
  message.innerText = affirmations[getRandomIndex(affirmations)];
}

function displayMantra() {
  message.innerText = mantras[getRandomIndex(mantras)];
}

function showErrorMessage() {
  if (!affirmationRadio.checked & !mantraRadio.checked) {
    message.innerHTML = `<p class="error">Oops! Please make a selection.</p>`
  }
}
