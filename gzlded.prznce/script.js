const lines = [
    "i stand before the doors that i once stood before when i first started my journey as a pokemon trainer.",
    "although it wasn't the exact same, the feeling of dread encapsulates my entire being as i remember what i wanted to forget all those times ago.",
    "i am a victim of bad habits, and one of those bad habits is mistreating my pokemon as tools instead of friends.",
    "i hold no understanding as to how someone like myself is capable of loving them while the stains of my mistakes are ever-present on my hands.",
    "how does one do it? how do they do it? how do i do it?",
    "it's hard, considering everything that i have ever loved in my life has either slipped away or let go.",
    "it's clear that i am the problem, hence i do not feel like i can love someone or something without feeling guilty for doing so.",
    "i feel it, and i know it. this feeling that i feel countless of times whenever i am alone.",
    "there is <shake>fear</shake> in my heart.",
    "but it is part of human nature at the end of the day.",
    "maybe this fear <shake>will</shake> be what helps me push through the future, but even i am not sure of it.",
    "it is hard to risk everything on gut feeling when my whole life has been revolving around meticulous calculations.",
    "just this once, i'll let it <shake>decide</shake> for me, for i am also tired of my own habits overtaking me.",
    "these past few days have been really odd, i usually am so detached, but that does not seem to be case anymore.",
    "lottie gave me a fraction of her heart.",
    "pyrrho told me that there are people worried for me.",
    "jie made me laugh for the first time in so long.",
    "even my sister took the time to have a proper conversation with me.",
    "so why is it so hard to even be myself?",
    "i am nothing more than a mirror, an autonomous cog in a machine that is never used for anything.",
    "but even i want to change that.",
    "i have been trying to, but it's obvious i'm not trying my hardest.",
    "so, this time, i'll try my hardest.",
    ". . .",
    "i wish for caramel to grow better as a pokemon, so perhaps i shall use her as a mirror for myself instead.",
    "i shall treat her with earnest like <shake>how</shake> i want people to treat me.",
    "that shall be my starting point.",
    "<shake>i</shake> am a victim of bad habits, but that doesn't mean people and pokemon around me should be a victim to it as well.",
    "i want the cycle to end here.",
    "you will <shake>heal</shake>, zephariah aurelius.",
    "one step at a time."
];

let currentIndex = 0;
let isTyping = false;
let activeCursor = null;

const redirectUrl = "https://www.youtube.com/watch?v=6S9qxxgI60c"; 

document.body.addEventListener("click", () => {
    if (isTyping) return;

    const output = document.getElementById("output");

    if (currentIndex >= lines.length) {
        window.location.href = redirectUrl;
        return;
    }

    if (activeCursor) {
        activeCursor.remove();
    }

    const lineText = lines[currentIndex];
    const isLastLine = (currentIndex === lines.length - 1);
    currentIndex++;

    const lineElement = document.createElement("div");
    lineElement.className = "line";
    
    const textSpan = document.createElement("span");
    textSpan.className = "text-gold";
    
    activeCursor = document.createElement("span");
    activeCursor.className = "cursor";
    activeCursor.textContent = "█";
    
    lineElement.appendChild(textSpan);
    lineElement.appendChild(activeCursor);
    output.appendChild(lineElement);

    isTyping = true;
    let charIndex = 0;
    let inShakeTag = false;

    const interval = setInterval(() => {
        if (lineText.slice(charIndex).startsWith("<shake>")) {
            inShakeTag = true;
            charIndex += 7;
        } else if (lineText.slice(charIndex).startsWith("</shake>")) {
            inShakeTag = false;
            charIndex += 8;
        }

        if (charIndex < lineText.length) {
            const char = lineText[charIndex];

            if (inShakeTag) {
                const charSpan = document.createElement("span");
                if (char === " ") {
                    charSpan.className = "shaky-char space";
                    charSpan.innerHTML = "&nbsp;";
                } else {
                    charSpan.className = "shaky-char";
                    charSpan.textContent = char;
                    charSpan.style.animationDelay = `${(Math.random() * -0.2).toFixed(2)}s`;
                    charSpan.style.animationDuration = `${(0.08 + Math.random() * 0.08).toFixed(2)}s`;
                }
                textSpan.appendChild(charSpan);
            } else {
                textSpan.appendChild(document.createTextNode(char));
            }

            charIndex++;
        }

        if (charIndex >= lineText.length) {
            clearInterval(interval);
            isTyping = false;
            window.scrollTo(0, document.body.scrollHeight);

            if (isLastLine) {
                setTimeout(() => {
                    window.location.href = redirectUrl;
                }, 1500);
            }
        }
    }, 50);
});