// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// created a var for each type of characters.
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "~`!@#$%^&*()_-+={[}]|\:;<,>.?/";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}

generateBtn.addEventListener("click", writePassword);

function generatePassword(){
 
  var passwordLength = prompt("How long do you want your password to be? Please chose between 8 and 128.");

  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128!");
    if (passwordLength < 8 || passwordLength > 128){
      alert("Criteria not met")
      return;
    }
  } else { 
  var withUppercase = confirm("Do you want your password to include uppercase letters?");
  var withLowercase = confirm("Do you want your password to include lowercase letters?");
  var withNumbers = confirm("Do you want your password to include numbers?");
  var withSymbols = confirm("Do you want your password to include symbols?");
  };

  var usersChoice = "";

  if(withUppercase){
     usersChoice = usersChoice + upperCaseCharacters;
  }
  
  if(withLowercase){ 
    usersChoice = usersChoice + lowerCaseCharacters;
  }

  if(withNumbers){ 
    usersChoice = usersChoice + numbers;
  }

  if(withSymbols){ 
    usersChoice = usersChoice + symbols;
  } 
  
var finalPassword = "";  

for (var i = 0; i < passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * usersChoice.length);
    
     finalPassword = finalPassword + (usersChoice[randomNumber]);
  }
   return finalPassword;
}
