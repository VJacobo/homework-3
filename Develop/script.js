var generateBtn = document.querySelector("#generate");
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWQXYZ!#*-_=+";
  var passwordLength = 12;
  var password = "";

 for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random()*charset.length);
  password += charset.charAt(randomIndex);
 } 
 return password;
}
