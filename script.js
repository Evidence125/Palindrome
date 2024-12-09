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
       do {
        revText.unshift(splitText[textCount]);
        textCount++;
       } while (revText.length < splitText.length);

let joinedText = revText.join("");
    
       if (joinedText === runText) {
          fieldText.style.display = "block";
          fieldText.innerText = "This is a palindrome!";        
       } else {
          fieldText.style.display = "block";
          fieldText.innerText = "This is not palindrome!";
       }

    console.log(joinedText);
};