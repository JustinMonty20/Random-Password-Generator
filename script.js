// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password")
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Generate password function
function createPassword() {
  // variables needed
  var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var password = [];
  var emptyPassword = "";
  var passwordLength = parseInt(prompt("How long should your new password be?"));


  if (passwordLength < 8 || passwordLength > 128) {
    alert("Press the button again. Password needs to be between 8 and 128 characters.")
    location.reload()
  } else {
    // series of question to determine the criteria of their new password.
    var doYouWantSpecChars = confirm("Would you like special characters in your new password (ex: !, @, #)");
    var doYouWantNums = confirm("Would you like numbers in your password?");
    var doYouWantLowerCase = confirm("Would you like lowercase letters in your password?");
    var doYouWantUpper = confirm("Would you like uppercase letters in your password?");

    // Series of if statements checking to see what the user wants in their password. 
    if (doYouWantSpecChars) {
      password.push(symbols);
    }
    if (doYouWantNums) {
      password.push(numbers);
    }
    if (doYouWantLowerCase) {
      password.push(lowerCase);
    }
    if (doYouWantUpper) {
      password.push(upper);
    }

    // for loop that pieces together their random password. 
    for (i = 0; i < passwordLength; i++) {
      var firstSetOfNumbers = Math.floor(Math.random() * password.length);
      var secondSetOfNumbers = Math.floor(Math.random() * password[firstSetOfNumbers].length);
      emptyPassword += password[firstSetOfNumbers][secondSetOfNumbers];
    }
    return emptyPassword;
  }

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





