// Select the generate button element
var generateBtn = document.getElementById("generate");

// Add an event listener to the generate button
generateBtn.addEventListener("click", generateAndDisplayPassword);

// Function to prompt for password criteria and generate a password
function generateAndDisplayPassword() {
  var passwordLength = getPasswordLength();
  var passwordCharacters = getPasswordCharacters();

  if (passwordCharacters.length === 0) {
    alert("You must select at least one password criteria.");
    return;
  }

  var password = generatePassword(passwordLength, passwordCharacters);
  displayPassword(password);
}

function generatePassword(length, characters) {
  var password = '';

  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}

function displayPassword(password) {
  var passwordInput = document.querySelector('#password');
  passwordInput.value = password;
}

function getPasswordLength() {
  var passwordLength = prompt("Enter the password length (between 8 and 128 characters)");

  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Invalid input! Please enter a number between 8 and 128 for the password length.");
  }

  return passwordLength;
}

function getPasswordCharacters() {
  var criteria = [
    { label: "lowercase", characters: "abcdefghijklmnopqrstuvwxyz" },
    { label: "uppercase", characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
    { label: "numeric", characters: "0123456789" },
    { label: "special", characters: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" }
  ];

  var passwordCharacters = '';

  for (let i = 0; i < criteria.length; i++) {
    var include = confirm("Include " + criteria[i].label + " characters?");

    if (include) {
      passwordCharacters += criteria[i].characters;
    }
  }

  return passwordCharacters;
}
