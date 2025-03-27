window.addEventListener("load", init)

let arrayOfRules = ["1. Als je uit het vak gaat stopt de ronde en gaat de beurt over naar de tegenstander", "2. Je moet de bal in twéé slagen", "3. Het spel bestaat uit 3 rondes van elk 5 min", "4. Het startende partij wordt bepaald aan de hand van een willekeurige selector", "5. de bal mag niet uit het veld komen", "6. Het spel mag worden aangepast tot de gewenste moeilijkheidsgraad"]
let arrayIndex = 0
let buttonC
let buttonB


let p
let section = document.querySelector('.play-section')


function init() {
    p = document.createElement("p")
    updateText()



}

function updateText() {
section.innerHTML = ""

    p.innerText = arrayOfRules[arrayIndex]
    section.append(p)

    buttonB = document.querySelector("#goBack")
    buttonC = document.querySelector("#continue")

    buttonC.addEventListener("click", continueButton)
    buttonB.addEventListener("click", backButton)
}

function backButton() {
    if (arrayIndex === 0){
        return;
    }

    arrayIndex--
    console.log(arrayIndex)
    updateText()
}

function continueButton() {
    if (arrayIndex === 5){
        return;
    }
    arrayIndex++
    console.log(arrayIndex)
    updateText()
}