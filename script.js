var characterLenght = 8;
var choiceArr = [];

var specialCharArr = ['!','@','#','$','%','^','&','*','(',')','[',']','{','}','|','?','/','<','>', ];
var lowerCassArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numberArr = ['1','2','3','4','5','6','7','8','9','0',]; 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   var correctprompts = getprompts(); //either  true or false 

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
if (correctprompts) {
var newPassword = generatePassword();
var passwordText = document.querySelector("password");
passwordText.value = newPassword;
} else {
    passwordText.value ="";

}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
 //I would generatePassword based on the prompts  
 var password = "";
 for( var i = 0; i < characterLenght; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
 } 
 return password;
}

function getprompts(){
    choiceArr = [];
    characterLenght = parseInt(prompt("How many characters do you want your password ti be? (8-128 characters"));

    if(isNaN(characterLenght) || characterLenght < 8 || characterLenght > 128) {   //I hope this is all false 
        alert("character lenth has to be a number, 8-128 digits. please try again");
        return false
    }
if (confirm("would you like lowercase letters in your password")){
    choiceArr = choiceArr.concat(lowerCassArr);
}
    if (confirm("would you like uppercase letters in your password")){
        choiceArr = choiceArr.concat(uppercaseArr);
    }
    if (confirm("would you like special characters  in your password")){
        choiceArr = choiceArr.concat(specialCharArr);
    }
    if (confirm("would you like numbers in your password")){
        choiceArr = choiceArr.concat(numberArr);
    }
return true;
}


