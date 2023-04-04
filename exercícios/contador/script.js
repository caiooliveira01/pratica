function contagem() {
    let i = Number(document.querySelector("#inicio").value)
    let f = Number(document.querySelector("#fim").value)
    let p = Number(document.querySelector("#passo").value)
    let resultado = document.querySelector("#resultado")

    if (i == '' || f == '' || p == '' || isNaN(i) || isNaN(f) || isNaN(p)) {
        resultado.innerHTML = 'Impossível concluir a contagem!'
    } else {
        resultado.innerHTML = 'Contando: <br>'
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c += p) { // Contagem progressiva
                resultado.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for(let c = i; c >= f; c -= p) { // Contagem regressiva
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}