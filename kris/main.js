const input = document.getElementById('kris-input');
const container = document.getElementById('kris-container');
const textWrapper = document.querySelector('.kris-text');
const textElement = document.getElementById('kris');

let userHasTyped = false;
let textInterval = null;
const phrases = [
    "Hello there, traveler.",
    "The vessel is humming...",
    "Are you still searching?",
    "Default fallback message."
];
let phraseIndex = 0;

function runVesselEngine() {
    
    input.addEventListener('input', (event) => {
        userHasTyped = true;
        
        if (textInterval) {
            clearInterval(textInterval); 
        }
        const userInput = event.target.value.toLowerCase().trim();
        let response = phrases[phrases.length - 1]; // Default fallback

        // some examples (you can copy and paste the else if statements)
        if (userInput.includes('hello') || userInput.includes('hi')) {
            response = "hi!!!";

        } else if (userInput.includes('yes bro')) {
            response = "yes bro!!!";

        } else if (userInput.includes('banger')) {
            response = "yay!!!";

        } else if (userInput.includes('why')) {
            response = "why not!!!!";

        } else if (userInput.length > 20) {
            response = "too much!!!";

        // if they typed something but it didn't match keywords
        } else if (userInput.length > 0) {
            response = "keep typing!!!";
        
        // if the input is completely empty
        } else {
            response = "type something!!!";
        }

        // smooth fade transition
        if (textElement.innerHTML !== response) {
            textWrapper.style.opacity = 0;
            setTimeout(() => {
                textElement.innerHTML = response;
                textWrapper.style.opacity = 1;
            }, 200); 
        }
    });
}

runVesselEngine();