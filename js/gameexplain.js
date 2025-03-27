window.addEventListener('load', init);

let field
function init(){
    field = document.getElementById('body')
    makeMainItems()

}
function makeMainItems(){
    let div = document.createElement('div')
    let p = document.createElement('p')
    let image = document.createElement('img')
    let button1 = document.createElement('button')
    let button2 = document.createElement('button')


    div.classList.add('center-container')

    p.innerText = 'Het spel bestaat uit een veld met een middenlijn.' +
        ' Blijf in je eigen veld en probeer de bal over het net te slaan in maximaal twee slagen' +
        ' De bal is gevestiged aan een touw en als hij uit de lijn gaat dan krijgt de ander een punt';
    div.appendChild(p)

    image.src = 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
    image.alt = 'placeholder'
    image.classList.add('explImage')
    div.appendChild(image)

    button1.innerText = 'Terug'
    button2.innerText = 'Naar spelregels'
    div.appendChild(button1)
    div.appendChild(button2)

    field.appendChild(div)
}