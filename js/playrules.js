window.addEventListener("load", init)

let arrayOfRules = ["1. Als je uit het vak gaat stopt de ronde en gaat de beurt over naar de tegenstander", "2. Je moet de bal in twéé slagen slaan", "3. Het spel bestaat uit 3 rondes van elk 5 min", "4. Het startende partij wordt bepaald aan de hand van een willekeurige selector", "5. de bal mag niet uit het veld komen", "6. Het spel mag worden aangepast tot de gewenste moeilijkheidsgraad"]
let arrayIndex = 0
let arrayImg = ["voetUit", "tweeSlagen", "vijfRondes", "willekeurig", "balUit", "moeilijkheidsgraad"]
let arrayAlt = ["Één voet die uit de lijn is", "Een badminton met een bal ervoor", "Drie rondjes met elk een 5 erin", "Een rondje met 10 lichtjes, 5 links en 5 rights"]

let buttonC
let buttonB

let main
let section = document.querySelector('.play-section')
let p
let img

//gives the variables buttonC- and B a value and creates a p element
function init() {
    main = document.querySelector('#field')
    buttonB = document.querySelector("#goBack")
    buttonC = document.querySelector("#continue")
    p = document.createElement("p")
    img = document.createElement("img")
    p.id = 'text'
    updateSection()
    getFromLocalStorage()

    main.addEventListener('click', clickHandler)
}

//update the text after a button is pressed
function updateSection() {
    section.innerHTML = ""

    p.innerText = arrayOfRules[arrayIndex] //betere naam geven feedback
    img.src = `images/${arrayImg[arrayIndex]}.png`
    img.alt = `${arrayAlt[arrayIndex]}`

    section.append(p)
    section.append(img)

    buttonC.addEventListener("click", continueButton) //button beter noemen feedback
    buttonB.addEventListener("click", backButton)
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
    if (arrayIndex === arrayOfRules.length - 1){
        return;
    }
    arrayIndex++
    updateSection()
}

function getFromLocalStorage(){
    body = document.getElementById('body')
    if (localStorage.getItem('backgroundSetting') === null){
        return;
    } body.classList.add('extraClass')
}

function clickHandler(e){
    let target = e.target
    if (target.nodeName === 'BUTTON' && target.id === 'voorlees'){
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