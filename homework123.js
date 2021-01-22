// Assignment Code
var generateBtn = document.querySelector("#generate");
var charsLower = "abcdefghijklmnopqrstuvwxyz"
var charsUpper = charsLower.toUpperCase()
var charsNumbers = "012345679"
var charsSpecial = "!@#$%^&*()_+"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var charSet =( userLower ? charsLower : '' )
            +( userUpper ? charsUpper : '' )
            +( userNums  ? charsNumbers : '' )
            +( userSpecial ? charsSpecial : '' )

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.querySelector(".answer").value = password


