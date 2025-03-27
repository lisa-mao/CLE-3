window.addEventListener('load', init);

let field
let toggle
let check = true
function init(){
    field = document.getElementById('header')
    toggle = document.getElementById('toggle')
    body = document.getElementById('body')

    toggle.addEventListener('click', backgroundViceVersa)
}

function backgroundViceVersa(e){
    let target = e.target
    if (target.nodeName === 'BUTTON' && target.id === 'toggle'){
        if (check === true){
            let body = document.getElementById('body')
            body.classList.add('extraClass')
            check = false
        } else {
        body.classList.remove('extraClass')}
    }
}