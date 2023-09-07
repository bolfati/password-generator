// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(
  );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  
  function generatePassword(){

    
    var alphabet = "abcdefghijklmnopqrstuvwxyz"; //alphabet key for password generator
    var alphabetCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //capitalized alphabet key for password generator, we could use the method toUpperCase to alter this if we wanted
    var numbers = "0123456789"; //numbers key
    var specialCharacters = "!@#$%^&*()_{}+[]<>?"; // special character's key
    var passwordCatch = ""; //will make selected array we can invoke 
    var passwordFinal = []; // what the password will be
    var alph; //boolean for true or false from user input validation for lower case letters
    var alphCaps; //boolean for true or false from user input validation for upper case letters
    var nums; //boolean for true or false from user input validation for numbers
    var specChars; //boolean for true or false from user input validation for special characters
    var length;


    alph = confirm("Do you wish to have lowercase letters in your Password?");//prompts user to add or decline lower case letters in their password

      if (alph) {
        passwordCatch = passwordCatch.concat(alphabet);
        alert("Lowercase Letters will be in your Password!");
      } else {
        alert("Lowercase Letters will NOT be in your Password!");
      };



    alphCaps = confirm("Do you wish to have uppercase letters in your Password?"); //prompts user to add or decline upper case letters in their password

      if (alphCaps) {
        passwordCatch = passwordCatch.concat(alphabetCaps);
        alert("Uppercase Letters will be in your Password!");
      } else {
        alert("Uppercase Letters will NOT be in your Password!");
      };



    nums = confirm("Do you wish to have numbers in your Password?"); //prompts user to add or decline numbers in their password

      if (nums) {
        passwordCatch = passwordCatch.concat(numbers);
        alert("Numbers will be added to your Password!");
      } else {
        alert("Numbers will NOT be in your Password!");
      };



    specChars = confirm("Do you wish to have special characters in your Password?") //prompts user to add or decline special characters in their password

      if (specChars) {
      passwordCatch = passwordCatch.concat(specialCharacters);
      alert("Special Characters will be added to your Password!");
    } else {
      alert("Special Characters will NOT be in your Password!");
    };


    length = prompt("Please input a Password length between 8 - 128 characters!"); //prompts user to input a password length between 8 and 128 characters, then loops if invalid amount is validated

      while (length < 8 || length > 128) {
        length = prompt("Password must be between 8 - 128 characters, please input a valid number!");

      }

console.log(passwordCatch);
console.log(length);

if (!alph && !alphCaps && !nums && !specChars) {
  alert("Please select OK on one of the prompts.  You can't make a password with no characters.");
  return;
}

for (var i = 0; i < length; i++) {
  var random = Math.floor(Math.random() * passwordCatch.length);
  console.log(random)
  passwordFinal += passwordCatch.substring(random, random +1); 
}



    return passwordFinal;

  }



};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

