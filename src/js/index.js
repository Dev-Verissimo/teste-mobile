let menu = document.getElementById("menu")
let fotoMenu2 = document.getElementById("menuAberto")
let fotoMenu1 = document.getElementById("menuFoto")
let menu2 = document.getElementById("menu2")

fotoMenu1.onclick = function () {
    fotoMenu2.style.display = 'block'
    fotoMenu1.style.display = 'none'
    menu2.style.display = 'block'
}

fotoMenu2.onclick = function () {
    fotoMenu1.style.display = 'block'
    fotoMenu2.style.display = 'none'
    menu2.style.display = 'none'
}

window.location = "#wall-1";