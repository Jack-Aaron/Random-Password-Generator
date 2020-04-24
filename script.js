// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
    // sort all the various characters into arrays by type
    var specialCharacters = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?".split("");
    var numerics = "1234567890".split("");
    var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    // make sure password length is within limits
    var passwordLength = prompt("Your Password must be between 8 and 128 Characters. Please enter your desired password length:");
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) === true) {
        alert("If you can't even do this right, you have no business protecting your information behind passwords. Sigh. Your password will now be 30 characters, okay?");
        var passwordLength = 30;
    }
    // ask user what kind of password they want
    var wantsSpecialCharacters = confirm("Do you want Special Characters in your password? (OK: Yes / Cancel: No)");
    var wantsNumerics = confirm("Do you want Numerics in your password? (OK: Yes / Cancel: No)");
    var wantsLowerCase = confirm("Do you want Lowercase Letters in your password? (OK: Yes / Cancel: No)");
    var wantsUpperCase = confirm("Do you want Uppercase Letters in your password? (OK: Yes / Cancel: No)");
    // uses Booleans to place all selected character types into final character "pool"
    var characterPool = [];
    if (wantsSpecialCharacters === true) {
        var characterPool = characterPool.concat(specialCharacters);
    }
    if (wantsNumerics === true) {
        var characterPool = characterPool.concat(numerics);
    }
    if (wantsLowerCase === true) {
        var characterPool = characterPool.concat(lowerCase);
    }
    if (wantsUpperCase === true) {
        var characterPool = characterPool.concat(upperCase);
    }
    if (wantsSpecialCharacters === false && wantsNumerics === false && wantsLowerCase === false && wantsUpperCase === false) {
        alert("You have chosen NOTHING as your password? Are you serious? Look, just use all possible characters. Trust me, it will help you.");
        var characterPool = characterPool.concat(specialCharacters).concat(numerics).concat(lowerCase).concat(upperCase);
    }
    // create the password of set length and with selected character types
    function generatePassword(pool, length) {
        var password = "";
        for (let i = 0; i < length; i++) {
            var randomSelector = Math.floor(Math.random() * pool.length);
            console.log(randomSelector);
            password += pool[randomSelector];
        }
        return password;
    }
    // display password in box
    var password = generatePassword(characterPool, passwordLength);
    var passwordText = document.querySelector("#password");
    passwordText.textContent = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);