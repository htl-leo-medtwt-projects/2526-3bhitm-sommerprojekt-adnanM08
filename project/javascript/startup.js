let body = document.getElementsByTagName('body')[0]

function init() {
    body.innerHTML = `
    <div id="textContainer">
    <h3>EPILEPSY WARNING: Flashing lights and loud noises may occur. 
    Consider talking to a medical professional before playing.</h3>
    <h3>Fullscreen (F11) and headphones are advised for best experience.</h3>
    </div>`
    let textContainer = document.getElementById('textContainer');
    textContainer.style.animation = 'fadeOut 2s 3s ease-in-out'
    setTimeout(function() {
        textContainer.style.opacity = 0
        textContainer.innerHTML = `
        <h1 id="title">GameCorner</h1>`
    }, 5000)
    textContainer.style.animation = 'fadeIn 2s 6s ease-in-out'
    setTimeout(function() {
        textContainer.style.opacity = 1
    }, 8000)
}

init();