let qr_image = document.querySelector("#qr-image")
let img = document.querySelector("#img")

function gerarQR() {
    qr_image.style.display = 'block'

    let QRtext = document.querySelector("#text").value

    if (QRtext.trim().length == 0) {
        document.querySelector("#qr-image .error").innerHTML = 'Por favor, digite o texto!'
        img.style.display = 'none'
    } else {
        img.style.display = 'block'
        document.querySelector("#qr-image .error").innerHTML = ''
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${QRtext}`
    }

}