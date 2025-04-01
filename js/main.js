window.addEventListener('load', init);

let field
let buttonField
let check = true
function init(){
    field = document.getElementById('header')
    buttonField = document.getElementById('button-field')

    field.addEventListener('click', backgroundViceVersa)
    getFromLocalStorage()
}

function backgroundViceVersa(e){
    let target = e.target
    if (target.nodeName === 'BUTTON' && target.id === 'toggle'){
        let body = document.getElementById('body')
        if (check === true){
            body.classList.add('extraClass')
            check = false
        } else {
        body.classList.remove('extraClass')
        check = true
        }
        if (check === false){
            if (localStorage !== null){
            localStorage.setItem('backgroundSetting', 'light')
            }
        }
        if (check === true){
            if (localStorage !== null){
                localStorage.clear()
            }
            return;
        }
    }
    if (target.nodeName === 'BUTTON' && target.id === 'voorlees'){
        let title = document.getElementById('title')
        let text = document.getElementById('text')
        textToSpeech(title.innerHTML)
        textToSpeech(text.innerHTML)
    }
}

function getFromLocalStorage(){
    body = document.getElementById('body')
    if (localStorage.getItem('backgroundSetting') === null){
        return;
    } body.classList.add('extraClass')
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
