let changeOneClass = document.getElementById("one-section");
let changeTwoClass = document.getElementById("two-section");
let changeThreeClass = document.getElementById("three-section");
let changeFourClass = document.getElementById("four-section");
let changeFiveClass = document.getElementById("five-section");
let changeSixClass = document.getElementById("six-section");
let changeSevenClass = document.getElementById("seven-section");

let activateOne = document.getElementById("one");
let activateTwo = document.getElementById("two");
let activateThree = document.getElementById("three");
let activateFour = document.getElementById("four");
let activateFive = document.getElementById("five");
let activateSix = document.getElementById("six");
let activateSeven = document.getElementById("seven");


let oneEnabled = false;
let twoEnabled = false;
let threeEnabled = false;
let fourEnabled = false;
let fiveEnabled = false;
let sixEnabled = false;
let sevenEnabled = false;

document.getElementById("one").onclick = () => {
    if (oneEnabled === false) {
        twoEnabled = true;
        threeEnabled = false;
        fourEnabled = false;
        fiveEnabled = false;
        sixEnabled = false;
        sevenEnabled = false;
    } else {
        oneEnabled = false;
        twoEnabled = false;
        threeEnabled = false;
        fourEnabled = false;
        fiveEnabled = false;
        sixEnabled = false;
        sevenEnabled = false;
    }
    if (oneEnabled === false) {
        changeOneClass.classList.replace("one-off", "one-on")
        changeTwoClass.classList.replace("one-on", "one-off")
        changeThreeClass.classList.replace("one-on", "one-off")
        changeFourClass.classList.replace("one-on", "one-off")
        changeFiveClass.classList.replace("one-on", "one-off")
        changeSixClass.classList.replace("one-on", "one-off")
        changeSevenClass.classList.replace("one-on", "one-off")
    }
    if (oneEnabled === true) {
        changeOneClass.classList.replace("one-off", "one-on")
        changeTwoClass.classList.replace("one-on", "one-off")
        changeThreeClass.classList.replace("one-on", "one-off")
        changeFourClass.classList.replace("one-on", "one-off")
        changeFiveClass.classList.replace("one-on", "one-off")
        changeSixClass.classList.replace("one-on", "one-off")
        changeSevenClass.classList.replace("one-on", "one-off")

        //bulma styleclass
        activateOne.classList.add("is-active")
        activateTwo.classList.remove("is-active")
        activateThree.classList.remove("is-active")
        activateFour.classList.remove("is-active")
        activateFive.classList.remove("is-active")
        activateSix.classList.remove("is-active")
        activateSeven.classList.remove("is-active")
    }
}

document.getElementById("two").onclick = () => {
    if (twoEnabled === false) {
        oneEnabled = false;
        twoEnabled = true;
        threeEnabled = false;
        fourEnabled = false;
        fiveEnabled = false;
        sixEnabled = false;
        sevenEnabled = false;
    } else {
        oneEnabled = false;
        twoEnabled = false;
        threeEnabled = false;
        fourEnabled = false;
        fiveEnabled = false;
        sixEnabled = false;
        sevenEnabled = false;
    }
    if (twoEnabled === false) {
        changeOneClass.classList.replace("one-off", "one-on")
        changeTwoClass.classList.replace("one-on", "one-off")
        changeThreeClass.classList.replace("one-on", "one-off")
        changeFourClass.classList.replace("one-on", "one-off")
        changeFiveClass.classList.replace("one-on", "one-off")
        changeSixClass.classList.replace("one-on", "one-off")
        changeSevenClass.classList.replace("one-on", "one-off")
        activateOne.classList.add("is-active")
        activateTwo.classList.remove("is-active")
        activateThree.classList.remove("is-active")
        activateFour.classList.remove("is-active")
        activateFive.classList.remove("is-active")
        activateSix.classList.remove("is-active")
        activateSeven.classList.remove("is-active")
    }
    if (lunchEnabled === true) {
        changeOneClass.classList.replace("one-off", "one-on")
        changeTwoClass.classList.replace("one-on", "one-off")
        changeThreeClass.classList.replace("one-on", "one-off")
        changeFourClass.classList.replace("one-on", "one-off")
        changeFiveClass.classList.replace("one-on", "one-off")
        changeSixClass.classList.replace("one-on", "one-off")
        changeSevenClass.classList.replace("one-on", "one-off")
        activateOne.classList.add("is-active")
        activateTwo.classList.remove("is-active")
        activateThree.classList.remove("is-active")
        activateFour.classList.remove("is-active")
        activateFive.classList.remove("is-active")
        activateSix.classList.remove("is-active")
        activateSeven.classList.remove("is-active")
    }
}

document.getElementById("three").onclick = () => {
    if (threeEnabled === false) {
        oneEnabled = false;
        twoEnabled = true;
        threeEnabled = true;
        fourEnabled = false;
        fiveEnabled = false;
        sixEnabled = false;
        sevenEnabled = false;
    } else {
        oneEnabled = false;
        twoEnabled = false;
        threeEnabled = false;
        fourEnabled = false;
        fiveEnabled = false;
        sixEnabled = false;
        sevenEnabled = false;
    }
    if (threeEnabled === false) {
        changeOneClass.classList.replace("one-off", "one-on")
        changeTwoClass.classList.replace("one-on", "one-off")
        changeThreeClass.classList.replace("one-on", "one-off")
        changeFourClass.classList.replace("one-on", "one-off")
        changeFiveClass.classList.replace("one-on", "one-off")
        changeSixClass.classList.replace("one-on", "one-off")
        changeSevenClass.classList.replace("one-on", "one-off")
        activateOne.classList.add("is-active")
        activateTwo.classList.remove("is-active")
        activateThree.classList.remove("is-active")
        activateFour.classList.remove("is-active")
        activateFive.classList.remove("is-active")
        activateSix.classList.remove("is-active")
        activateSeven.classList.remove("is-active")
    }
    if (threeEnabled === true) {
        changeOneClass.classList.replace("one-off", "one-on")
        changeTwoClass.classList.replace("one-on", "one-off")
        changeThreeClass.classList.replace("one-on", "one-off")
        changeFourClass.classList.replace("one-on", "one-off")
        changeFiveClass.classList.replace("one-on", "one-off")
        changeSixClass.classList.replace("one-on", "one-off")
        changeSevenClass.classList.replace("one-on", "one-off")
        activateOne.classList.add("is-active")
        activateTwo.classList.remove("is-active")
        activateThree.classList.remove("is-active")
        activateFour.classList.remove("is-active")
        activateFive.classList.remove("is-active")
        activateSix.classList.remove("is-active")
        activateSeven.classList.remove("is-active")
    }
}

document.getElementById("four").onclick = () => {
    if (fourEnabled === false) {
        oneEnabled = false;
        twoEnabled = false;
        threeEnabled = false;
        fourEnabled = true;
        fiveEnabled = false;
        sixEnabled = false;
        sevenEnabled = false;
    } else {
        oneEnabled = false;
        twoEnabled = false;
        threeEnabled = false;
        fourEnabled = false;
        fiveEnabled = false;
        sixEnabled = false;
        sevenEnabled = false;
    }
    if (drankEnabled === false) {
        changeOneClass.classList.replace("one-off", "one-on")
        changeTwoClass.classList.replace("one-on", "one-off")
        changeThreeClass.classList.replace("one-on", "one-off")
        changeFourClass.classList.replace("one-on", "one-off")
        changeFiveClass.classList.replace("one-on", "one-off")
        changeSixClass.classList.replace("one-on", "one-off")
        changeSevenClass.classList.replace("one-on", "one-off")
        activateOne.classList.add("is-active")
        activateTwo.classList.remove("is-active")
        activateThree.classList.remove("is-active")
        activateFour.classList.remove("is-active")
        activateFive.classList.remove("is-active")
        activateSix.classList.remove("is-active")
        activateSeven.classList.remove("is-active")
    }
    if (drankEnabled === true) {
        changeOneClass.classList.replace("one-off", "one-on")
        changeTwoClass.classList.replace("one-on", "one-off")
        changeThreeClass.classList.replace("one-on", "one-off")
        changeFourClass.classList.replace("one-on", "one-off")
        changeFiveClass.classList.replace("one-on", "one-off")
        changeSixClass.classList.replace("one-on", "one-off")
        changeSevenClass.classList.replace("one-on", "one-off")
        activateOne.classList.add("is-active")
        activateTwo.classList.remove("is-active")
        activateThree.classList.remove("is-active")
        activateFour.classList.remove("is-active")
        activateFive.classList.remove("is-active")
        activateSix.classList.remove("is-active")
        activateSeven.classList.remove("is-active")
    }
}

document.getElementById("five").onclick = () => {
    if (fiveEnabled === false) {
        oneEnabled = false;
        twoEnabled = false;
        threeEnabled = false;
        fourEnabled = false;
        fiveEnabled = true;
        sixEnabled = false;
        sevenEnabled = false;
    } else {
        oneEnabled = false;
        twoEnabled = false;
        threeEnabled = false;
        fourEnabled = false;
        fiveEnabled = false;
        sixEnabled = false;
        sevenEnabled = false;
    }
    if (fiveEnabled === false) {
        changeOneClass.classList.replace("one-off", "one-on")
        changeTwoClass.classList.replace("one-on", "one-off")
        changeThreeClass.classList.replace("one-on", "one-off")
        changeFourClass.classList.replace("one-on", "one-off")
        changeFiveClass.classList.replace("one-on", "one-off")
        changeSixClass.classList.replace("one-on", "one-off")
        changeSevenClass.classList.replace("one-on", "one-off")
        activateOne.classList.add("is-active")
        activateTwo.classList.remove("is-active")
        activateThree.classList.remove("is-active")
        activateFour.classList.remove("is-active")
        activateFive.classList.remove("is-active")
        activateSix.classList.remove("is-active")
        activateSeven.classList.remove("is-active")
    }
    if (fiveEnabled === true) {
        changeOneClass.classList.replace("one-off", "one-on")
        changeTwoClass.classList.replace("one-on", "one-off")
        changeThreeClass.classList.replace("one-on", "one-off")
        changeFourClass.classList.replace("one-on", "one-off")
        changeFiveClass.classList.replace("one-on", "one-off")
        changeSixClass.classList.replace("one-on", "one-off")
        changeSevenClass.classList.replace("one-on", "one-off")
        activateOne.classList.add("is-active")
        activateTwo.classList.remove("is-active")
        activateThree.classList.remove("is-active")
        activateFour.classList.remove("is-active")
        activateFive.classList.remove("is-active")
        activateSix.classList.remove("is-active")
        activateSeven.classList.remove("is-active")
    }
}

document.getElementById("six").onclick = () => {
    if (fiveEnabled === false) {
        oneEnabled = false;
        twoEnabled = false;
        threeEnabled = false;
        fourEnabled = false;
        fiveEnabled = false;
        sixEnabled = true;
        sevenEnabled = false;
    } else {
        oneEnabled = false;
        twoEnabled = false;
        threeEnabled = false;
        fourEnabled = false;
        fiveEnabled = false;
        sixEnabled = false;
        sevenEnabled = false;
    }
    if (fiveEnabled === false) {
        changeOneClass.classList.replace("one-off", "one-on")
        changeTwoClass.classList.replace("one-on", "one-off")
        changeThreeClass.classList.replace("one-on", "one-off")
        changeFourClass.classList.replace("one-on", "one-off")
        changeFiveClass.classList.replace("one-on", "one-off")
        changeSixClass.classList.replace("one-on", "one-off")
        changeSevenClass.classList.replace("one-on", "one-off")
        activateOne.classList.add("is-active")
        activateTwo.classList.remove("is-active")
        activateThree.classList.remove("is-active")
        activateFour.classList.remove("is-active")
        activateFive.classList.remove("is-active")
        activateSix.classList.remove("is-active")
        activateSeven.classList.remove("is-active")
    }
    if (fiveEnabled === true) {
        changeOneClass.classList.replace("one-off", "one-on")
        changeTwoClass.classList.replace("one-on", "one-off")
        changeThreeClass.classList.replace("one-on", "one-off")
        changeFourClass.classList.replace("one-on", "one-off")
        changeFiveClass.classList.replace("one-on", "one-off")
        changeSixClass.classList.replace("one-on", "one-off")
        changeSevenClass.classList.replace("one-on", "one-off")
        activateOne.classList.add("is-active")
        activateTwo.classList.remove("is-active")
        activateThree.classList.remove("is-active")
        activateFour.classList.remove("is-active")
        activateFive.classList.remove("is-active")
        activateSix.classList.remove("is-active")
        activateSeven.classList.remove("is-active")
    }
}

document.getElementById("seven").onclick = () => {
    if (fiveEnabled === false) {
        oneEnabled = false;
        twoEnabled = false;
        threeEnabled = false;
        fourEnabled = false;
        fiveEnabled = false;
        sixEnabled = false;
        sevenEnabled = true;
    } else {
        oneEnabled = false;
        twoEnabled = false;
        threeEnabled = false;
        fourEnabled = false;
        fiveEnabled = false;
        sixEnabled = false;
        sevenEnabled = false;
    }
    if (fiveEnabled === false) {
        changeOneClass.classList.replace("one-off", "one-on")
        changeTwoClass.classList.replace("one-on", "one-off")
        changeThreeClass.classList.replace("one-on", "one-off")
        changeFourClass.classList.replace("one-on", "one-off")
        changeFiveClass.classList.replace("one-on", "one-off")
        changeSixClass.classList.replace("one-on", "one-off")
        changeSevenClass.classList.replace("one-on", "one-off")
        activateOne.classList.add("is-active")
        activateTwo.classList.remove("is-active")
        activateThree.classList.remove("is-active")
        activateFour.classList.remove("is-active")
        activateFive.classList.remove("is-active")
        activateSix.classList.remove("is-active")
        activateSeven.classList.remove("is-active")
    }
    if (fiveEnabled === true) {
        changeOneClass.classList.replace("one-off", "one-on")
        changeTwoClass.classList.replace("one-on", "one-off")
        changeThreeClass.classList.replace("one-on", "one-off")
        changeFourClass.classList.replace("one-on", "one-off")
        changeFiveClass.classList.replace("one-on", "one-off")
        changeSixClass.classList.replace("one-on", "one-off")
        changeSevenClass.classList.replace("one-on", "one-off")
        activateOne.classList.add("is-active")
        activateTwo.classList.remove("is-active")
        activateThree.classList.remove("is-active")
        activateFour.classList.remove("is-active")
        activateFive.classList.remove("is-active")
        activateSix.classList.remove("is-active")
        activateSeven.classList.remove("is-active")
    }
}