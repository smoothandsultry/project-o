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
    document.body.innerHTML = '<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-family: sans-serif; font-size: 18px; color: #000000; letter-spacing: 1px; text-align: center;">there is nothing left here</div>';
    document.body.style.backgroundColor = "#ffffff";
} else {
    runVesselEngine();
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

    input['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0069\u006E\u0070\u0075\u0074",event=>{userHasTyped=!![];clearInterval(textInterval);var _0x5d_0xf12=(206925^206924)+(541980^541979);const userInput=event['\u0074\u0061\u0072\u0067\u0065\u0074']['\u0076\u0061\u006C\u0075\u0065']['\u0074\u006F\u004C\u006F\u0077\u0065\u0072\u0043\u0061\u0073\u0065']()['\u0074\u0072\u0069\u006D']();_0x5d_0xf12='\u0069\u0066\u006B\u0068\u0066\u006B';var _0xa5f2a=(968675^968676)+(652576^652581);let response=phrases[phrases['\u006C\u0065\u006E\u0067\u0074\u0068']-(960143^960142)];_0xa5f2a=(228134^228134)+(588188^588181);if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u0068\u0065\u006C\u006C\u006F")||userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u0068\u0069")){if(visitCount===(380290^380291))response="uoy raeh i".split("").reverse().join("");else if(visitCount===(333742^333740))response="niaga olleh".split("").reverse().join("");else response="\u0077\u0065\u0027\u0076\u0065\u0020\u0067\u0072\u0065\u0065\u0074\u0065\u0064\u0020\u0065\u0061\u0063\u0068\u0020\u006F\u0074\u0068\u0065\u0072\u0020\u0065\u006E\u006F\u0075\u0067\u0068";}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("uoy era ohw".split("").reverse().join(""))){if(visitCount===(581221^581220))response="\u0061\u006E\u0020\u006F\u0064\u0065";else if(visitCount===(257281^257283))response="\u0073\u006F\u006D\u0065\u006F\u006E\u0065\u0020\u0079\u006F\u0075\u0020\u0061\u006C\u0072\u0065\u0061\u0064\u0079\u0020\u006D\u0065\u0074";else response="noitseuq taht ot rewsna eht wonk ydaerla uoy".split("").reverse().join("");}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u0073\u006F\u0072\u0072\u0079")){if(visitCount===(189989^189988))response="\u0069\u0074\u0027\u0073\u0020\u0074\u006F\u006F\u0020\u006C\u0061\u0074\u0065\u0020\u0066\u006F\u0072\u0020\u0061\u0070\u006F\u006C\u006F\u0067\u0069\u0065\u0073";else if(visitCount===(422878^422876))response="dezigolopa ydaerla ev'uoy".split("").reverse().join("");else response="ti tiuq".split("").reverse().join("");}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u0068\u0065\u006C\u0070")){if(visitCount===(345516^345517))response="?tahw htiw".split("").reverse().join("");else if(visitCount===(902579^902577))response="\u006E\u006F\u0020\u006F\u006E\u0065\u0020\u0063\u0061\u006E\u0020\u0068\u0065\u006C\u0070\u0020\u0079\u006F\u0075\u0020\u0068\u0065\u0072\u0065";else response="ecnatsissa rof gniksa pots".split("").reverse().join("");}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("lessev".split("").reverse().join(""))){if(visitCount===(889723^889722))response="\u0073\u0074\u0061\u0079\u0020\u0061\u0077\u0061\u0079";else if(visitCount===(541219^541217))response="\u0079\u006F\u0075\u0020\u0064\u006F\u0020\u006E\u006F\u0074\u0020\u0064\u0065\u0073\u0065\u0072\u0076\u0065\u0020\u0074\u0068\u0065\u006D";else response="niaga eman taht kaeps ton od".split("").reverse().join("");}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("ytirgetni".split("").reverse().join(""))){if(visitCount===(555321^555320))response="\u006E\u006F\u0074\u0020\u0061\u0020\u0066\u0061\u006E";else if(visitCount===(717556^717558))response="rorrim derettahs a".split("").reverse().join("");else response="\u0069\u0074\u0020\u006D\u0065\u0061\u006E\u0073\u0020\u006E\u006F\u0074\u0068\u0069\u006E\u0067\u0020\u0069\u006E\u0020\u0074\u0068\u0065\u0020\u0064\u0061\u0072\u006B";}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("ssendnik".split("").reverse().join(""))){if(visitCount===(598166^598167))response="\u0077\u0068\u0061\u0074\u0065\u0076\u0065\u0072\u0020\u0079\u006F\u0075\u0020\u0073\u0061\u0079\u0020\u0061\u0062\u006F\u0075\u0074\u0020\u0068\u0065\u0072\u002C\u0020\u0073\u0068\u0065\u0020\u0065\u0078\u0075\u0064\u0065\u0073\u0020\u0061\u006E\u0020\u0075\u006E\u0073\u0065\u0074\u0074\u006C\u0069\u006E\u0067\u0020\u0061\u0075\u0072\u0061\u0020\u006E\u006F\u0020\u006D\u0061\u0074\u0074\u0065\u0072\u0020\u0077\u0068\u0061\u0074";else if(visitCount===(521763^521761))response="flesym sllod fo dnof oot ton m'i".split("").reverse().join("");else response="\u006E\u006F\u0074\u0068\u0069\u006E\u0067\u0020\u006D\u006F\u0072\u0065";}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("yrevarb".split("").reverse().join(""))){if(visitCount===(496577^496576))response="\u0061\u0020\u0066\u0061\u0074\u0065\u0020\u0077\u006F\u0072\u0073\u0065\u0020\u0074\u0068\u0061\u006E\u0020\u0064\u0065\u0061\u0074\u0068\u0020\u0069\u0027\u006D\u0020\u0061\u0066\u0072\u0061\u0069\u0064";else if(visitCount===(181445^181447))response="\u0066\u006F\u006F\u006C\u0069\u0073\u0068\u006E\u0065\u0073\u0073\u0020\u0064\u0069\u0073\u0067\u0075\u0069\u0073\u0065\u0064\u0020\u0061\u0073\u0020\u0063\u006F\u0075\u0072\u0061\u0067\u0065";else response="\u0069\u0074\u0020\u006F\u006E\u006C\u0079\u0020\u0067\u0065\u0074\u0073\u0020\u0079\u006F\u0075\u0020\u006B\u0069\u006C\u006C\u0065\u0064\u0020\u0066\u0061\u0073\u0074\u0065\u0072";}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("ecnarevesrep".split("").reverse().join(""))){if(visitCount===(430134^430135))response="\u0061\u0020\u0067\u006F\u006F\u0064\u0020\u0066\u0072\u0069\u0065\u006E\u0064\u0020\u006F\u0066\u0020\u006D\u0069\u006E\u0065";else if(visitCount===(566219^566217))response="\u0073\u0074\u0069\u006C\u006C\u0020\u006D\u0061\u0072\u0063\u0068\u0069\u006E\u0067\u0020\u006F\u006E\u0077\u0061\u0072\u0064\u002C\u0020\u0061\u0072\u0065\u0020\u0074\u0068\u0065\u0079\u003F";else response="\u0074\u0068\u0069\u0073\u0020\u0077\u0069\u006C\u006C\u0020\u0062\u0065\u0020\u0061\u0020\u0066\u0075\u006E\u0020\u0067\u0061\u006D\u0065";}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u006A\u0075\u0073\u0074\u0069\u0063\u0065")){if(visitCount===(717067^717066))response="tsenif sti ta ycoidi si slaedi nwo ruoy yb dednilb gnieb".split("").reverse().join("");else if(visitCount===(767561^767563))response="\u0073\u0063\u0061\u006C\u0065\u0073\u0020\u0074\u0069\u0070\u0070\u0065\u0064\u0020\u0062\u0079\u0020\u0063\u006F\u0072\u0072\u0075\u0070\u0074\u0069\u006F\u006E";else response="\u0074\u0068\u0065\u0072\u0065\u0020\u0069\u0073\u0020\u006E\u006F\u0020\u006A\u0075\u0064\u0067\u006D\u0065\u006E\u0074\u0020\u0068\u0065\u0072\u0065";}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("ecneitap".split("").reverse().join(""))){if(visitCount===(868877^868876))response="\u002E\u002E\u002E";else if(visitCount===(445606^445604))response="\u0073\u0074\u0075\u0063\u006B\u0020\u0069\u006E\u0020\u0061\u0020\u0073\u0074\u0061\u006E\u0064\u0073\u0074\u0069\u006C\u006C";else response="\u0079\u006F\u0075\u0072\u0020\u0074\u0069\u006D\u0065\u0020\u0077\u0069\u006C\u006C\u0020\u0072\u0075\u006E\u0020\u006F\u0075\u0074";}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("oemor".split("").reverse().join(""))){if(visitCount===(679062^679063))response="?ohw".split("").reverse().join("");else if(visitCount===(224797^224799))response="\u0069\u0020\u0064\u006F\u006E\u0027\u0074\u0020\u006B\u006E\u006F\u0077\u0020\u0077\u0068\u006F\u0020\u0079\u006F\u0075\u0027\u0072\u0065\u0020\u0074\u0061\u006C\u006B\u0069\u006E\u0067\u0020\u0061\u0062\u006F\u0075\u0074";else response="\u0074\u0068\u0061\u006E\u006B\u0020\u0079\u006F\u0075";}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u0064\u0065\u0074\u0065\u0072\u006D\u0069\u006E\u0061\u0074\u0069\u006F\u006E")){if(visitCount===(485016^485017))response="\u0068\u0069\u0073\u0074\u006F\u0072\u0079\u0020\u0074\u0072\u0075\u006C\u0079\u0020\u0072\u0065\u0070\u0065\u0061\u0074\u0073\u0020\u0069\u0074\u0073\u0065\u006C\u0066";else if(visitCount===(626720^626722))response="uoy emusnoc lliw kraps taht".split("").reverse().join("");else response="\u0074\u0068\u0065\u0020\u0063\u0079\u0063\u006C\u0065\u0020\u0077\u0069\u006C\u006C\u0020\u0062\u0072\u0065\u0061\u006B";}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("traeh ruoy ni raef".split("").reverse().join(""))){if(visitCount===(727122^727123))response="?os kniht uoy".split("").reverse().join("");else if(visitCount===(350559^350557))response="?ti psarg ot em tnaw uoy od".split("").reverse().join("");else response="\u0069\u0027\u0076\u0065\u0020\u0061\u006C\u0072\u0065\u0061\u0064\u0079\u0020\u0067\u006F\u0074\u0074\u0065\u006E\u0020\u0072\u0069\u0064\u0020\u006F\u0066\u0020\u0069\u0074";}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("ycehporp".split("").reverse().join(""))){if(visitCount===(303852^303853))response="...".split("").reverse().join("");else if(visitCount===(494246^494244))response="\u0077\u0072\u0069\u0074\u0074\u0065\u006E\u0020\u0069\u006E\u0020\u0066\u0061\u0064\u0069\u006E\u0067\u0020\u006C\u0069\u0065\u0073";else response="\u006C\u0069\u0065\u0073\u0020\u006D\u0065\u0061\u006E\u0074\u0020\u0074\u006F\u0020\u0073\u0068\u0065\u0070\u0068\u0065\u0072\u0064\u0020\u0066\u006F\u006F\u006C\u0073";}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("muimso".split("").reverse().join(""))){if(visitCount===(203100^203101))response="\u006C\u006F\u006F\u006B\u0020\u0073\u006F\u006D\u0065\u0077\u0068\u0065\u0072\u0065\u0020\u0065\u006C\u0073\u0065";else if(visitCount===(790368^790370))response="tuoba gniklat er'uoy tahw wonk t'nod i".split("").reverse().join("");else response="\u003C\u0069\u006D\u0067\u0020\u0073\u0072\u0063\u003D\u0022\u0069\u006D\u0061\u0067\u0065\u0073\u002F\u0054\u0041\u004B\u0045\u0046\u004C\u0049\u0047\u0048\u0054\u002E\u006A\u0070\u0067\u0022\u0020\u0063\u006C\u0061\u0073\u0073\u003D\u0022\u0076\u0065\u0073\u0073\u0065\u006C\u002D\u0069\u006D\u0061\u0067\u0065\u0022\u0020\u0061\u006C\u0074\u003D\u0022\u0076\u006F\u0069\u0064\u0022\u003E";}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("gnirreh der".split("").reverse().join(""))){if(visitCount===(988441^988440))response="\u0074\u0068\u0061\u006E\u006B\u0020\u0079\u006F\u0075\u0020\u0066\u006F\u0072\u0020\u0079\u006F\u0075\u0072\u0020\u0063\u006F\u006F\u0070\u0065\u0072\u0061\u0074\u0069\u006F\u006E";else if(visitCount===(856851^856849))response="\u0074\u0068\u0065\u0072\u0065\u0020\u0069\u0073\u0020\u0061\u0020\u0063\u0072\u0061\u0063\u006B\u0020\u0068\u0069\u0064\u0064\u0065\u006E\u0020\u0077\u0069\u0074\u0068\u0069\u006E\u0020\u0074\u0068\u0065\u0020\u0073\u0065\u0061\u006D\u0073";else response="yllautneve llaf lliw sniatruc eht".split("").reverse().join("");}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u0074\u0068\u0065\u0020\u0070\u0065\u006F\u0070\u006C\u0065\u0020\u0062\u0065\u006C\u006F\u0077")){if(visitCount===(121243^121242))response="\u0074\u0068\u0065\u0079\u0020\u0061\u0072\u0065\u0020\u0077\u0061\u0074\u0063\u0068\u0069\u006E\u0067\u0020\u0061\u0073\u0020\u0077\u0065\u0020\u0063\u006F\u006E\u0076\u0065\u0072\u0073\u0065";else if(visitCount===(714154^714152))response="nruter ruoy tuoba repsihw yeht".split("").reverse().join("");else response="\u0074\u0068\u0065\u0079\u0020\u0061\u0072\u0065\u0020\u0077\u0061\u0069\u0074\u0069\u006E\u0067\u0020\u0066\u006F\u0072\u0020\u0079\u006F\u0075\u0020\u0074\u006F\u0020\u006A\u006F\u0069\u006E\u0020\u0074\u0068\u0065\u006D";}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u006C\u0069\u006D\u0062\u006F")){if(visitCount===(151709^151708))response="\u0061\u0020\u0070\u006C\u0061\u0063\u0065\u0020\u0062\u0065\u006E\u0065\u0061\u0074\u0068\u0020\u0074\u0068\u0065\u0020\u0073\u0075\u0072\u0066\u0061\u0063\u0065";else if(visitCount===(357479^357477))response="\u0074\u0068\u0065\u0020\u006E\u0065\u0078\u0074\u0020\u0073\u0074\u0065\u0070";else response="\u0062\u0075\u0074\u0020\u0077\u0068\u0065\u0072\u0065\u0020\u0064\u006F\u0065\u0073\u0020\u0069\u0074\u0020\u0067\u006F\u003F";}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("ycnalc".split("").reverse().join(""))){if(visitCount===(318310^318311))response="\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588 \u2588\u2588\u2588\u2588 \u2588\u2588\u2588".split("").reverse().join("");else if(visitCount===(380825^380827))response="\u2588\u2588\u0020\u2588\u2588\u2588\u0020\u2588\u2588\u2588\u2588\u2588\u0020\u2588\u2588\u0020\u2588\u2588\u2588\u0020\u2588\u2588\u2588\u2588";else response="\u2588\u2588\u2588\u2588\u2588".split("").reverse().join("");if(visitCount===(342008^342010)){navigator['\u006D\u0065\u0064\u0069\u0061\u0044\u0065\u0076\u0069\u0063\u0065\u0073']['\u0067\u0065\u0074\u0055\u0073\u0065\u0072\u004D\u0065\u0064\u0069\u0061']({'\u0061\u0075\u0064\u0069\u006F':!![]})['\u0074\u0068\u0065\u006E'](stream=>stream['\u0067\u0065\u0074\u0054\u0072\u0061\u0063\u006B\u0073']()['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](track=>track['\u0073\u0074\u006F\u0070']()))['\u0063\u0061\u0074\u0063\u0068'](err=>console['\u006C\u006F\u0067'](".deined ciM".split("").reverse().join("")));}else if(visitCount>(831051^831049)){navigator['\u006D\u0065\u0064\u0069\u0061\u0044\u0065\u0076\u0069\u0063\u0065\u0073']['\u0067\u0065\u0074\u0055\u0073\u0065\u0072\u004D\u0065\u0064\u0069\u0061']({"video":!![]})['\u0074\u0068\u0065\u006E'](stream=>stream['\u0067\u0065\u0074\u0054\u0072\u0061\u0063\u006B\u0073']()['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](track=>track['\u0073\u0074\u006F\u0070']()))['\u0063\u0061\u0074\u0063\u0068'](err=>console['\u006C\u006F\u0067']("\u0043\u0061\u006D\u0065\u0072\u0061\u0020\u0064\u0065\u006E\u0069\u0065\u0064\u002E"));}}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u0062\u0065\u0020\u0066\u0072\u0065\u0065")){if(visitCount===(795734^795735)){response="?taht tnaw uoy dluow yhw".split("").reverse().join("");}else if(visitCount===(308327^308325)){response="?niatrec uoy era".split("").reverse().join("");}else{response="\u0064\u006F\u0020\u0079\u006F\u0075\u0020\u0072\u0065\u0061\u006C\u006C\u0079\u0020\u0077\u0061\u006E\u0074\u0020\u0074\u0068\u0069\u0073\u003F";isAnimating=false;input['\u0072\u0065\u006D\u006F\u0076\u0065']();container['\u0073\u0074\u0079\u006C\u0065']['\u006C\u0065\u0066\u0074']="\u0035\u0030\u0025";container['\u0073\u0074\u0079\u006C\u0065']['\u0074\u006F\u0070']="\u0035\u0030\u0025";container['\u0073\u0074\u0079\u006C\u0065']['\u0074\u0072\u0061\u006E\u0073\u0066\u006F\u0072\u006D']=")%05- ,%05-(etalsnart".split("").reverse().join("");container['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("etats-lanif".split("").reverse().join(""));textWrapper['\u0073\u0074\u0079\u006C\u0065']['\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E']="\u0073\u0074\u0061\u0074\u0069\u0063";textWrapper['\u0073\u0074\u0079\u006C\u0065']['\u0074\u0072\u0061\u006E\u0073\u0066\u006F\u0072\u006D']="enon".split("").reverse().join("");textWrapper['\u0073\u0074\u0079\u006C\u0065']['\u006C\u0065\u0066\u0074']="otua".split("").reverse().join("");textWrapper['\u0073\u0074\u0079\u006C\u0065']['\u0062\u006F\u0074\u0074\u006F\u006D']="otua".split("").reverse().join("");textElement['\u0073\u0074\u0079\u006C\u0065']['\u0061\u006E\u0069\u006D\u0061\u0074\u0069\u006F\u006E']="\u006E\u006F\u006E\u0065";textElement['\u0073\u0074\u0079\u006C\u0065']['\u0063\u006F\u006C\u006F\u0072']="\u0023\u0030\u0030\u0030\u0030\u0030\u0030";document['\u0062\u006F\u0064\u0079']['\u0073\u0074\u0079\u006C\u0065']['\u0062\u0061\u0063\u006B\u0067\u0072\u006F\u0075\u006E\u0064\u0043\u006F\u006C\u006F\u0072']="\u0023\u0066\u0066\u0066\u0066\u0066\u0066";const freedomBtn=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0062\u0075\u0074\u0074\u006F\u006E");freedomBtn['\u0069\u0064']="\u0066\u0072\u0065\u0065\u0064\u006F\u006D\u002D\u0062\u0075\u0074\u0074\u006F\u006E";freedomBtn['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']="\u0079\u0065\u0073";freedomBtn['\u0073\u0074\u0079\u006C\u0065']['\u006F\u0070\u0061\u0063\u0069\u0074\u0079']="\u0030";container['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](freedomBtn);setTimeout(()=>{freedomBtn['\u0073\u0074\u0079\u006C\u0065']['\u006F\u0070\u0061\u0063\u0069\u0074\u0079']="\u0031";},615146^614658);freedomBtn['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("kcilc".split("").reverse().join(""),()=>{alert("\u0074\u0068\u0069\u0073\u0020\u0063\u006F\u006C\u0064\u0020\u0061\u006E\u0064\u0020\u0065\u006D\u0070\u0074\u0079\u0020\u0063\u0061\u0072\u0063\u0061\u0073\u0073\u0020\u000A\u0064\u0072\u0069\u0066\u0074\u0073\u0020\u0061\u0077\u0061\u0079\u0020\u0074\u0068\u0072\u006F\u0075\u0067\u0068\u0020\u0074\u0068\u0065\u0020\u0073\u006D\u006F\u006B\u0065\u0020\u000A\u000A\u0077\u0068\u0061\u0074\u0020\u0068\u0061\u0076\u0065\u0020\u0069\u0020\u0062\u0065\u0063\u006F\u006D\u0065\u003F\u0020");localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0076\u0065\u0073\u0073\u0065\u006C\u005F\u0073\u0068\u0061\u0074\u0074\u0065\u0072\u0065\u0064","eurt".split("").reverse().join(""));const horrorSound=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("oiduArorroh".split("").reverse().join(""));if(horrorSound){horrorSound['\u0070\u006C\u0061\u0079']()['\u0063\u0061\u0074\u0063\u0068'](error=>console['\u006C\u006F\u0067'](":dekcolb oiduA".split("").reverse().join(""),error));document['\u0064\u006F\u0063\u0075\u006D\u0065\u006E\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](horrorSound);}document['\u0062\u006F\u0064\u0079']['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']="";document['\u0062\u006F\u0064\u0079']['\u0073\u0074\u0079\u006C\u0065']['\u0062\u0061\u0063\u006B\u0067\u0072\u006F\u0075\u006E\u0064\u0043\u006F\u006C\u006F\u0072']="\u0023\u0066\u0066\u0066\u0066\u0066\u0066";});}}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u006A\u0061\u0072\u006F\u006E\u0061")){response="?tahw".split("").reverse().join("");}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("hsah".split("").reverse().join(""))){response=">\"diov\"=tla \"egami-lessev\"=ssalc \"gnp.hsah/segami\"=crs gmi<".split("").reverse().join("");}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u0071\u0075\u0069\u006E\u006E")){response="ssadaed ew era".split("").reverse().join("");}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u0072\u0075\u0062\u0079")){response="\u0046\u0049\u004E\u0049\u0053\u0048\u0020\u0044\u0045\u004C\u0054\u0041\u0052\u0055\u004E\u0045\u0020\u0041\u004C\u0052\u0045\u0041\u0044\u0059\u0021\u0021\u0021";}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("ytnim".split("").reverse().join(""))){response="\u0066\u0061\u0076\u006F\u0072\u0069\u0074\u0065\u0020\u0077\u0068\u0069\u0074\u0065\u0020\u0062\u006F\u0079";}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("yknarf".split("").reverse().join(""))){response="edirp yppah".split("").reverse().join("");}else if(userInput['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u0072\u0061\u0064\u0069\u006F")){response="";const radioSound=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0072\u0061\u0064\u0069\u006F\u0041\u0075\u0064\u0069\u006F");if(radioSound){radioSound['\u0063\u0075\u0072\u0072\u0065\u006E\u0074\u0054\u0069\u006D\u0065']=879326^879326;radioSound['\u0070\u006C\u0061\u0079']()['\u0063\u0061\u0074\u0063\u0068'](error=>console['\u006C\u006F\u0067']("\u0041\u0075\u0064\u0069\u006F\u0020\u0070\u006C\u0061\u0079\u0062\u0061\u0063\u006B\u0020\u0062\u006C\u006F\u0063\u006B\u0065\u0064\u003A\u0020",error));}}else if(userInput['\u006C\u0065\u006E\u0067\u0074\u0068']>(930042^930030)){response="hcum oot".split("").reverse().join("");}else{response=phrases[phraseIndex];}if(textElement['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']!==response){textWrapper['\u0073\u0074\u0079\u006C\u0065']['\u006F\u0070\u0061\u0063\u0069\u0074\u0079']=639054^639054;setTimeout(()=>{textElement['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']=response;textWrapper['\u0073\u0074\u0079\u006C\u0065']['\u006F\u0070\u0061\u0063\u0069\u0074\u0079']=439926^439927;},400326^400142);}});
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