var btn = document.querySelector("#cor")
btn.addEventListener('click', mudar)

function mudar() {
    let maxVal = 0xFFFFFF // 0x adicionado antes do hex em JS
    let randomNumber = Math.random() * maxVal // Número aleatório flutuante
    randomNumber = Math.floor(randomNumber) // Converte o número em um inteiro
    randomNumber = randomNumber.toString(16) // Inteiro em Hex novamente
    let randColor = randomNumber.padStart(6, 0) // Tamanho da string de pelo menos 6

    document.body.style.background = `#${randColor.toUpperCase()}`
}