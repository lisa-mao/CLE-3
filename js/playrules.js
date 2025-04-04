window.addEventListener("load", init)

let arrayOfRules = ["1. Het spel is 1 op 1", "2. De eerste speler wordt willekeurig gekozen door een systeem", "3. Elk speler krijgt de kleur oranje of blauw aangewezen", "4. Het spel bestaat uit 3 rondes van 5 minuten", "5. Als een speler 3 punten heeft, gaat het spel naar de volgende ronde", "6. Bij scoren wordt de bal gegeven aan de tegenstander door de coach om te serveren",
    "7. Er is altijd een coach aanwezig die checkt voor overtredingen en het spel reset", "8. De speler moet binnen het speelveld blijven", "9. De speler moet binnen twee slagen de bal aan de kant van de tegenstander krijgen", "10. Wanneer de speler niet de bal in twee slagen de bal aan de kant van de tegenstander krijgt, krijgt de tegenstander een punt en wordt de beurt omgewisseld"]
let arrayIndex = 0
const arrayImg = ["2speler", "selectors", "kleur", "rond", "puntenRond", "bijPunten", "coaches", "buitenVelden", "slag", "mis"]
const arrayImgDarkmode = ["2spelersBlack", "selectorBlack", "kleurenBlack", "rondesBlack", "puntenRondesBlack", "bijPuntBlack", "coachBlack", "buitenVeldBlack", "slagenBlack", "missenBlack"]
const arrayAlt = ["twee spelers voor het spel", "Een rondje met 10 lichtjes, 5 links en 5 rechts", "2 mensen met de kleur oranje en blauw", "1 uit de drie en drie grijzen bollen met elk 5 minuten eronder", "2 uit de 3 rondes 1 bol gekleured met nummer 3 erin de rest grijs", "coach pakt de bal en geeft hem aan de tegenstander", "coach", "been stapt buiten de lijn met een rooie kruis erbij", "racket raakt de bal binnen twee slagen", "racket mist de bal binnen twee slagen"]

let buttonC
let buttonB
let buttonContinueMobile
let buttonBackMobile

const downButtons = document.querySelector(".mobileButtons")

let main
const section = document.querySelector('.play-section')
let p
let img
let check

//gives the variables buttonC- and B a value and creates a p element
function init() {
    main = document.querySelector('#field')
    buttonB = document.querySelector("#goBack")
    buttonC = document.querySelector("#continue")

    //changes button accordingly to the width of the screen
    if (detectMOB()) {
        buttonC.innerHTML = ">"
        buttonB.innerHTML = "<"
    }

    console.log(buttonB)
    p = document.createElement("p")
    img = document.createElement("img")
    img.classList.add("playrules-img")
    p.id = 'text'
    getFromLocalStorage()
    updateSection()

    main.addEventListener('click', clickHandler)

    buttonC.addEventListener("click", continueButton)
    buttonB.addEventListener("click", backButton)

    //makes arrowkeys functional for continue & back
    document.addEventListener("keyup", (event) => {

        if (event.keyCode === 0x25) {
            if (arrayIndex === 0) {
                return
            }
            arrayIndex--
            updateSection()
        }
    })
    document.addEventListener("keyup", (event) => {

        if (event.keyCode === 0x27) {
            if (arrayIndex === arrayOfRules.length - 1) {
                return
            }
            arrayIndex++
            updateSection()
        }
    })
}

//update the text after a button is pressed
function updateSection() {
    section.innerHTML = ""  // Clear previous content
    if (check === true){
        p.innerText = arrayOfRules[arrayIndex]
        img.src = `images/${arrayImgDarkmode[arrayIndex]}.png`
        img.alt = arrayAlt[arrayIndex]
        section.append(p)
        section.append(img)
        return
    } else {
        p.innerText = arrayOfRules[arrayIndex]
        img.src = `images/${arrayImg[arrayIndex]}.png`
        img.alt = arrayAlt[arrayIndex]

        section.append(p)
        section.append(img)
    }
}
//changes button appearance based off of screenwidth and height(mobile or not)
function detectMOB() {
    return ( ( window.innerWidth <= 481 ) && (window.innerHeight <= 824));
}

//changes the number of the position(with arrayIndex) of an array item with minus
function backButton() {
    if (arrayIndex === 0) {
        return;
    }

    arrayIndex--
    updateSection()
}

//changes the number of the position(with arrayIndex) of an array item with plus
function continueButton() {
    if (arrayIndex === arrayOfRules.length - 1) {
        return;
    }
    arrayIndex++
    updateSection()
}

//magnifier
const SCALE = 1.3; //magnification
const SIZE = 150; // diameter
const LENSE_OFFSET_X = SIZE / 10.2;
const LENSE_OFFSET_Y = SIZE / 10.2;


document.documentElement.style.setProperty("--scale", SCALE);
document.documentElement.style.setProperty("--size", SIZE + "px");

//create magnifying glass (lense)
const handle = document.createElement("div");
handle.classList.add("handle");

const magnifyingGlass = document.createElement("div");
magnifyingGlass.classList.add("magnifying-glass");
magnifyingGlass.style.top = LENSE_OFFSET_Y + "px";
magnifyingGlass.style.left = LENSE_OFFSET_X + "px";

handle.append(magnifyingGlass);

const magnifyButton = document.getElementById("magnify");

const addMagnifyingGlass = () => {
    const bodyClone = document.body.cloneNode(true);
    bodyClone.classList.add("body-clone");
    bodyClone.style.top = "0px";
    bodyClone.style.left = "0px";
    magnifyingGlass.append(bodyClone);
    document.body.append(handle);
};

magnifyButton.addEventListener("click", addMagnifyingGlass);

const moveMagnifyingGlass = (event) => {
    let pointerX = event.pageX;
    let pointerY = event.pageY;
    //move magnifying glass with cursor
    handle.style.left = pointerX - SIZE / 1.7 + "px";
    handle.style.top = pointerY - SIZE / 1.7 + "px";
    if (magnifyingGlass.children[0]) {
        //align magnified document
        let offsetX = (SIZE * Math.pow(SCALE, 2)) / 1.5 - pointerX * SCALE;
        let offsetY = (SIZE * Math.pow(SCALE, 2)) / 1.2 - pointerY * SCALE;
        magnifyingGlass.children[0].style.left = offsetX + "px";
        magnifyingGlass.children[0].style.top = offsetY + "px";
    }
};

document.addEventListener("pointermove", moveMagnifyingGlass);

const removeMagnifiyingGlass = (event) => {
    magnifyingGlass.children[0].remove();
    handle.remove();
};

magnifyingGlass.addEventListener("dblclick", removeMagnifiyingGlass);


function getFromLocalStorage() {
    body = document.getElementById('body')
    if (localStorage.getItem('backgroundSetting') === null) {
        check = true
        return;
    }
    body.classList.add('extraClass')
    check = false
}

function clickHandler(e) {
    let target = e.target
    if (target.nodeName === 'BUTTON' && target.id === 'voorlees') {
        let text = document.getElementById('text')
        textToSpeech(text.innerHTML)
    }
    if (target.nodeName === 'BUTTON' && target.id === 'magnify') {
        let text = document.getElementById('magtext')
        textToSpeech(text.innerHTML)
    }
}

function textToSpeech(text) {

    console.log(text);
    let utterance = new SpeechSynthesisUtterance(text);

    if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.addEventListener('voiceschanged', () => {
            const voices = speechSynthesis.getVoices();
            utterance.voice = voices[60];
            speechSynthesis.speak(utterance);
        });
    } else {
        const voices = speechSynthesis.getVoices();
        utterance.voice = voices[60];
        speechSynthesis.speak(utterance);
    }
}