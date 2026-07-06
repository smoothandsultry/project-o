// find your answers elsewhere

// if you force it

// the answers will not find you

// if you keep going down this path

// then my doors will be closed forevermore

// elements
const textWrapper = document.querySelector('.vessel-text');
const textElement = document.getElementById('vessel');
const input = document.getElementById('infinity-input');
const container = document.getElementById('infinity-container');

if (localStorage.getItem('vessel_shattered') === 'true') {
    document.body.innerHTML = '<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-family: sans-serif; font-size: 18px; color: #000000; letter-spacing: 1px; text-align: center;">did you enjoy the show?</div>';
    document.body.style.backgroundColor = "#ffffff";
} else {
    // runVesselEngine();
    document.body.innerHTML = '<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-family: sans-serif; font-size: 18px; color: #611580; letter-spacing: 1px; text-align: center;">...</div>';
    document.body.style.backgroundColor = "#ffffff";
}

function runVesselEngine() {
    const firstTimePhrases = [
        "how did you find this place?",
        "you shouldn't even be here",
        "i hope you realize that",
        "you are not safe here",
        "what do you want from me?"
    ];

    const returningPhrases = [
        "you came back",
        "do you not realize the consequences of your actions?",
        "you will know soon enough",
        "i look forward to your demise",
        "why do you keep looking?"
    ];

    const thirdTimePhrases = [
        "persistent, aren't we?",
        "three times you've knocked on this door",
        "are you looking for something that isn't here?",
        "your curiosity will be your undoing",
        "go ahead"
    ];

    // visit counter
    let visitCount = parseInt(localStorage.getItem('vessel_visit_count')) || 0;

    let phrases;
    if (visitCount === 0) {
        phrases = firstTimePhrases;
    } else if (visitCount === 1) {
        phrases = returningPhrases;
    } else {
        phrases = thirdTimePhrases;
    }

    let phraseIndex = 0;
    let textInterval; 
    let userHasTyped = false;

    if (visitCount >= 3) {
        phraseIndex = phrases.length - 1;
        textElement.innerHTML = phrases[phraseIndex];
        textWrapper.classList.remove('hidden'); 
        input.classList.remove('hidden');

        localStorage.setItem('vessel_visit_count', visitCount + 1);
        
        setTimeout(() => {
            document.body.style.backgroundColor = "#ffffff";
            textElement.style.color = "#000000";
            isAnimating = true;
            animate();
        }, 50);
        
        const unlockAudio = () => {
            document.getElementById('bellAudio').play()
            .catch(error => console.log("Autoplay blocked."));
            document.removeEventListener('click', unlockAudio);
            document.removeEventListener('keydown', unlockAudio);
        };
        
        document.addEventListener('click', unlockAudio);
        document.addEventListener('keydown', unlockAudio);
    } else {
        textElement.innerHTML = phrases[phraseIndex];
        setTimeout(() => {
            if (!userHasTyped) {
                textWrapper.classList.remove('hidden'); 
                startTextSequence();
            }
        }, 15000);
    }

    function startTextSequence() {
        textInterval = setInterval(() => {
            if (phraseIndex >= phrases.length - 1) {
                clearInterval(textInterval);
                triggerTextBoxManifestation();
                return;
            }

            textWrapper.classList.add('hidden');

            setTimeout(() => {
                if (!userHasTyped) {
                    phraseIndex++;
                    textElement.innerHTML = phrases[phraseIndex];
                    
                    setTimeout(() => {
                        if (!userHasTyped) {
                            textWrapper.classList.remove('hidden');
                        }
                    }, 30000);
                }
            }, 1500); 

        }, 21500); 
    }

    function triggerTextBoxManifestation() {
        if (isAnimating) return; 

        visitCount++;
        localStorage.setItem('vessel_visit_count', visitCount);

        input.classList.remove('hidden');
        isAnimating = true;
        animate();

        document.getElementById('bellAudio').play()
        .catch(error => console.log("Autoplay blocked."));

        document.body.style.backgroundColor = "#ffffff";
        textElement.style.color = "#000000";
    }

    // input listener
    input.addEventListener('input', (event) => {
        userHasTyped = true;
        clearInterval(textInterval); 
        
        const userInput = event.target.value.toLowerCase().trim();
        let response = phrases[phrases.length - 1]; 

        if (userInput.includes('hello') || userInput.includes('hi')) {
            if (visitCount === 1) response = "i hear you";
            else if (visitCount === 2) response = "hello again";
            else response = "we've greeted each other enough";
        
        } else if (userInput.includes('who are you')) {
            if (visitCount === 1) response = "an ode";
            else if (visitCount === 2) response = "someone you already met";
            else response = "you already know the answer to that question";
        
        } else if (userInput.includes('sorry')) {
            if (visitCount === 1) response = "it's too late for apologies";
            else if (visitCount === 2) response = "you've already apologized";
            else response = "quit it";
        
        } else if (userInput.includes('help')) {
            if (visitCount === 1) response = "with what?";
            else if (visitCount === 2) response = "no one can help you here";
            else response = "stop asking for assistance";
        
        } else if (userInput.includes('vessel')) {
            if (visitCount === 1) response = "stay away";
            else if (visitCount === 2) response = "you do not deserve them";
            else response = "do not speak that name again";
        
        } else if (userInput.includes('integrity')) {
            if (visitCount === 1) response = "not a fan";
            else if (visitCount === 2) response = "a shattered mirror";
            else response = "it means nothing in the dark";
        
        } else if (userInput.includes('kindness')) {
            if (visitCount === 1) response = "whatever you say about her, she exudes an unsettling aura no matter what";
            else if (visitCount === 2) response = "i'm not too fond of dolls myself";
            else response = "nothing more";
        
        } else if (userInput.includes('bravery')) {
            if (visitCount === 1) response = "a fate worse than death i'm afraid";
            else if (visitCount === 2) response = "foolishness disguised as courage";
            else response = "it only gets you killed faster";
        
        } else if (userInput.includes('perseverance')) {
            if (visitCount === 1) response = "a good friend of mine";
            else if (visitCount === 2) response = "still marching onward, are they?";
            else response = "this will be a fun game";
        
        } else if (userInput.includes('justice')) {
            if (visitCount === 1) response = "being blinded by your own ideals is idiocy at its finest";
            else if (visitCount === 2) response = "scales tipped by corruption";
            else response = "there is no judgment here";
        
        } else if (userInput.includes('patience')) {
            if (visitCount === 1) response = "...";
            else if (visitCount === 2) response = "stuck in a standstill";
            else response = "your time will run out";
        
        } else if (userInput.includes('romeo')) {
            if (visitCount === 1) response = "who?";
            else if (visitCount === 2) response = "i don't know who you're talking about";
            else response = "you don't know what's coming";
        
        } else if (userInput.includes('determination')) {
            if (visitCount === 1) response = "history truly repeats itself";
            else if (visitCount === 2) response = "that spark will consume you";
            else response = "the cycle will break";
        
        } else if (userInput.includes('fear in your heart')) {
            if (visitCount === 1) response = "you think so?";
            else if (visitCount === 2) response = "do you want me to grasp it?";
            else response = "i've already gotten rid of it";
        
        } else if (userInput.includes('prophecy')) {
            if (visitCount === 1) response = "...";
            else if (visitCount === 2) response = "written in fading lies";
            else response = "lies meant to shepherd fools";
        
        } else if (userInput.includes('osmium')) {
            if (visitCount === 1) response = "look somewhere else";
            else if (visitCount === 2) response = "i don't know what you're talking about";
            else response = '<img src="images/TAKEFLIGHT.jpg" class="vessel-image" alt="void">';
        
        } else if (userInput.includes('red herring')) {
            if (visitCount === 1) response = "thank you for your cooperation";
            else if (visitCount === 2) response = "there is a crack hidden within the seams";
            else response = "the curtains will fall eventually";
        
        } else if (userInput.includes('the people below')) {
            if (visitCount === 1) response = "they are watching as we converse";
            else if (visitCount === 2) response = "they whisper about your return";
            else response = "they are waiting for you to join them";
        
        } else if (userInput.includes('limbo')) {
            if (visitCount === 1) response = "a place beneath the surface";
            else if (visitCount === 2) response = "the next step";
            else response = "but where does it go?";

        } else if (userInput.includes('ode')) {
            response = "that's me";

        } else if (userInput.includes('death')) {
            response = "not a problem";

        } else if (userInput.includes('close your eyes')) {
            response = "you're not supposed to know that";

        } else if (userInput.includes('my eyes are closed')) {
            response = "then the next time you perish, you will be granted a gift";

        } else if (userInput.includes('where are you')) {
            response = "above";

        } else if (userInput.includes('can you hear me')) {
            response = "i hear you";

        } else if (userInput.includes('monroe')) {
            response = "murderer";

        } else if (userInput.includes('mint')) {
            response = "pawn";

        } else if (userInput.includes('valk')) {
            response = "fool";

        } else if (userInput.includes('midas')) {
            response = "assimilated";

        } else if (userInput.includes('the world unseen')) {
            response = "you aren't supposed to know that";

        } else if (userInput.includes('stuck in between')) {
            response = "you aren't supposed to know that";

        } else if (userInput.includes('grant me salvation')) {
            response = "chant my name three times into the box of text on stage";

        } else if (userInput.includes('clancy')) {
            if (visitCount === 1) response = "███ ████ ███ █████ ████ ████";
            else if (visitCount === 2) response = "██ ███ █████ ██ ███ ████";
            else response = "█████";

            if (visitCount === 2) {
                navigator.mediaDevices.getUserMedia({ audio: true })
                    .then(stream => stream.getTracks().forEach(track => track.stop()))
                    .catch(err => console.log("Mic denied."));
            } else if (visitCount > 2) {
                navigator.mediaDevices.getUserMedia({ video: true })
                    .then(stream => stream.getTracks().forEach(track => track.stop()))
                    .catch(err => console.log("Camera denied."));
            }

        } else if (userInput.includes('be free')) {
            if (visitCount === 1) {
                response = "why would you want that?";
            } else if (visitCount === 2) {
                response = "are you certain?";
            } else {
                response = "do you really want this?";
                
                isAnimating = false; 
                input.remove(); 
                
                container.style.left = "50%";
                container.style.top = "50%";
                container.style.transform = "translate(-50%, -50%)";
                container.classList.add('final-state');
                
                textWrapper.style.position = "static";
                textWrapper.style.transform = "none";
                textWrapper.style.left = "auto";
                textWrapper.style.bottom = "auto";
                
                textElement.style.animation = "none"; 
                textElement.style.color = "#000000";   
                document.body.style.backgroundColor = "#ffffff";

                const freedomBtn = document.createElement('button');
                freedomBtn.id = 'freedom-button';
                freedomBtn.textContent = 'yes';
                freedomBtn.style.opacity = '0';
                container.appendChild(freedomBtn);

                setTimeout(() => {
                    freedomBtn.style.opacity = '1';
                }, 1000); 

                freedomBtn.addEventListener('click', () => {
                    alert("this cold and empty carcass \ndrifts away through the smoke \n\nwhat have i become? ");
                    
                    localStorage.setItem('vessel_shattered', 'true');
                    
                    const horrorSound = document.getElementById('horrorAudio');
                    if (horrorSound) {
                        horrorSound.play().catch(error => console.log("Audio blocked:", error));
                        document.documentElement.appendChild(horrorSound);
                    }
                    
                    document.body.innerHTML = "";
                    document.body.style.backgroundColor = "#ffffff";
                });
            }

        } else if (userInput.includes('jarona')) {
            response = "what?";
        } else if (userInput.includes('hash')) {
            response = '<img src="images/hash.png" class="vessel-image" alt="void">';
        } else if (userInput.includes('quinn')) {
            response = "are we deadass";
        } else if (userInput.includes('ruby')) {
            response = "FINISH DELTARUNE ALREADY!!!";
        } else if (userInput.includes('minty')) {
            response = "favorite white boy";
        } else if (userInput.includes('franky')) {
            response = "happy pride";
        } else if (userInput.includes('radio')) {
            response = "";
            const radioSound = document.getElementById('radioAudio');
            if (radioSound) {
                radioSound.currentTime = 0; 
                radioSound.play()
                .catch(error => console.log("Audio playback blocked: ", error));
            }
        } else if (userInput.length > 20) {
            response = "too much";
        } else {
            response = phrases[phraseIndex];
        }

        if (textElement.innerHTML !== response) {
            textWrapper.style.opacity = 0;
            setTimeout(() => {
                textElement.innerHTML = response;
                textWrapper.style.opacity = 1;
            }, 200); 
        }
    });
}

// animation loops
const radius = 200;      
const speed = 0.005;     
let tx = Math.random() * 1000;
let ty = Math.random() * 1000;
let isAnimating = false;

function animate() {
    if (!isAnimating) return;

    const x = Math.sin(tx) * Math.cos(tx * 0.6) * radius;
    const y = Math.sin(ty) * Math.cos(ty * 0.7) * radius;

    container.style.left = `calc(50% + ${x}px)`;
    container.style.top = `calc(50% + ${y}px)`;

    tx += speed;
    ty += speed * 0.85; 

    requestAnimationFrame(animate);
}

document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('keydown', (event) => {
    if (
        event.key === 'F12' ||
        (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J')) ||
        (event.ctrlKey && event.key === 'u')
    ) {
        event.preventDefault();
    }
});

setInterval(() => {
    function infiniteLoop() {
        debugger;
        infiniteLoop();
    }
    try {
        infiniteLoop();
    } catch(err) {}
}, 100);