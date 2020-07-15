// Assignment Code
var generateBtn = document.querySelector("#generate");

//Var assigned to id
var input = document.getElementById("input");


//Var for the function out put
var output = "" ;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
 
}

function generatePassword(){
  if(input.value.length === 0){
      alert("Please enter a numeric value for for password length")
      location.reload();
  }
  else if(input.value < 8){
      alert("Password length must be greater than 8 character")
      location.reload();
  }
  else if(input.value > 128){
    alert("Password legnth must be less than 128 characters")
      location.reload();
  }
  else{
    for(var i = 0; i < input.value; i++){
      randomElementGenFun();
      output += randomElementGenFun()
    }
    return output;
  }
}
 
//Random Element Fuctions
function randomElementGenFun(){
  var randomElement = [singleCheckFun()];
  var randomElementGen = Math.floor(Math.random() * randomElement.length);
  return randomElement[randomElementGen]
}

//functions Random
function alpha(){
  var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var randomAlpha = Math.floor(Math.random() * alpha.length);
    return alpha[randomAlpha]; 
}
function upAlpha(){
  var upAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var randomUpAlpha = Math.floor(Math.random() * upAlpha.length);
    return upAlpha[randomUpAlpha];
}
function numeric(){
  
  var numeric = ["1","2","3","4","5","6","7","8","9"];
  var randomNumeric = Math.floor(Math.random()* numeric.length);
    return numeric[randomNumeric];
}
function character(){
  
  var character = ["!","@","#","$","%","^","&","*","(",")"];
  var randomCharacter = Math.floor(Math.random() * character.length);
    return character[randomCharacter]; 
}

//function check
function singleCheckFun(){
  var alphaCheck = document.getElementById("alphaCheck");
  var upAlphaCheck = document.getElementById("upAlphaCheck");
  var numbersCheck = document.getElementById("numbersCheck");
  var characterCheck = document.getElementById("characterCheck");
  if(alphaCheck.checked === true && upAlphaCheck.checked === false && numbersCheck.checked === false && characterCheck.checked === false){
    randomElement = [alpha()];
    randomElementGen = Math.floor(Math.random() * randomElement.length);
    return randomElement[randomElementGen]
  }
  else if(upAlphaCheck.checked === true && numbersCheck.checked === false && characterCheck.checked === false && alphaCheck.checked === false){
    randomElement = [upAlpha()];
    randomElementGen = Math.floor(Math.random() * randomElement.length);
    return randomElement[randomElementGen];
  }
  else if(numbersCheck.checked === true && characterCheck.checked === false && alphaCheck.checked === false && upAlphaCheck.checked === false){
    randomElement = [numeric()];
    randomElementGen = Math.floor(Math.random() * randomElement.length);
    return randomElement[randomElementGen];
  }
  else if(characterCheck.checked === true && alphaCheck.checked === false && upAlphaCheck.checked === false && numbersCheck.checked === false){
    randomElement = [character()];
    randomElementGen = Math.floor(Math.random() * randomElement.length);
    return randomElement[randomElementGen];
  }
  else if(alphaCheck.checked === true && upAlphaCheck.checked === true && numbersCheck.checked === false && characterCheck.checked === false){
    randomElement = [alpha(), upAlpha()];
    randomElementGen = Math.floor(Math.random() * randomElement.length);
    return randomElement[randomElementGen];
  }
  else if(alphaCheck.checked === true && upAlphaCheck.checked === false && numbersCheck.checked === true && characterCheck.checked === false){
    randomElement = [alpha(), numeric()];
    randomElementGen = Math.floor(Math.random() * randomElement.length);
    return randomElement[randomElementGen]
  }
  else if(upAlphaCheck.checked === false && numbersCheck.checked === false && characterCheck.checked === true && alphaCheck.checked === true){
    randomElement = [alpha(), character()];
    randomElementGen = Math.floor(Math.random() * randomElement.length);
    return randomElement[randomElementGen]
  }
  else if(numbersCheck.checked === true && characterCheck.checked === false && alphaCheck.checked === true && upAlphaCheck.checked === true){
    randomElement = [alpha(), numeric(), upAlpha()];
    randomElementGen = Math.floor(Math.random() * randomElement.length);
    return randomElement[randomElementGen]
  }
  else if(characterCheck.checked === true && alphaCheck.checked === true && upAlphaCheck.checked === true && numbersCheck.checked === false){
    randomElement = [upAlpha(),character(),alpha()];
    randomElementGen = Math.floor(Math.random() * randomElement.length);
    return randomElement[randomElementGen]
  }
  else if(characterCheck.checked === true && alphaCheck.checked === true && upAlphaCheck.checked === true && numbersCheck.checked === false){
    randomElement = [upAlpha(),character(),alpha()];
    randomElementGen = Math.floor(Math.random() * randomElement.length);
    return randomElement[randomElementGen]
  }
  else if(characterCheck.checked === true && alphaCheck.checked === true && upAlphaCheck.checked === false && numbersCheck.checked === true){
    randomElement = [numeric(), character(), alpha()];
    randomElementGen = Math.floor(Math.random() * randomElement.length);
    return randomElement[randomElementGen]
  }
  else if(upAlphaCheck.checked === true && numbersCheck.checked === true && characterCheck.checked === false && alphaCheck.checked === false){
    randomElement = [upAlpha(), numeric()];
    randomElementGen = Math.floor(Math.random() * randomElement.length);
    return randomElement[randomElementGen]
  }
  else if(upAlphaCheck.checked === true && numbersCheck.checked === false && characterCheck.checked === true && alphaCheck.checked === false){
    randomElement = [upAlpha(), character()];
    randomElementGen = Math.floor(Math.random() * randomElement.length);
    return randomElement[randomElementGen]
  }
  else if(upAlphaCheck.checked === true && numbersCheck.checked === true && characterCheck.checked === true && alphaCheck.checked === false){
    randomElement = [upAlpha(), character(), numeric()];
    randomElementGen = Math.floor(Math.random() * randomElement.length);
    return randomElement[randomElementGen]
  }
  else if(upAlphaCheck.checked === true && numbersCheck.checked === true && characterCheck.checked === true && alphaCheck.checked === true){
    randomElement = [upAlpha(), character(), numeric(),alpha()];
    randomElementGen = Math.floor(Math.random() * randomElement.length);
    return randomElement[randomElementGen]
  }
  else if(upAlphaCheck.checked === false && numbersCheck.checked === true && characterCheck.checked === true && alphaCheck.checked === false){
    randomElement = [character(), numeric()];
    randomElementGen = Math.floor(Math.random() * randomElement.length);
    return randomElement[randomElementGen]
  }
  
  else(alphaCheck.checked === false && upAlphaCheck.checked === false && numbersCheck.checked === false && characterCheck.checked === false);{
      alert("Please select at least one box");
      return reload.document()
  }
  
}





