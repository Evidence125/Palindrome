const buttonPal = document.getElementById("buttonPal");
const enterText = document.getElementById("text");
const fieldText = document.getElementById("fieldText")

buttonPal.onclick = checkPal;

function checkPal (){
    let runText;
    let splitText = [];
    let revText = [];
    let textCount = 0;

    runText = enterText.value;
    splitText = runText.split("");
   for (let i = 0; revText.length < splitText.length; i++){
      revText.unshift(splitText[i]);
   }
   
    /* Hashed out to experiment with For loops. 
    
       do {
        revText.unshift(splitText[textCount]);
        textCount++;
       } while (revText.length < splitText.length);
    */    


let joinedText = revText.join("");
joinedText = joinedText.toLocaleLowerCase();// attempting to convert to lowercase
runText = runText.toLocaleLowerCase();// attempting to convert to lowercase
    
       if (joinedText === runText) {
          fieldText.style.display = "block";
          fieldText.innerText = "This is a palindrome!";        
       } else {
          fieldText.style.display = "block";
          fieldText.innerText = "This is not palindrome!";
       }

    console.log(joinedText);
};