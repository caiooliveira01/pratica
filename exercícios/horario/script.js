function carregar() {
    let msg = document.querySelector("#msg")
    let img = document.querySelector("#img")
    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 00 && hora < 12) {
        img.src = 'foto-manha.png'
        document.body.style.background = '#E2CD9F'

    } else if (hora <= 18) {
        img.src = 'foto-tarde.png'
        document.body.style.background = '#462738'

    } else {
        img.src = 'foto-noite.png'
        document.body.style.background = '#21293E'
    }
}