window.addEventListener('load', init);

let field
let body
function init(){
    field = document.getElementById('body')
    makeMainItems()
    getFromLocalStorage()
    field.addEventListener('click', clickHandler)
}
function makeMainItems(){
    let div = document.createElement('div')
    let p = document.createElement('p')
    let image = document.createElement('img')
    let button1 = document.createElement('button')
    let button2 = document.createElement('button')
    let a1 = document.createElement('a')
    let a2 = document.createElement('a')
    let readButton = document.createElement('button')



    div.classList.add('center-container')

    readButton.innerHTML = 'Voorleesknop'
    readButton.id = 'voorlees'
    div.appendChild(readButton)

    p.innerText = 'Het spel bestaat uit een veld met een middenlijn.' +
        ' Blijf in je eigen veld en probeer de bal over het net te slaan in maximaal twee slagen' +
        ' De bal is gevestiged aan een touw en als hij uit de lijn gaat dan krijgt de ander een punt';
    p.id = 'text'
    div.appendChild(p)

    image.src = 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
    image.alt = 'placeholder'
    image.classList.add('explImage')
    div.appendChild(image)

    button1.innerText = 'Terug'
    button2.innerText = 'Naar spelregels'
    a1.href = 'index.html'
    a2.href = 'playrules.html'
    a1.appendChild(button1)
    a2.appendChild(button2)
    div.appendChild(a1)
    div.appendChild(a2)

    field.appendChild(div)
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
