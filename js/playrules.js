window.addEventListener("load", init)

const arrayOfRules = ["1. Als je uit het vak gaat stopt de ronde en gaat de beurt over naar de tegenstander", "2. Je moet de bal in twéé slagen slaan", "3. Het spel bestaat uit 3 rondes van elk 5 min", "4. Het startende partij wordt bepaald aan de hand van een willekeurige selector", "5. de bal mag niet uit het veld komen", "6. Het spel mag worden aangepast tot de gewenste moeilijkheidsgraad"];
let arrayIndex = 0
const arrayImg = ["voetUit", "tweeSlagen", "vijfRondes", "willekeurig", "balUit", "moeilijkheidsgraad"]
const arrayAlt = ["Één voet die uit de lijn is", "Een badminton met een bal ervoor", "Drie rondjes met elk een 5 erin", "Een rondje met 10 lichtjes, 5 links en 5 rights"]

let buttonC
let buttonB

let main
const section = document.querySelector('.play-section')
let p
let img

document.addEventListener("keyup", (event) => {

    if (event.keyCode === 0x25 || buttonB.addEventListener("click", backButton)) {
        if (arrayIndex === 0) {
            return;
        }
        arrayIndex--
        updateSection()
    }
})
document.addEventListener("keyup", (event) => {

    if (event.keyCode === 0x27 || buttonC.addEventListener("click", continueButton)) {
        if (arrayIndex === arrayOfRules.length - 1) {
            return;
        }
        arrayIndex++
        updateSection()
    }
})


//gives the variables buttonC- and B a value and creates a p element
function init() {
    main = document.querySelector('#field')
    buttonB = document.querySelector(".goBack")
    buttonC = document.querySelector(".continue")

    p = document.createElement("p")
    img = document.createElement("img")
    p.id = 'text'
    updateSection()
    getFromLocalStorage()

    main.addEventListener('click', clickHandler)
}


//update the text after a button is pressed
function updateSection() {
    section.innerHTML = ""  // Clear previous content

    p.innerText = arrayOfRules[arrayIndex]
    img.src = `images/${arrayImg[arrayIndex]}.png`
    img.alt = arrayAlt[arrayIndex]

    section.append(p)
    section.append(img)

    // Add event listeners for buttons


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
        return;
    }
    body.classList.add('extraClass')
}

function clickHandler(e) {
    let target = e.target
    if (target.nodeName === 'BUTTON' && target.id === 'voorlees') {
        let text = document.getElementById('text')
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
