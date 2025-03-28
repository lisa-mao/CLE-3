window.addEventListener("load", init)

let arrayOfRules = ["1. Als je uit het vak gaat stopt de ronde en gaat de beurt over naar de tegenstander", "2. Je moet de bal in twéé slagen", "3. Het spel bestaat uit 3 rondes van elk 5 min", "4. Het startende partij wordt bepaald aan de hand van een willekeurige selector", "5. de bal mag niet uit het veld komen", "6. Het spel mag worden aangepast tot de gewenste moeilijkheidsgraad"]
let arrayIndex = 0
let arrayImg = " "

let buttonC
let buttonB

let section = document.querySelector('.play-section')
let p

//gives the variables buttonC- and B a value and creates a p element
function init() {
    buttonB = document.querySelector("#goBack")
    buttonC = document.querySelector("#continue")

    p = document.createElement("p")
    updateText()
}

//update the text after a button is pressed
function updateText() {
    section.innerHTML = ""

    p.innerText = arrayOfRules[arrayIndex]
    section.append(p)

    buttonC.addEventListener("click", continueButton)
    buttonB.addEventListener("click", backButton)
}

//changes the number of the position(with arrayIndex) of an array item with minus
function backButton() {
    if (arrayIndex === 0) {
        return;
    }

    arrayIndex--
    updateText()
}

//changes the number of the position(with arrayIndex) of an array item with plus
function continueButton() {
    if (arrayIndex === arrayOfRules.length-1){
        return;
    }

    arrayIndex++
    updateText()
}