window.addEventListener("load", init)

let arrayOfRules = ["1. Als je uit het vak gaat stopt de ronde en gaat de beurt over naar de tegenstander", "2. Je moet de bal in twéé slagen slaan", "3. Het spel bestaat uit 3 rondes van elk 5 min", "4. Het startende partij wordt bepaald aan de hand van een willekeurige selector", "5. de bal mag niet uit het veld komen", "6. Het spel mag worden aangepast tot de gewenste moeilijkheidsgraad"]
let arrayIndex = 0
let arrayImg = ["voetUit", "tweeSlagen", "vijfRondes", "willekeurig", "balUit", "moeilijkheidsgraad"]
let arrayAlt = ["Één voet die uit de lijn is", "Een badminton met een bal ervoor", "Drie rondjes met elk een 5 erin", "Een rondje met 10 lichtjes, 5 links en 5 rights"]

let buttonC
let buttonB

let section = document.querySelector('.play-section')
let p
let img

//gives the variables buttonC- and B a value and creates a p element
function init() {
    buttonB = document.querySelector("#goBack")
    buttonC = document.querySelector("#continue")

    p = document.createElement("p")
    img = document.createElement("img")
    updateSection()
}

//update the text after a button is pressed
function updateSection() {
    section.innerHTML = ""

    p.innerText = arrayOfRules[arrayIndex]
    img.src = `images/${arrayImg[arrayIndex]}.png`
    img.alt = `${arrayAlt[arrayIndex]}`

    section.append(p)
    section.append(img)

    buttonC.addEventListener("click", continueButton)
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
    if (arrayIndex === arrayOfRules.length - 1) {
        return;
    }

    arrayIndex++
    updateSection()
}